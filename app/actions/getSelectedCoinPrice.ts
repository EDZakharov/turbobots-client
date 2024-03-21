'use server';

import { connectToExchange } from '../lib/utils/exchanges';

export async function getPrice({ coin }: { coin: string }) {
    try {
        const currentExchange = { longName: 'bybit', isPublicApi: false };
        const connection = connectToExchange(currentExchange);
        switch (currentExchange.longName) {
            case 'bybit': {
                try {
                    const tickerInfo = await connection?.getTickers({
                        category: 'spot',
                        symbol: coin,
                    });
                    return tickerInfo && +tickerInfo.result.list[0].lastPrice;
                } catch (error) {
                    return;
                }
            }
        }
    } catch (error: any) {
        return [];
    }
}
