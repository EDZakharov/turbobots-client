'use server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { Bots } from '../lib/mongodb/models/botModel';
import { Coin } from '../lib/mongodb/models/coinsModel';
import { Subscription } from '../lib/mongodb/models/subscriptionModel';
import { dbConnect } from '../lib/mongodb/mongodb';
import { decrypt } from '../lib/utils/decrypt';

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

        const decryptedPayload = await decrypt();
        // await createSubscription(
        //     decryptedPayload.id,
        //     new Date('2024-03-31T12:00:00')
        // );
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
        const decryptedPayload = await decrypt();

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
        const decryptedPayload = await decrypt();

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
        const decryptedPayload = await decrypt();

        const activeBots = await Bots.find({
            userId: decryptedPayload.id,
            // isFrozen: false,
            // expirationTime: { $gt: new Date() },
            // deletionTime: null,
        });

        return activeBots;
    } catch (error: any) {
        return [];
    }
}

export async function deleteBotByUserIdAndBotId(botId: string) {
    try {
        await dbConnect();
        const decryptedPayload = await decrypt();

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
