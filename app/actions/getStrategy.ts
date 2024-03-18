'use server';

import { jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { DefaultStrategy } from '../lib/mongodb/models/defaultStrategyModel';
import { decryptPayload } from '../lib/utils/forge';

export async function getStrategyTableData(botId: string) {
    try {
        if (!botId) {
            throw new Error('Missing data');
        }

        const cookiesList = cookies();
        const refreshToken = cookiesList.get('refreshToken')?.value as string;

        const checkRefreshSecret =
            process.env.APP_DB_SECRET_REFRESH_TOKEN || '';
        const forgePrivate = process.env.FORGE_PRIVATE || '';

        const { payload }: { payload: any } = await jwtVerify(
            refreshToken,
            new TextEncoder().encode(checkRefreshSecret)
        );

        const decryptedPayload = decryptPayload(payload.payload, forgePrivate);

        const strategyFromDb = await DefaultStrategy.findOne({
            userId: decryptedPayload.id,
            botId,
            coin: 'BTCUSDT',
        });

        if (!strategyFromDb) {
            return [];
        }

        return strategyFromDb.strategy;
    } catch (error: any) {
        console.log(error.message);
        return [];
    }
}
