import { TokenModel } from '@/app/lib/mongodb/models/tokenModel';
import { dbConnect } from '@/app/lib/mongodb/mongodb';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function DELETE(request: NextRequest) {
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
        const cookie = cookies();
        const refreshToken = cookie.get('refreshToken');

        if (!refreshToken) {
            return showUnauthorizedError();
        }
        await dbConnect();

        const result = await TokenModel.deleteOne({
            refreshToken: refreshToken.value,
        });

        if (!result) {
            return showUnauthorizedError();
        }

        cookie.delete('accessToken');
        cookie.delete('refreshToken');
        return NextResponse.json(
            {
                message: 'Successfully logged out',
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
            {
                message: 'Unable to log out',
            },
            {
                headers: {
                    'Content-Type': `application/json`,
                },
                status: 500,
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
