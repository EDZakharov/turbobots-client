import { getAvailableCoins } from '@/app/actions/getAvailableCoins';
import { DoubleArrowsSvg } from '@/app/ui/components/svg-components/svg-components';
import Link from 'next/link';
import BotCreationForm from './BotCreationForm';

export default async function BotCreationWrapper() {
    const coins = await getAvailableCoins();
    return (
        <div className="flex flex-col py-5 gap-2 ">
            <Link
                href={'/dashboard/bots'}
                className="w-min mx-2 flex gap-1 items-center border dark:border-gray-700 border-gray-300 p-2 rounded-md dark:hover:bg-white/5 hover:bg-secondary-color/5 "
            >
                <DoubleArrowsSvg
                    className="fill-gray-500 dark:fill-gray-300"
                    size="17px"
                />
                <span>Bots</span>
            </Link>
            <div className="grid grid-cols-3 gap-2 mx-2">
                <div className="col-span-3  shadow-main dark:bg-secondary-color rounded-lg">
                    <BotCreationForm coins={coins} />
                </div>
            </div>
        </div>
    );
}
