import { getActiveBotsByUserId } from '@/app/actions/bots';
import { getAvailableCoins } from '@/app/actions/getAvailableCoins';
import Link from 'next/link';
import BotCreationForm from './components/BotCreationForm';

export default async function Bots() {
    const coins = await getAvailableCoins();
    const activeBots = await getActiveBotsByUserId();
    console.log(activeBots);
    return (
        <div className="gap-2 w-full items-center flex">
            <div className="flex flex-col">
                <span>Active bots:</span>
                {activeBots &&
                    activeBots.map((bot: any) => (
                        <div key={bot._id}>{bot.botName}</div>
                    ))}
                <div>
                    <BotCreationForm coins={coins} />
                </div>

                <Link
                    href={'/dashboard/bots/65eb65ee11016c79fafb8231/settings'}
                    className="w-30 border p-2 rounded-md hover:bg-gray-700/5 dark:hover:bg-white/5"
                >
                    Bot 65eb65ee11016c79fafb8231
                </Link>
                <Link
                    href={'/dashboard/bots/2/settings'}
                    className="w-30 border p-2 rounded-md hover:bg-gray-700/5 dark:hover:bg-white/5"
                >
                    Bot2
                </Link>
            </div>
        </div>
    );
}
