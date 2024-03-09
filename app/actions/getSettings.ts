'use server';

import { cookies } from 'next/headers';

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
                    'Set-Cookie': `accessToken=${accessToken}; refreshToken=${refreshToken}`,
                },
                cache: 'no-store',
            }
        );

        if (response.ok) {
            return response.json();
        } else if (response.status === 401) {
            throw new Error('Unauthorized');
        } else {
            throw new Error('Request failed');
        }
    } catch (error: any) {
        // console.log(error.message);

        return error.message;
    }
}
