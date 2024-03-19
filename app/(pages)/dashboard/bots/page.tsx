import Bots from '@/app/ui/components/dashboard/main/bots/Bots';
import { Suspense } from 'react';

export default function Page() {
    return (
        <div className="mx-2 my-5">
            <div className="grid grid-cols-4-custom gap-2 ">
                <div className="col-span-1   dark:bg-secondary-color shadow-main">
                    <Suspense fallback={<>loading...</>}>
                        <Bots />
                    </Suspense>
                </div>
                <div className="col-span-3  dark:bg-secondary-color shadow-main">
                    2
                </div>
            </div>
        </div>
    );
}
