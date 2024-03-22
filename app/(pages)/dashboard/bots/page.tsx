import Bots from '@/app/ui/components/dashboard/main/bots/Bots';
import { Suspense } from 'react';

export default function Page() {
    const isLoading = true;
    return (
        <div className="mx-2 my-5">
            <div className="grid grid-cols-4-custom gap-2 ">
                <div className="col-span-1   dark:bg-secondary-color shadow-main">
                    <Suspense fallback={<>loading...</>}>
                        <Bots />
                    </Suspense>
                    {isLoading ? (
                        <div className="flex flex-col w-full text-nowrap px-5 py-1 rounded-md bg-red-400/50 items-center">
                            <div>
                                <span> Bot not working. </span>
                                <span className="">
                                    <span> Purchase </span>
                                    <button className="underline hover:text-gray-400">
                                        subscription
                                    </button>
                                </span>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col w-full text-nowrap px-5 py-1 rounded-md bg-green-400/50 items-center">
                            <div>
                                <span> Bot successfully started </span>
                                {/* <span className="">
                                    <span> Purchase </span>
                                    <button className="underline hover:text-gray-400">
                                        subscription
                                    </button>
                                </span> */}
                            </div>
                        </div>
                    )}
                </div>
                <div className="col-span-3  dark:bg-secondary-color shadow-main">
                    2
                </div>
            </div>
        </div>
    );
}
