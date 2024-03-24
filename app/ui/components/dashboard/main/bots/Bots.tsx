import { getActiveBotsByUserId } from '@/app/actions/bots';
import { getUserSubscription } from '@/app/actions/subscription';
import { Suspense } from 'react';
import ActiveBot from './components/activeBot';
import AddBot from './components/addbot';
import RollDownNotification from './components/rollNotification';

export interface IBot {
    _id: any;
    botName: string;
    coins: string[];
    isFrozen: boolean;
    expired?: boolean;
}

export default async function Bots() {
    const [activeBots, subscription] = await Promise.all([
        getActiveBotsByUserId(),
        getUserSubscription(),
    ]);
    // let activeBots = await getActiveBotsByUserId();
    // const subscription = await getUserSubscription();

    return (
        <div className="p-5 pb-8">
            <div className="flex flex-col gap-5 ">
                <div className="flex items-center justify-between">
                    <span className="uppercase">my active bots</span>
                    <AddBot />
                </div>
                {(subscription?.expirationTime &&
                    Date.now() > subscription.expirationTime) ||
                !subscription?.expirationTime ? (
                    <RollDownNotification
                        status={false}
                        expired={
                            subscription?.expirationTime
                                ? Date.now() > subscription.expirationTime
                                : true
                        }
                        className={'w-full '}
                        innerExpiredClassName={
                            'animate-pulse hover:animate-none flex flex-col m-auto bg-yellow-400 items-center rounded-b-lg'
                        }
                    />
                ) : (
                    ''
                )}

                {activeBots &&
                    activeBots.map((bot: IBot) => {
                        return (
                            <Suspense
                                key={bot._id}
                                fallback={<div>Loading ... </div>}
                            >
                                <ActiveBot
                                    _id={bot._id}
                                    botName={bot.botName}
                                    coins={bot.coins}
                                    isFrozen={bot.isFrozen}
                                    expired={
                                        subscription?.expirationTime
                                            ? Date.now() >
                                              subscription.expirationTime
                                            : true
                                    }
                                />
                            </Suspense>
                        );
                    })}
            </div>
        </div>
    );
}
