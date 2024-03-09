import { IBotConfig } from '@/app/lib/@types/types';
import instance from '@/app/lib/axios/instance';
import { BotSettings } from '@/app/lib/mongodb/models/settingsModel';
import { dbConnect } from '@/app/lib/mongodb/mongodb';

import { JwtPayload, verify } from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';

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
            return NextResponse.json(
                { message: `Something went wrong!` },
                { status: 400 }
            );
        }

        const secretA = process.env.APP_DB_SECRET_ACCESS_TOKEN || '';

        await dbConnect();
        const { id } = verify(accessToken, secretA) as JwtPayload;

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
            // console.log('revalidating...');
            return NextResponse.json(
                { message: `Settings was created` },
                { status: 200 }
            );
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

        return NextResponse.json(
            { message: 'Settings was updated' },
            {
                status: 200,
            }
        );
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 400 });
    }
}
export async function GET(request: NextRequest) {
    try {
        const { pathname } = new URL(request.url);
        let accessToken;
        let refreshToken;

        const tokens = request.headers.get('Set-Cookie')?.split('; ');
        if (tokens && tokens?.length >= 1) {
            accessToken = tokens[0];
            refreshToken = tokens[1];
            // console.log(accessToken);

            const { data } = await instance.post(
                'http://localhost:7000/api/get-bot-settings',
                { botId: pathname.split('/')[3] },
                {
                    withCredentials: true,
                    headers: {
                        'Set-Cookie': `${accessToken}; ${refreshToken}`,
                    },
                }
            );

            return NextResponse.json(
                { ...data },
                {
                    status: 200,
                }
            );
        }
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
