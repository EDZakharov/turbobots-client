import { getBotActivity } from '@/app/actions/bots';
import { Coin } from '@/app/ui/components/basic/coin';
import { EditSvg } from '@/app/ui/components/svg-components/svg-components';
import Link from 'next/link';
import { IBot } from '../Bots';
import { PlayStopBotBtn } from './PlayStopBtn';
import { DeleteBotBtn } from './deleteBots';
import RollDownNotification from './rollNotification';

export default async function ActiveBot({
    _id,
    botName,
    coins,
    isFrozen,
    expired,
}: IBot) {
    const status = await getBotActivity(_id);

    return (
        <div className="flex flex-col items-center gap-2 ">
            <div className="flex items-center w-full  ">
                <div className="basis-36 ">
                    <span className="text-md relative">
                        {botName}
                        <span className="text-[8px] text-gray-400 dark:text-gray-500 absolute top-4 left-0">
                            BotID:{_id.toString()}
                        </span>
                    </span>
                </div>
                <div className="flex-1 items-center">
                    <div className="flex gap-1 flex-wrap text-[8px] items-center">
                        {coins.map((coin: any) => (
                            <div key={coin} className="flex ">
                                <Coin coinName={coin} size="15px" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex gap-2 items-center ">
                    <PlayStopBotBtn
                        botId={_id.toString()}
                        active={status}
                        expired={expired}
                    />
                    <Link
                        href={`/dashboard/bots/${_id.toString()}/settings`}
                        className="w-min"
                        replace
                        prefetch={true}
                    >
                        <EditSvg
                            className="fill-gray-500 dark:fill-gray-300 hover:fill-gray-700 dark:hover:fill-white transition-all"
                            size="17px"
                        />
                    </Link>
                    <DeleteBotBtn
                        className="fill-gray-500 dark:fill-gray-300 hover:fill-gray-700 dark:hover:fill-white transition-all cursor-pointer"
                        size="17px"
                        botId={_id.toString()}
                    />
                </div>
            </div>
            <div className="w-full z-0 relative overflow-hidden">
                <RollDownNotification
                    status={status}
                    expired={expired}
                    className={' flex items-start w-full '}
                    firstOptionText="_"
                    secondOptionText="_"
                    innerPositiveClassName="select-none w-full bg-custom-green rounded-lg text-transparent h-[2px] "
                    innerNegativeClassName="select-none w-full bg-red-400 rounded-lg text-transparent h-[2px] "
                    innerExpiredClassName="select-none w-full bg-yellow-400 rounded-lg text-transparent h-[1px] animate-pulse"
                />
            </div>
        </div>
    );
}
