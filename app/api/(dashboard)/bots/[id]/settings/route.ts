import { IBotConfig } from '@/app/@types/types';
import { BotSettings } from '@/mongodb/models/settingsModel';
import { dbConnect, dbDisconnect } from '@/mongodb/mongodb';
import { JwtPayload, verify } from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';
import { showUnauthorizedError } from '../../../exchanges/errors';
import { showCreatedCustomResponse } from '../../../exchanges/responses';

export async function POST(request: NextRequest) {
    try {
        const {
            targetProfitPercent,
            startOrderVolumeUSDT,
            insuranceOrderVolumeUSDT,
            insuranceOrderSteps,
            insuranceOrderVolumeMultiplier,
            insuranceOrderStepsMultiplier,
            insuranceOrderPriceDeviationPercent,
        }: IBotConfig = await request.json();

        if (
            !targetProfitPercent ||
            !startOrderVolumeUSDT ||
            !insuranceOrderVolumeUSDT ||
            !insuranceOrderSteps ||
            !insuranceOrderVolumeMultiplier ||
            !insuranceOrderStepsMultiplier ||
            !insuranceOrderPriceDeviationPercent
        ) {
            return NextResponse.json(
                { message: 'Bad settings data' },
                {
                    status: 400,
                }
            );
        }

        const accessToken = request.headers
            .get('Set-Cookie')
            ?.match(/^accessToken=/)
            ? request.headers.get('Set-Cookie')?.replace(/^accessToken=/, '')
            : undefined;

        if (!accessToken || accessToken === 'undefined') {
            return showUnauthorizedError();
        }

        const secretA = process.env.APP_DB_SECRET_ACCESS_TOKEN || '';

        await dbConnect();
        const { id } = verify(accessToken, secretA) as JwtPayload;

        // console.log('ok');

        const foundDuplicate = await BotSettings.findOne({
            id,
        });
        if (!foundDuplicate) {
            const setSettings = new BotSettings({
                id,
                targetProfitPercent,
                startOrderVolumeUSDT,
                insuranceOrderVolumeUSDT,
                insuranceOrderSteps,
                insuranceOrderVolumeMultiplier,
                insuranceOrderStepsMultiplier,
                insuranceOrderPriceDeviationPercent,
            });

            await setSettings.save();
            await dbDisconnect();
            return showCreatedCustomResponse(`Settings was created`);
        } else {
            await BotSettings.updateOne(
                { id },
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

        await dbDisconnect();
        return NextResponse.json(
            { message: 'Settings was updated' },
            {
                status: 200,
            }
        );
    } catch (error: any) {
        return NextResponse.json(
            { message: error.message },
            {
                status: 400,
            }
        );
    }
}
export async function GET(request: NextRequest) {
    try {
        await dbConnect();
        // const del = await BotSettings.deleteMany();

        const accessToken = request.headers
            .get('Set-Cookie')
            ?.match(/^accessToken=/)
            ? request.headers.get('Set-Cookie')?.replace(/^accessToken=/, '')
            : undefined;

        if (!accessToken || accessToken === 'undefined') {
            return showUnauthorizedError();
        }

        const secretA = process.env.APP_DB_SECRET_ACCESS_TOKEN || '';

        await dbConnect();
        const { id } = verify(accessToken, secretA) as JwtPayload;

        const data = await BotSettings.findOne({
            id,
        });

        await dbDisconnect();

        if (!data) {
            return NextResponse.json(
                { message: 'Settings not found' },
                {
                    status: 404,
                }
            );
        }

        const {
            targetProfitPercent,
            startOrderVolumeUSDT,
            insuranceOrderVolumeUSDT,
            insuranceOrderSteps,
            insuranceOrderVolumeMultiplier,
            insuranceOrderStepsMultiplier,
            insuranceOrderPriceDeviationPercent,
        } = data;

        return NextResponse.json(
            {
                targetProfitPercent,
                startOrderVolumeUSDT,
                insuranceOrderVolumeUSDT,
                insuranceOrderSteps,
                insuranceOrderVolumeMultiplier,
                insuranceOrderStepsMultiplier,
                insuranceOrderPriceDeviationPercent,
            },
            {
                status: 200,
            }
        );
    } catch (error: any) {
        return NextResponse.json(
            { message: error.message },
            {
                status: 400,
            }
        );
    }
}

export async function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
