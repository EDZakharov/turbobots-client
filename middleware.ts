import { jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { NextResponse, type NextRequest } from 'next/server';
import { parseCookie } from './app/lib/utils/parseCookies';
import {
    accessTokenRegExp,
    refreshTokenRegExp,
} from './app/lib/utils/regExp/tokensRegexp';

const maxRetries = 2;
let currentRetry = 0;

interface IAToken {
    accessToken: string;
    Path: string;
    // Expires: string;
    'Max-Age': string;
    Secure: string;
    HttpOnly: string;
    SameSite: string;
}
interface IRToken {
    refreshToken: string;
    Path: string;
    // Expires: string;
    'Max-Age': string;
    Secure: string;
    HttpOnly: string;
    SameSite: string;
}

export async function middleware(request: NextRequest) {
    if (request.url.includes('/auth')) {
        return NextResponse.next();
    }

    const currentPath = request.nextUrl.pathname;

    const cookieList = cookies();
    const accessToken = cookieList.get('accessToken')?.value;
    const refreshToken = cookieList.get('refreshToken')?.value;

    if (currentPath.startsWith('/login') && accessToken && refreshToken) {
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    if (
        !currentPath.includes('/login') &&
        !currentPath.includes('/register') &&
        !accessToken &&
        !refreshToken
    ) {
        if (currentPath !== '/') {
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }

    if (currentPath.startsWith('/dashboard')) {
        if (!accessToken || !(await isValidAccessToken(accessToken))) {
            if (!refreshToken) {
                return NextResponse.redirect(new URL('/login', request.url));
            }
            try {
                if (currentRetry >= maxRetries) {
                    throw new Error('Retries end');
                }

                currentRetry += 1;
                const result = await fetch(
                    'http://localhost:3000/api/auth/refresh',
                    {
                        method: 'PUT',
                        credentials: 'include',
                        headers: {
                            'Content-type': 'application/json',
                            'Set-cookie': `refreshToken=${refreshToken}`,
                        },
                        cache: 'no-store',
                    }
                );

                const cookiesList = result.headers.get('Set-cookie');

                const newAccessToken = cookiesList?.match(
                    accessTokenRegExp
                ) as unknown as string;
                const newRefreshToken = cookiesList?.match(
                    refreshTokenRegExp
                ) as unknown as string;

                const parsedAccessCookies = parseCookie(
                    newAccessToken[0]
                ) as IAToken;
                const parsedRefreshCookies = parseCookie(
                    newRefreshToken[0]
                ) as IRToken;

                currentRetry = 0;
                const response = NextResponse.redirect(new URL(request.url));
                response.cookies.set(
                    'accessToken',
                    parsedAccessCookies.accessToken,
                    {
                        path: parsedAccessCookies.Path,
                        maxAge: +parsedAccessCookies['Max-Age'],
                        secure: true,
                        httpOnly: true,
                        sameSite: 'strict',
                    }
                );
                response.cookies.set(
                    'refreshToken',
                    parsedRefreshCookies.refreshToken,
                    {
                        path: parsedRefreshCookies.Path,
                        maxAge: +parsedRefreshCookies['Max-Age'],
                        secure: true,
                        httpOnly: true,
                        sameSite: 'strict',
                    }
                );

                return response;
            } catch (error) {
                currentRetry = 0;
                return NextResponse.redirect(new URL('/login', request.url));
            }
        }
    }
    return NextResponse.next();
}

async function isValidAccessToken(accessToken: string): Promise<boolean> {
    const checkAccessSecret = process.env.APP_DB_SECRET_ACCESS_TOKEN || '';
    try {
        await jwtVerify(
            accessToken,
            new TextEncoder().encode(checkAccessSecret)
        );

        return true;
    } catch (error) {
        return false;
    }
}

export const config = {
    matcher: ['/', '/dashboard/:path*', '/login', '/register'],
};
