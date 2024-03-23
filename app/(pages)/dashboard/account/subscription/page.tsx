'use client';
import {
    createSubscription,
    getUserSubscription,
} from '@/app/actions/subscription';
import { useState } from 'react';
type subsDates = '30' | '90' | '180' | 'infinite';
export default function Page() {
    const [subscriptionOption, setSubscriptionOption] =
        useState<subsDates>('infinite');
    const [subscriptionMessage, setSubscriptionMessage] = useState('');
    const [isSubscriptionActive, setIsSubscriptionActive] = useState<
        | {
              userId: string;
              expirationTime: Date;
          }
        | undefined
    >(undefined);

    const handleSubscribe = async () => {
        try {
            await createSubscription(subscriptionOption);
            setSubscriptionMessage('Subscription created successfully');
        } catch (error) {
            console.error('Error creating subscription:', error);
            setSubscriptionMessage('Error creating subscription');
        }
    };

    const handleCheckSubscription = async () => {
        try {
            const subscription = await getUserSubscription();
            if (subscription && subscription.expirationTime >= new Date()) {
                setIsSubscriptionActive({ ...subscription });
            } else {
                setIsSubscriptionActive(undefined);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const options = ['30', '90', '180', 'infinite'];

    return (
        <div>
            <div>
                <label>Subscription Option:</label>
                <select
                    value={subscriptionOption}
                    onChange={(e) =>
                        setSubscriptionOption(e.target.value as subsDates)
                    }
                    className="z-10 w-full rounded-lg border dark:border-gray-700 border-gray-300 bg-transparent placeholder:text-end p-2 dark:hover:bg-white/5 text-[12px] hover:bg-secondary-color/5 focus:outline-none"
                >
                    {options.map((el) => (
                        <option
                            key={el}
                            value={el}
                            className="dark:bg-gray-800/80 dark:text-gray-200"
                        >
                            {el}
                        </option>
                    ))}
                </select>
            </div>
            <div className="flex gap-5">
                <button
                    onClick={handleSubscribe}
                    className="border rounded-md p-2 dark:hover:bg-white/5"
                >
                    Subscribe
                </button>
                <button
                    onClick={handleCheckSubscription}
                    className="border rounded-md p-2 dark:hover:bg-white/5"
                >
                    Check active
                </button>
                {isSubscriptionActive && isSubscriptionActive.userId}
                {isSubscriptionActive && (
                    <span>
                        {isSubscriptionActive.expirationTime.toString()}
                    </span>
                )}
            </div>
        </div>
    );
}
