import {
    MAX_AGE_ACCESS_TOKEN,
    MAX_AGE_REFRESH_TOKEN,
} from '@/app/lib/constants/constants';
import { TokenModel } from '@/app/lib/mongodb/models/tokenModel';
import { User } from '@/app/lib/mongodb/models/usermodel';
import { dbConnect } from '@/app/lib/mongodb/mongodb';
import { UserDTO } from '@/app/lib/mongodb/serialize/SerializeUser';
import {
    generateTokens,
    saveRefreshToken,
} from '@/app/lib/mongodb/tokens/tokens';
import { decryptPayload } from '@/app/lib/utils/forge';
import { jwtVerify } from 'jose';

import { NextRequest, NextResponse } from 'next/server';

export async function PUT(request: NextRequest) {
    try {
        await dbConnect();
        const checkAccessSecret = process.env.APP_DB_SECRET_ACCESS_TOKEN;
        const checkRefreshSecret = process.env.APP_DB_SECRET_REFRESH_TOKEN;
        if (!checkAccessSecret || !checkRefreshSecret) {
            return NextResponse.json(
                {
                    message:
                        'The server encountered an internal configuration error',
                },
                {
                    headers: {
                        'Content-Type': `application/json`,
                        accept: `application/json`,
                    },
                    status: 506,
                }
            );
        }

        // const cookie = cookies();

        const refreshToken = request.headers
            .get('Set-Cookie')
            ?.match(/^refreshToken=/)
            ? request.headers.get('Set-Cookie')?.replace(/^refreshToken=/, '')
            : undefined;

        if (!refreshToken) {
            return showUnauthorizedError();
        }

        const user = await TokenModel.findOne({
            refreshToken: refreshToken,
        });

        if (!user) {
            return showUnauthorizedError();
        }
        const forgePrivate = process.env.FORGE_PRIVATE || '';

        const { payload }: { payload: any } = await jwtVerify(
            user.refreshToken,
            new TextEncoder().encode(checkAccessSecret)
        );

        const decryptedPayload = decryptPayload(payload.payload, forgePrivate);

        const newUser = await User.findById(decryptedPayload.id);
        // const secureUserAgent = userAgent(request)

        const userDto = new UserDTO(newUser);
        const newPayload = { ...userDto };
        const tokens = generateTokens(
            { ...newPayload },
            checkAccessSecret,
            checkRefreshSecret
        );

        await saveRefreshToken(userDto.id, tokens.refreshToken);

        const response = NextResponse.json(
            { message: 'Success!' },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
                status: 200,
            }
        );

        response.cookies.set('accessToken', tokens.accessToken, {
            httpOnly: true,
            sameSite: 'strict',
            secure: true,
            path: '/',
            maxAge: MAX_AGE_ACCESS_TOKEN,
        });

        response.cookies.set('refreshToken', tokens.refreshToken, {
            httpOnly: true,
            sameSite: 'strict',
            secure: true,
            path: '/',
            maxAge: MAX_AGE_REFRESH_TOKEN,
        });

        return response;
    } catch (error) {
        console.log(error);

        return NextResponse.json(
            {
                message: 'Unable to refresh tokens',
            },
            {
                headers: {
                    'Content-Type': `application/json`,
                },
                status: 403,
            }
        );
    }
}

function showUnauthorizedError() {
    return NextResponse.json(
        { message: 'Unauthorized' },
        {
            headers: {
                'Content-Type': `application/json`,
            },
            status: 401,
        }
    );
}
