import Exchanges from '@/app/ui/components/dashboard/main/exchanges';
import { Suspense } from 'react';

export default function Page() {
    // const isSuccess = useAuth()
    return (
        <div className="flex flex-col gap-2">
            <h2 className="text-[16px]">Dashboard</h2>
            <div className="flex flex-col gap-9 text-sm ">
                <div className="flex w-full h-[300px]  shadow-main p-5 dark:bg-cards-color">
                    <div className="flex-initial bg-gray-400">
                        Exchange balance
                    </div>
                    <div className="flex-initial bg-gray-500 rounded-r-md">
                        Profit last 7 days
                    </div>
                </div>

                <div className=" flex flex-col shadow-main dark:bg-secondary-color p-5">
                    <div className="grid grid-cols-4 place-items-center">
                        <div>Exchange</div>
                        <div>Day volume</div>
                        <div>Available pairs</div>
                        <div>Connection</div>
                    </div>
                    <hr />
                    <Suspense fallback={<div>Loading...</div>}>
                        <Exchanges />
                    </Suspense>
                </div>
            </div>
        </div>
    );
}

{
    /* <Exchange
name="bybit"
className="w-[40px] h-[15px] hover:scale-110 transition-all"
/>
<Exchange
name="bybit"
className="w-[40px] h-[15px] hover:scale-110 transition-all"
/>
<Exchange
name="bybit"
className="w-[40px] h-[15px] hover:scale-110 transition-all"
/>
<Exchange
name="bybit"
className="w-[40px] h-[15px] hover:scale-110 transition-all"
/> */
}
