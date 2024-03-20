import { PlusSvg } from '@/app/ui/components/svg-components/svg-components';
import Link from 'next/link';

export default function AddBot() {
    return (
        <Link
            href={'/dashboard/bots/create'}
            className="w-min border dark:border-gray-700 border-gray-300 p-2 rounded-md dark:hover:bg-white/5 hover:bg-secondary-color/5 flex flex-col items-center disabled:cursor-not-allowed whitespace-nowrap"
        >
            <div className="flex gap-1 items-center">
                <PlusSvg
                    size="17px"
                    className="fill-gray-500 dark:fill-gray-300"
                />
                <span>create</span>
            </div>
        </Link>
    );
}
