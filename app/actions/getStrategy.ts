'use server';
import { cookies } from 'next/headers';

export async function getStrategyTableData(botId: string) {
    try {
        if (!botId) {
            throw new Error('Missing data');
        }
        const cookieList = cookies();
        const accessToken = cookieList.get('accessToken')?.value;
        const refreshToken = cookieList.get('refreshToken')?.value;
        const response = await fetch(
            `http://localhost:7000/api/generate-strategy`,

            {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify({
                    botId: '65dbc1a57040846689d9cf10',
                    coin: 'BTCUSDT',
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Set-Cookie': `accessToken=${accessToken}`,
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
