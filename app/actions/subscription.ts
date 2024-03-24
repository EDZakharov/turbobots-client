'use server';
import { revalidatePath } from 'next/cache';
import { Bots } from '../lib/mongodb/models/botModel';
import { Subscription } from '../lib/mongodb/models/subscriptionModel';
import { decrypt } from '../lib/utils/decrypt';
import {
    setBotActivity,
    updateBotDeletionAndFreezeTime,
    updateBotStatus,
} from './bots';

export async function createSubscription(
    subscriptionOption: '30s' | '30' | '90' | '180' | 'infinite'
) {
    try {
        const decryptedPayload = await decrypt();
        const today = new Date();
        const currentDate = new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate(),
            today.getHours(),
            today.getMinutes(),
            today.getSeconds()
        );
        let expirationDate: Date;

        switch (subscriptionOption) {
            case '30s':
                expirationDate = new Date(currentDate.getTime() + 30000);

                break;
            case '30':
                expirationDate = new Date(currentDate);
                expirationDate.setDate(expirationDate.getDate() + 30);
                break;
            case '90':
                expirationDate = new Date(currentDate);
                expirationDate.setDate(expirationDate.getDate() + 90);
                break;
            case '180':
                expirationDate = new Date(currentDate);
                expirationDate.setDate(expirationDate.getDate() + 180);
                break;
            case 'infinite':
                expirationDate = new Date('9999-12-31');
                break;
            default:
                throw new Error('Invalid subscription option');
        }

        const duplicate = await Subscription.findOne({
            userId: decryptedPayload.id,
        });
        if (!duplicate) {
            const subscription = new Subscription({
                userId: decryptedPayload.id,
                expirationTime: expirationDate,
            });
            await subscription.save();
            const { userId, expirationTime } = subscription;

            revalidatePath('/dashboard/bots');
            return { userId: userId.toString(), expirationTime };
        } else {
            const updatedStrategy = await Subscription.findOneAndUpdate(
                {
                    userId: decryptedPayload.id,
                },
                {
                    expirationTime: expirationDate,
                }
            );
            await updateBotDeletionAndFreezeTime(
                decryptedPayload.id,
                expirationDate
            );
            const { userId, expirationTime } = updatedStrategy;
            revalidatePath('/dashboard/bots');
            return { userId: userId.toString(), expirationTime };
        }
    } catch (error) {
        revalidatePath('/dashboard/bots');
        console.error('Error creating subscription:', error);
    }
}

export async function renewSubscription(
    userId: string,
    newExpirationTime: Date
) {
    try {
        const subscription = await Subscription.findOne({ userId });
        if (subscription) {
            subscription.expirationTime = newExpirationTime;
            await subscription.save();

            await updateBotDeletionAndFreezeTime(userId, newExpirationTime);

            console.log('Subscription renewed successfully');
        } else {
            console.error('Subscription not found');
        }
    } catch (error) {
        console.error('Error renewing subscription:', error);
    }
}

export async function checkSubscriptionsHealth() {
    try {
        const subscriptions = await Subscription.find();
        const today = new Date();
        const currentDate = new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate(),
            today.getHours(),
            today.getMinutes(),
            today.getSeconds()
        );
        for (const subscription of subscriptions) {
            if (subscription.expirationTime < new Date(currentDate)) {
                console.log(
                    `Subscription for user ${subscription.userId} has expired.`
                );

                // Find all bots of the user
                const userBots = await Bots.find({
                    userId: subscription.userId,
                });

                // Filter bots whose freeze time has elapsed
                const botsToDelete = userBots.filter(
                    (bot: any) =>
                        bot.freezeTime &&
                        bot.freezeTime <= new Date(currentDate.getTime())
                );

                // Delete the found bots
                for (const botToDelete of botsToDelete) {
                    await Bots.deleteOne({ _id: botToDelete._id });
                    console.log(
                        `Bot ${botToDelete._id} for user ${subscription.userId} has been deleted.`
                    );
                }

                // Update statuses of remaining bots
                const promises = userBots
                    .filter((bot: any) => bot.isFrozen === false)
                    .map(async (bot: any) => {
                        await setBotActivity(bot._id, false);
                        await updateBotStatus(
                            bot._id,
                            true,
                            new Date(
                                currentDate.getTime() + 60000 * 60 * 24 * 30
                            )
                        );
                    });

                await Promise.all(promises);
                // revalidatePath('/dashboard/bots');
            }
        }
    } catch (error) {
        console.error('Error checking subscriptions:', error);
    }
}

export async function checkUserSubscriptionActive(
    userId: string
): Promise<boolean> {
    try {
        const subscription = await Subscription.findOne({ userId });
        if (subscription) {
            if (subscription.expirationTime >= new Date()) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    } catch (error) {
        return false;
    }
}

export async function getUserSubscription(): Promise<any | null> {
    try {
        const decryptedPayload = await decrypt();
        // await Subscription.collection.drop();
        const subscription = await Subscription.findOne({
            userId: decryptedPayload.id,
        });

        const { userId, expirationTime } = subscription;
        checkSubscriptionsHealth();
        revalidatePath('/dashboard/bots');
        return { userId: userId.toString(), expirationTime };
    } catch (error) {
        return null;
    }
}

export async function deleteUserSubscription(): Promise<any | null> {
    try {
        const decryptedPayload = await decrypt();

        const subscription = await Subscription.findOneAndDelete({
            userId: decryptedPayload.id,
        });
        revalidatePath('/dashboard/bots');
        return true;
    } catch (error) {
        return null;
    }
}
