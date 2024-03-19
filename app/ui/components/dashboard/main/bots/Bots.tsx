import { getActiveBotsByUserId } from '@/app/actions/bots';
import { getAvailableCoins } from '@/app/actions/getAvailableCoins';
import Link from 'next/link';
import { Coin } from '../../../basic/coin';
import { EditSvg } from '../../../svg-components/svg-components';
import BotCreationForm from './components/BotCreationForm';
import { PlayStopBotBtn } from './components/PlayStopBtn';
import { DeleteBotBtn } from './components/deleteBots';

export default async function Bots() {
    const coins = await getAvailableCoins();
    const activeBots = await getActiveBotsByUserId();

    // console.log(activeBots);
    return (
        <div className="p-5 pb-8">
            <div className="flex flex-col gap-5 ">
                <span>Active bots:</span>

                {activeBots &&
                    activeBots.map(async (bot: any) => {
                        return (
                            <div key={bot._id} className="flex items-center">
                                <div className="basis-36">
                                    <span className="text-md relative">
                                        {bot.botName}
                                        <span className="text-[7px] text-gray-400 dark:text-gray-500 absolute top-5 left-0">
                                            BotID:{bot._id.toString()}
                                        </span>
                                    </span>
                                </div>
                                <div className="flex-1 items-center">
                                    <div className="flex gap-1 flex-wrap text-[8px] items-center">
                                        {bot.coins.map((coin: any) => (
                                            <div key={coin} className="flex ">
                                                <Coin
                                                    coinName={coin}
                                                    size="15px"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <PlayStopBotBtn
                                        botId={bot._id.toString()}
                                    />
                                    <Link
                                        href={`/dashboard/bots/${bot._id.toString()}/settings`}
                                        className="w-min"
                                    >
                                        <EditSvg
                                            className="fill-gray-500 dark:fill-gray-300 hover:fill-gray-700 dark:hover:fill-white transition-all"
                                            size="17px"
                                        />
                                    </Link>
                                    <DeleteBotBtn
                                        className="fill-gray-500 dark:fill-gray-300 hover:fill-gray-700 dark:hover:fill-white transition-all cursor-pointer"
                                        size="17px"
                                        botId={bot._id.toString()}
                                    />
                                </div>
                            </div>
                        );
                    })}

                <BotCreationForm coins={coins} />
            </div>
        </div>
    );
}
