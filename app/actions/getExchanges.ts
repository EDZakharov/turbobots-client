'use server';

import { TickerSpotV5 } from 'bybit-api/lib/types/response/v5-market';
import { connectToExchange } from '../lib/utils/exchanges';

interface IExchange {
    exchanges: {
        longName: string;
        isPublicApi: boolean;
    }[];
}

export async function getExchangesInfo({ exchanges }: IExchange) {
    try {
        if (exchanges.length === 0) {
            throw new Error('Available exchanges not found');
        }

        let exchangesData = [];

        exchangesData = await Promise.all(
            exchanges.map(async (exch) => {
                const exchange = connectToExchange({
                    longName: exch.longName,
                    isPublicApi: exch.isPublicApi,
                });
                if (exch.longName === 'bybit') {
                    const data = await exchange?.getTickers({
                        category: 'spot',
                    });
                    if (!data) return;

                    const newData = {
                        name: exch.longName,
                        data: data.result.list,
                    } as { name: string; data: TickerSpotV5[] };
                    return newData;
                }

                return;
            })
        );

        return exchangesData.filter(Boolean);
    } catch (error: any) {
        return [];
    }
}
