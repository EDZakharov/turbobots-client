export const SettingsSkeleton = () => {
    return (
        <div className="flex flex-col">
            <span className="text-xl m-5 text-white/0">Bot strategy</span>
            <div className="flex gap-5 mr-5">
                <div className="flex-initial">
                    <StrategyOptionsSkeleton />
                </div>
            </div>
        </div>
    );
};

function ButtonSkeleton() {
    return (
        <div className="w-[200px] my-10 border border-gray-300/0 p-2 rounded-md dark:bg-white/10 bg-gray-800/10 animate-pulse text-white/0 text-center">
            Loading...
        </div>
    );
}

function InputSkeleton() {
    return (
        <>
            <span className="block text-gray-400/0 text-sm overflow-hidden">
                Loading...
            </span>
            <div className="relative w-auto h-auto">
                <input
                    type="text"
                    disabled
                    className="z-10 w-full rounded-lg border bg-gray-800/10 placeholder:text-end p-2 border-gray-300/0 dark:bg-white/10 animate-pulse text-white/0"
                />
                <input
                    type="range"
                    disabled
                    className="w-full bg-gray-800/10 cursor-pointer appearance-none disabled:opacity-50 disabled:pointer-events-none border-gray-300/0 dark:bg-white/10 animate-pulse text-white/0 rounded-xl"
                />
                <span className="z-0 absolute overflow-hidden right-2 top-3  text-gray-800/0 text-sm">
                    Loading...
                </span>
            </div>
        </>
    );
}

function StrategyOptionsSkeleton() {
    const inputsWrapperCln = 'w-full';
    return (
        <div className=" dark:bg-secondary-color rounded-lg shadow-main m-1 flex flex-col items-center">
            <div className="flex flex-col gap-5 p-5">
                <div className=" flex flex-col gap-5">
                    <span className="text-md w-[170px] bg-gray-800/10 dark:bg-white/10 animate-pulse text-white/0">
                        Strategy:
                    </span>
                    <div className="flex gap-5">
                        <div className={inputsWrapperCln}>
                            <InputSkeleton />
                        </div>
                        <div className={inputsWrapperCln}>
                            <InputSkeleton />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-5 ">
                    <span className="text-md w-[170px] bg-gray-800/10 dark:bg-white/10 animate-pulse text-white/0">
                        Insurance orders:
                    </span>
                    <div className="grid grid-cols-2-custom relative gap-5">
                        <div className={inputsWrapperCln}>
                            <InputSkeleton />
                        </div>
                        <div className={inputsWrapperCln}>
                            <InputSkeleton />
                        </div>
                        <div className={inputsWrapperCln}>
                            <InputSkeleton />
                        </div>
                        <div className={inputsWrapperCln}>
                            <InputSkeleton />
                        </div>
                        <div className={inputsWrapperCln}>
                            <InputSkeleton />
                        </div>
                    </div>
                </div>
            </div>

            <ButtonSkeleton />
        </div>
    );
}
