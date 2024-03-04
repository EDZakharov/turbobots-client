import {
    MAX_AGE_ACCESS_TOKEN,
    MAX_AGE_REFRESH_TOKEN,
} from '@/constants/constants';
import { TokenModel } from '@/mongodb/models/tokenModel';
import { User } from '@/mongodb/models/usermodel';
import { dbConnect } from '@/mongodb/mongodb';

import { UserDTO } from '@/mongodb/serialize/SerializeUser';
import { generateTokens, saveRefreshToken } from '@/mongodb/tokens/tokens';
import { cookies } from 'next/headers';
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

        const cookie = cookies();

        const refreshToken = request.headers
            .get('Set-cookie')
            ?.replace(/refreshToken=/, '')
            .toString();

        if (!refreshToken) {
            return showUnauthorizedError();
        }

        const user = await TokenModel.findOne({
            refreshToken: refreshToken,
        });

        if (!user) {
            return showUnauthorizedError();
        }

        const newUser = await User.findById(user.userId);
        // const secureUserAgent = userAgent(request)

        const userDto = new UserDTO(newUser);
        const payload = { ...userDto };
        const tokens = generateTokens(
            { ...payload },
            checkAccessSecret,
            checkRefreshSecret
        );

        await saveRefreshToken(userDto.id, tokens.refreshToken);

        cookie.set('accessToken', tokens.accessToken, {
            httpOnly: true,
            sameSite: 'strict',
            secure: true,
            path: '/',
            maxAge: MAX_AGE_ACCESS_TOKEN,
        });

        cookie.set('refreshToken', tokens.refreshToken, {
            httpOnly: true,
            sameSite: 'strict',
            secure: true,
            path: '/',
            maxAge: MAX_AGE_REFRESH_TOKEN,
        });

        return NextResponse.json(
            {
                message: 'Success!',
            },
            {
                headers: {
                    'Content-Type': `application/json`,
                },
                status: 200,
            }
        );
    } catch (error) {
        // console.log(error);

        return NextResponse.json(
            {
                message: 'Unable to refresh tokens',
            },
            {
                headers: {
                    'Content-Type': `application/json`,
                },
                status: 401,
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
