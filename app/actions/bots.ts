'use server';
import { jwtVerify } from 'jose';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { Bots } from '../lib/mongodb/models/botModel';
import { Coin } from '../lib/mongodb/models/coinsModel';
import { Subscription } from '../lib/mongodb/models/subscriptionModel';
import { dbConnect } from '../lib/mongodb/mongodb';
import { decryptPayload } from '../lib/utils/forge';

async function getValidCoins() {
    try {
        const coins = await Coin.find({}, 'symbol -_id');
        return coins.map((coin) => coin.symbol);
    } catch (error) {
        console.error('Error fetching valid coins:', error);
        throw error;
    }
}

export async function createBot(
    prevState: string | undefined,
    formData: FormData
) {
    try {
        const { botName, ...rest } = Object.fromEntries(formData.entries());
        const coinsArr: string[] = Object.keys(rest).reduce<string[]>(
            (acc, key) => {
                if (rest[key] === key) {
                    acc.push(key);
                }
                return acc;
            },
            []
        );
        await dbConnect();
        const validCoins = await getValidCoins();
        const invalidCoins = coinsArr.filter(
            (coin) => !validCoins.includes(coin)
        );
        if (invalidCoins.length > 0) {
            console.error('Invalid coins:', invalidCoins);
            throw new Error('Invalid coins selected');
        }

        const cookiesList = cookies();
        const accessToken = cookiesList.get('accessToken')?.value as string;
        const checkAccessSecret = process.env.APP_DB_SECRET_ACCESS_TOKEN || '';
        const forgePrivate = process.env.FORGE_PRIVATE || '';

        const { payload }: { payload: any } = await jwtVerify(
            accessToken,
            new TextEncoder().encode(checkAccessSecret)
        );

        const decryptedPayload = decryptPayload(payload.payload, forgePrivate);

        const subscription = await Subscription.findOne({
            userId: decryptedPayload.id,
        });

        if (subscription) {
            const bot = new Bots({
                userId: decryptedPayload.id,
                botName: botName,
                expirationTime: subscription.expirationTime,
                coins: coinsArr,
            });

            await bot.save();
            await updateBotCreationStatus(false);
            revalidatePath('/dashboard/bots');
        } else {
            return null;
        }
    } catch (error: any) {
        console.log(error.message);

        return error.message;
    } finally {
        redirect('/dashboard/bots');
    }
}

async function updateBotCreationStatus(isFrozen: boolean, freezeTime = null) {
    try {
        const cookiesList = cookies();
        const accessToken = cookiesList.get('accessToken')?.value as string;
        const checkAccessSecret = process.env.APP_DB_SECRET_ACCESS_TOKEN || '';
        const forgePrivate = process.env.FORGE_PRIVATE || '';

        const { payload }: { payload: any } = await jwtVerify(
            accessToken,
            new TextEncoder().encode(checkAccessSecret)
        );

        const decryptedPayload = decryptPayload(payload.payload, forgePrivate);

        await dbConnect();
        const bot = await Bots.findOne({ userId: decryptedPayload.id });
        if (bot) {
            bot.isFrozen = isFrozen;
            if (freezeTime !== null) {
                bot.freezeTime = freezeTime;
            }

            await bot.save();
            revalidatePath('/dashboard/bots');
        }
    } catch (error: any) {
        return error.message;
    }
}
export async function updateBotStatus(
    botId: string,
    isFrozen: boolean,
    freezeTime = null
) {
    try {
        const cookiesList = cookies();
        const accessToken = cookiesList.get('accessToken')?.value as string;
        const checkAccessSecret = process.env.APP_DB_SECRET_ACCESS_TOKEN || '';
        const forgePrivate = process.env.FORGE_PRIVATE || '';

        const { payload }: { payload: any } = await jwtVerify(
            accessToken,
            new TextEncoder().encode(checkAccessSecret)
        );

        const decryptedPayload = decryptPayload(payload.payload, forgePrivate);

        await dbConnect();
        const bot = await Bots.findOne({
            _id: botId,
            userId: decryptedPayload.id,
        });
        if (bot) {
            bot.isFrozen = isFrozen;
            if (freezeTime !== null) {
                bot.freezeTime = freezeTime;
            }
            await bot.save();
            revalidatePath('/dashboard/bots');
        }
    } catch (error: any) {
        return error.message;
    }
}

export async function getBotFrozenStatus(botId: string) {
    try {
        await dbConnect();
        const bot = await Bots.findOne({ _id: botId });
        return bot.isFrozen;
    } catch (error: any) {
        return error.message;
    }
}

export async function updateBotDeletionAndFreezeTime(
    userId: string,
    expirationTime: Date
) {
    try {
        await dbConnect();
        const bot = await Bots.findOne({ userId });
        if (bot) {
            bot.expirationTime = expirationTime;
            bot.deletionTime = expirationTime;
            bot.isFrozen = false;
            bot.freezeTime = null;
            await bot.save();
            console.log(
                `Bot for user ${userId} deletion and freeze time updated.`
            );
        } else {
            console.error(`Bot not found for user ${userId}.`);
        }
    } catch (error: any) {
        return error.message;
    }
}

export async function getActiveBotsByUserId() {
    try {
        await dbConnect();
        const cookiesList = cookies();
        const accessToken = cookiesList.get('accessToken')?.value as string;
        const checkAccessSecret = process.env.APP_DB_SECRET_ACCESS_TOKEN || '';
        const forgePrivate = process.env.FORGE_PRIVATE || '';

        const { payload }: { payload: any } = await jwtVerify(
            accessToken,
            new TextEncoder().encode(checkAccessSecret)
        );

        const decryptedPayload = decryptPayload(payload.payload, forgePrivate);

        // console.log(await Bot.find());
        // console.log(decryptedPayload.id);

        const activeBots = await Bots.find({
            userId: decryptedPayload.id,
            // isFrozen: false,
            // expirationTime: { $gt: new Date() },
            // deletionTime: null,
        });

        return activeBots;
    } catch (error: any) {
        return error.message;
    }
}

export async function deleteBotByUserIdAndBotId(botId: string) {
    try {
        const cookiesList = cookies();
        const accessToken = cookiesList.get('accessToken')?.value as string;
        const checkAccessSecret = process.env.APP_DB_SECRET_ACCESS_TOKEN || '';
        const forgePrivate = process.env.FORGE_PRIVATE || '';

        const { payload }: { payload: any } = await jwtVerify(
            accessToken,
            new TextEncoder().encode(checkAccessSecret)
        );

        const decryptedPayload = decryptPayload(payload.payload, forgePrivate);

        const result = await Bots.deleteOne({
            userId: decryptedPayload.id,
            _id: botId,
        });
        revalidatePath('/dashboard/bots');
        return result;
    } catch (error: any) {
        return error.message;
    }
}
