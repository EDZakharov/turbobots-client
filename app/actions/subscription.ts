import { Bots } from '../lib/mongodb/models/botModel';
import { Subscription } from '../lib/mongodb/models/subscriptionModel';
import { updateBotDeletionAndFreezeTime, updateBotStatus } from './bots';

export async function createSubscription(userId: string, expirationTime: Date) {
    try {
        const subscription = new Subscription({
            userId,
            expirationTime,
        });
        await subscription.save();

        await updateBotDeletionAndFreezeTime(userId, expirationTime);

        console.log('Subscription created successfully');
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

export async function checkSubscriptions() {
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
