import { getActiveBotsByUserId } from '@/app/actions/bots';
import ActiveBot from './components/activeBot';
import AddBot from './components/addbot';

export interface IBot {
    _id: any;
    botName: string;
    coins: string[];
    isFrozen: boolean;
    expired?: boolean;
}

export default async function Bots() {
    let activeBots = await getActiveBotsByUserId();
    activeBots[activeBots.length - 3].expired = true;

    return (
        <div className="p-5 pb-8">
            <div className="flex flex-col gap-5 ">
                <div className="flex items-center justify-between">
                    <span className="uppercase">my active bots</span>
                    <AddBot />
                </div>

                {activeBots &&
                    activeBots.map((bot: IBot) => {
                        return (
                            <ActiveBot
                                key={bot._id}
                                _id={bot._id}
                                botName={bot.botName}
                                coins={bot.coins}
                                isFrozen={bot.isFrozen}
                                expired={bot.expired}
                            />
                        );
                    })}
            </div>
        </div>
    );
}
