'use server';

import { jwtVerify } from 'jose';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { generateBotStrategy } from '../generateDCA';
import { IBuyOrdersStepsToGrid } from '../lib/@types/types';
import { DefaultStrategy } from '../lib/mongodb/models/defaultStrategyModel';
import { BotSettings } from '../lib/mongodb/models/settingsModel';
import SettingsDto from '../lib/srz/serializedSettings';
import { decryptPayload } from '../lib/utils/forge';

export async function formSettings(
    prevState: string | undefined,
    formData: FormData
) {
    try {
        const {
            botId,
            targetProfitPercent,
            startOrderVolumeUSDT,
            insuranceOrderVolumeUSDT,
            insuranceOrderSteps,
            insuranceOrderVolumeMultiplier,
            insuranceOrderStepsMultiplier,
            insuranceOrderPriceDeviationPercent,
        } = Object.fromEntries(formData.entries());

        if (
            !botId &&
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
        const accessToken = cookiesList.get('refreshToken')?.value as string;

        const checkRefreshSecret =
            process.env.APP_DB_SECRET_REFRESH_TOKEN || '';
        const forgePrivate = process.env.FORGE_PRIVATE || '';

        const { payload }: { payload: any } = await jwtVerify(
            accessToken,
            new TextEncoder().encode(checkRefreshSecret)
        );

        const decryptedPayload = decryptPayload(payload.payload, forgePrivate);

        if (!decryptedPayload.id) {
            throw new Error('Bad user id');
        }

        const foundDuplicate = await BotSettings.findOne({
            id: decryptedPayload.id,
            botId,
        });

        if (!foundDuplicate) {
            const setSettings = new BotSettings({
                id: decryptedPayload.id,
                botId,
                targetProfitPercent,
                startOrderVolumeUSDT,
                insuranceOrderVolumeUSDT,
                insuranceOrderSteps,
                insuranceOrderVolumeMultiplier,
                insuranceOrderStepsMultiplier,
                insuranceOrderPriceDeviationPercent,
            });

            await setSettings.save();

            await setDefaultStrategy(
                setSettings,
                decryptedPayload,
                botId,
                'BTCUSDT'
            );

            return;
        } else {
            await BotSettings.updateOne(
                { id: decryptedPayload.id, botId },
                {
                    targetProfitPercent,
                    startOrderVolumeUSDT,
                    insuranceOrderVolumeUSDT,
                    insuranceOrderSteps,
                    insuranceOrderVolumeMultiplier,
                    insuranceOrderStepsMultiplier,
                    insuranceOrderPriceDeviationPercent,
                }
            );
            const updatedSettings = await BotSettings.findOne({
                id: decryptedPayload.id,
                botId,
            });

            await setDefaultStrategy(
                updatedSettings,
                decryptedPayload,
                botId,
                'BTCUSDT'
            );
        }

        revalidatePath(`/dashboard/bots/${botId}/settings`);
    } catch (error: any) {
        console.log(error.message);
        return error.message;
    }
}

const setDefaultStrategy = async (
    settings: any,
    decryptedPayload: any,
    botId: any,
    coin: string
) => {
    const serializedSettings = new SettingsDto(settings);

    const generatedStrategy = generateBotStrategy(
        coin,
        {
            ...serializedSettings,
        },
        +tickerInfo1.result.list[0].lastPrice,
        0.001
    );

    const strategyDuplicate = await DefaultStrategy.findOne({
        userId: decryptedPayload.id,
        botId,
        coin,
    });

    if (!strategyDuplicate) {
        const createdStrategy = new DefaultStrategy({
            userId: decryptedPayload.id,
            botId,
            strategy: generatedStrategy as IBuyOrdersStepsToGrid[],
            coin,
        });

        await createdStrategy.save();
    } else {
        await DefaultStrategy.updateOne(
            { userId: decryptedPayload.id, botId, coin },
            {
                strategy: generatedStrategy as IBuyOrdersStepsToGrid[],
            }
        );
    }
};

const tickerInfo1 = {
    retCode: 0,
    retMsg: 'OK',
    result: {
        category: 'inverse',
        list: [
            {
                symbol: 'BTCUSD',
                lastPrice: '16597.00',
                indexPrice: '16598.54',
                markPrice: '16596.00',
                prevPrice24h: '16464.50',
                price24hPcnt: '0.008047',
                highPrice24h: '30912.50',
                lowPrice24h: '15700.00',
                prevPrice1h: '16595.50',
                openInterest: '373504107',
                openInterestValue: '22505.67',
                turnover24h: '2352.94950046',
                volume24h: '49337318',
                fundingRate: '-0.001034',
                nextFundingTime: '1672387200000',
                predictedDeliveryPrice: '',
                basisRate: '',
                deliveryFeeRate: '',
                deliveryTime: '0',
                ask1Size: '1',
                bid1Price: '16596.00',
                ask1Price: '16597.50',
                bid1Size: '1',
                basis: '',
            },
        ],
    },
    retExtInfo: {},
    time: 1672376496682,
};
