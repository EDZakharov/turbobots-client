'use server';
// import { signIn } from '@/auth'
import { AuthError } from 'next-auth';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { permanentRedirect, redirect } from 'next/navigation';
import { login } from './fetch/login';
import { accessTokenRegExp, refreshTokenRegExp } from './regExp/tokensRegexp';
import { parseCookie } from './utils/parseCookies';
export async function navigateToDashboard() {
    redirect(`/dashboard`);
}
export async function navigateToDashboardPermanent() {
    permanentRedirect(`/dashboard`);
}
export async function navigateToLogin() {
    redirect(`/login`);
}

export async function revalidatePathAction(path: string) {
    revalidatePath(path);
}

export async function authenticate(
    prevState: string | undefined,
    formData: FormData
) {
    try {
        // await signIn('credentials', formData)
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                default:
                    return 'Something went wrong.';
            }
        }
        throw error;
    }
}

export async function clearCookies() {
    const cookie = cookies();
    cookie.delete('accessToken');
    cookie.delete('refreshToken');
}

export async function register(
    prevState: string | undefined,
    formData: FormData
) {
    try {
        const username = formData.get('username');
        const email = formData.get('email');
        const name = formData.get('name');
        const password = formData.get('password');

        const response = await fetch(
            'http://localhost:3000/api/auth/register',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    email,
                    name,
                    password,
                }),
                // cache: 'no-store',
            }
        );

        if (response.ok) {
            return navigateToLogin();
        } else {
            const { message } = await response.json();
            throw new Error(message);
        }
    } catch (error: any) {
        if (error) {
            return error.message;
        }
        throw error;
    }
}

export async function formLogin(
    prevState: string | undefined,
    formData: FormData
) {
    try {
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        const response = await login({ email, password });
        const cookiesList = cookies();
        const setCookieHeader = response.headers.get('set-cookie');
        const refreshToken = setCookieHeader?.match(
            refreshTokenRegExp
        ) as unknown as string;
        const accessToken = setCookieHeader?.match(
            accessTokenRegExp
        ) as unknown as string;

        const parsedAccessCookies = parseCookie(accessToken[0]);
        const parsedRefreshCookies = parseCookie(refreshToken[0]);

        if (
            parsedAccessCookies.accessToken &&
            parsedRefreshCookies.refreshToken
        ) {
            cookiesList.delete('accessToken');
            cookiesList.delete('refreshToken');

            cookiesList.set({
                name: 'accessToken',
                value: parsedAccessCookies.accessToken,
                secure: true,
                httpOnly: true,
                path: '/',
                sameSite: 'strict',
                maxAge: parsedAccessCookies['Max-Age'],
            });

            cookiesList.set({
                name: 'refreshToken',
                value: parsedRefreshCookies.refreshToken,
                secure: true,
                httpOnly: true,
                path: '/',
                sameSite: 'strict',
                maxAge: parsedRefreshCookies['Max-Age'],
            });

            return navigateToDashboard();
        }
    } catch (error: any) {
        return error.message;
    }
}

export async function formSettings(
    prevState: string | undefined,
    formData: FormData
) {
    try {
        const {
            targetProfitPercent,
            startOrderVolumeUSDT,
            insuranceOrderVolumeUSDT,
            insuranceOrderSteps,
            insuranceOrderVolumeMultiplier,
            insuranceOrderStepsMultiplier,
            insuranceOrderPriceDeviationPercent,
        } = Object.fromEntries(formData.entries());

        if (
            !targetProfitPercent &&
            !startOrderVolumeUSDT &&
            !insuranceOrderVolumeUSDT &&
            !insuranceOrderSteps &&
            !insuranceOrderVolumeMultiplier &&
            !insuranceOrderStepsMultiplier &&
            !insuranceOrderPriceDeviationPercent
        ) {
            throw new Error('Missing data');
        }

        const cookiesList = cookies();

        const accessToken = cookiesList.get('accessToken')?.value;

        const response = await fetch(
            `http://localhost:3000/api/bots/1/settings`,
            {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    'Set-cookie': `accessToken=${accessToken}`,
                },
                body: JSON.stringify({
                    targetProfitPercent,
                    startOrderVolumeUSDT,
                    insuranceOrderVolumeUSDT,
                    insuranceOrderSteps,
                    insuranceOrderVolumeMultiplier,
                    insuranceOrderStepsMultiplier,
                    insuranceOrderPriceDeviationPercent,
                }),
                cache: 'no-store',
            }
        );
    } catch (error: any) {
        console.log(error.message);
        return error.message;
    }
}

export async function getFormSettingsDefaultData(
    botId: string
    // pathname: string
) {
    try {
        if (!botId) {
            throw new Error('Missing data');
        }
        const cookieList = cookies();
        const accessToken = cookieList.get('accessToken')?.value;
        const refreshToken = cookieList.get('refreshToken')?.value;

        // const { data } = await instance.get(`bots/${botId}/settings`, {
        //     headers: {
        //         'Set-cookie': `accessToken=${accessToken}`,
        //     },
        // });

        const response = await fetch(
            `http://localhost:3000/api/bots/${botId}/settings`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Set-Cookie': `accessToken=${accessToken}`,
                },
                cache: 'no-store',
            }
        );
        revalidatePath(`/dashboard/bots/${botId}/settings`);

        return response.json();
    } catch (error: any) {
        // revalidatePath(`/dashboard/bots/${botId}/settings`);
        console.log(error.message);

        return error.message;
    }
}

export async function setCookie(setCookieHeader: string, currentPath?: string) {
    try {
        const cookieList = cookies();

        const refreshToken = setCookieHeader?.match(
            refreshTokenRegExp
        ) as unknown as string;
        const accessToken = setCookieHeader?.match(
            accessTokenRegExp
        ) as unknown as string;

        const parsedAccessCookies = parseCookie(accessToken[0]);
        const parsedRefreshCookies = parseCookie(refreshToken[0]);

        if (
            parsedAccessCookies.accessToken &&
            parsedRefreshCookies.refreshToken
        ) {
            cookieList.delete('accessToken');
            cookieList.delete('refreshToken');

            cookieList.set({
                name: 'accessToken',
                value: parsedAccessCookies.accessToken,
                secure: true,
                httpOnly: true,
                path: '/',
                sameSite: 'strict',
                maxAge: parsedAccessCookies['Max-Age'],
            });

            cookieList.set({
                name: 'refreshToken',
                value: parsedRefreshCookies.refreshToken,
                secure: true,
                httpOnly: true,
                path: '/',
                sameSite: 'strict',
                maxAge: parsedRefreshCookies['Max-Age'],
            });
        }
    } catch (error: any) {
        // revalidatePath(`/dashboard/bots/${botId}/settings`);
        console.log(error.message);

        return error.message;
    }
}
