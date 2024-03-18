import Settings from '@/app/ui/components/dashboard/main/bots/components/Settings';
import Table from '@/app/ui/components/dashboard/main/bots/components/table';
import { StrategyOptionsSkeleton } from '@/app/ui/skeletons/skeletons';
import { Suspense } from 'react';

export default async function Page({ params }: { params: { id: string } }) {
    return (
        <div className="grid grid-cols-3 grid-rows-2-custom ">
            <span className="text-xl m-5 block col-span-3 row-span-1">
                Bot {params.id} strategy
            </span>
            <div className="mx-3 col-span-1 row-span-1">
                <Suspense fallback={<StrategyOptionsSkeleton />}>
                    <Settings params={params} />
                </Suspense>
            </div>
            <div className="h-full mr-3 col-span-2 row-span-1 overflow-y-scroll scrollbar-thin dark:scrollbar-thumb-gray-700 scrollbar-thumb-gray-300 scrollbar-track-transparent shadow-main dark:bg-secondary-color rounded-lg">
                <Suspense fallback={<div>Loading...</div>}>
                    <Table params={params} />
                </Suspense>
            </div>
        </div>
    );
}
