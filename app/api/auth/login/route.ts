import {
    MAX_AGE_ACCESS_TOKEN,
    MAX_AGE_REFRESH_TOKEN,
} from '@/app/lib/constants/constants';
import { User } from '@/app/lib/mongodb/models/usermodel';
import { dbConnect } from '@/app/lib/mongodb/mongodb';
import { UserDTO } from '@/app/lib/mongodb/serialize/SerializeUser';
import {
    generateTokens,
    saveRefreshToken,
} from '@/app/lib/mongodb/tokens/tokens';

import bcrypt from 'bcrypt';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

interface IUserCredentials {
    email: string;
    password: string;
}

export async function POST(request: NextRequest) {
    try {
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
                    },
                    status: 506,
                }
            );
        }
        await dbConnect();
        const { email, password }: IUserCredentials = await request.json();

        if (!email || !password) {
            return NextResponse.json(
                { message: 'Missing data!' },
                {
                    headers: {
                        'Content-Type': `application/json`,
                    },
                    status: 400,
                }
            );
        }

        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json(
                { message: 'Email not found' },
                {
                    headers: {
                        'Content-Type': `application/json`,
                    },
                    status: 404,
                }
            );
        }

        // if (user.role !== role) {
        // 	await dbDisconnect()
        // 	return NextResponse.json(
        // 		{
        // 			message: 'The client does not have permission to access the content',
        // 		},
        // 		{
        // 			headers: {
        // 				'Content-Type': `application/json`,
        // 			},
        // 			status: 403,
        // 		}
        // 	)
        // }
        // const secureUserAgent = userAgent(request)
        const passwordIsMatch = await bcrypt.compare(password, user.password);
        if (!passwordIsMatch) {
            return NextResponse.json(
                { message: 'Incorrect password' },
                {
                    headers: {
                        'Content-Type': `application/json`,
                    },
                    status: 409,
                }
            );
        }
        console.log(passwordIsMatch);
        const userDto = new UserDTO(user);
        const payload = { ...userDto };
        const tokens = await generateTokens(
            { ...payload },
            checkAccessSecret,
            checkRefreshSecret
        );

        await saveRefreshToken(userDto.id, tokens.refreshToken);

        const cookie = cookies();

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
        return NextResponse.json(
            { message: 'Unable to login' },
            {
                headers: {
                    'Content-Type': `application/json`,
                },
                status: 500,
            }
        );
    }
}
