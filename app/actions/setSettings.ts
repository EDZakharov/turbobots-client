'use server';

import { JwtPayload, verify } from 'jsonwebtoken';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { BotSettings } from '../lib/mongodb/models/settingsModel';
import { dbConnect } from '../lib/mongodb/mongodb';

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
        const accessToken = cookiesList.get('accessToken')?.value as string;

        const secretA = process.env.APP_DB_SECRET_ACCESS_TOKEN || '';
        await dbConnect();
        const { id } = verify(accessToken, secretA) as JwtPayload;

        if (!id) {
            throw new Error('Bad user id');
        }

        const foundDuplicate = await BotSettings.findOne({
            id,
            botId,
        });

        if (!foundDuplicate) {
            const setSettings = new BotSettings({
                id,
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
            return;
        } else {
            await BotSettings.updateOne(
                { id, botId },
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
        }

        revalidatePath(`/dashboard/bots/${botId}/settings`);
    } catch (error: any) {
        console.log(error.message);
        return error.message;
    }
}
