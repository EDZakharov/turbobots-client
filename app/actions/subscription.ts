'use server';
import { Bots } from '../lib/mongodb/models/botModel';
import { Subscription } from '../lib/mongodb/models/subscriptionModel';
import { decrypt } from '../lib/utils/decrypt';
import { updateBotDeletionAndFreezeTime, updateBotStatus } from './bots';

export async function createSubscription(
    subscriptionOption: '30' | '90' | '180' | 'infinite'
) {
    try {
        const decryptedPayload = await decrypt();
        let expirationDate: Date;

        switch (subscriptionOption) {
            case '30':
                expirationDate = new Date();
                expirationDate.setDate(expirationDate.getDate() + 30);
                break;
            case '90':
                expirationDate = new Date();
                expirationDate.setDate(expirationDate.getDate() + 90);
                break;
            case '180':
                expirationDate = new Date();
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
            return { userId: userId.toString(), expirationTime };
        } else {
            const oldSubscription = await Subscription.findOneAndUpdate(
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
            const { userId, expirationTime } = oldSubscription;
            return { userId: userId.toString(), expirationTime };
        }
    } catch (error) {
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
        for (const subscription of subscriptions) {
            if (subscription.expirationTime < new Date()) {
                console.log(
                    `Subscription for user ${subscription.userId} has expired.`
                );

                await updateBotStatus(
                    subscription.userId,
                    true,
                    new Date() as any
                );

                const bot = await Bots.findOne({ userId: subscription.userId });
                if (
                    bot &&
                    bot.deletionTime <= new Date() &&
                    bot.freezeTime <=
                        new Date((new Date() as any) - 30 * 24 * 60 * 60 * 1000)
                ) {
                    await Bots.deleteOne({ userId: subscription.userId });
                    console.log(
                        `Bot for user ${subscription.userId} has been deleted.`
                    );
                }
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
        const subscription = await Subscription.findOne({
            userId: decryptedPayload.id,
        });

        const { userId, expirationTime } = subscription;
        return { userId: userId.toString(), expirationTime };
    } catch (error) {
        console.error('Error fetching user subscription:', error);
        return null;
    }
}
