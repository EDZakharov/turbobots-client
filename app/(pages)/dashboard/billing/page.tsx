import {
    CheckSvg,
    FireSvg,
    NotCheckSvg,
    WavesSvg,
} from '@/app/ui/components/svg-components/svg-components';
import Link from 'next/link';
import { ReactNode } from 'react';

export default function Page() {
    const cards = [
        {
            id: 1,
            option: 'Basic',
            offers: [
                { id: 1, text: '1 active DCA multibot', status: true },
                { id: 2, text: '13 available trade pairs', status: true },
                { id: 3, text: 'Reinvesting trade profit', status: false },
                { id: 4, text: 'Top settings', status: false },
            ],
            price: '15 USDT',
            popular: false,
        },
        {
            id: 2,
            option: 'Middle',
            offers: [
                { id: 1, text: '2 active DCA multibot', status: true },
                { id: 2, text: '30 available trade pairs', status: true },
                { id: 3, text: 'Reinvesting trade profit', status: false },
                { id: 4, text: 'Top settings', status: false },
            ],
            price: '29 USDT',
            popular: false,
        },
        {
            id: 3,
            option: 'Pro',
            offers: [
                { id: 1, text: '3 active DCA multibot', status: true },
                { id: 2, text: '60 available trade pairs', status: true },
                { id: 3, text: 'Reinvesting trade profit', status: true },
                { id: 4, text: 'Top settings', status: false },
            ],
            price: '49 USDT',
            popular: false,
        },
        {
            id: 4,
            option: 'God',
            offers: [
                { id: 1, text: '5 active DCA multibot', status: true },
                { id: 2, text: 'All available trade pairs', status: true },
                { id: 3, text: 'Reinvesting trade profit', status: true },
                { id: 4, text: 'Top settings', status: true },
            ],
            price: '90 USDT',
            popular: true,
        },
        // {
        //     id: 5,
        //     option: 'Sexy',
        //     offers: [
        //         { id: 1, text: '5 active DCA multibot', status: true },
        //         { id: 2, text: 'All available trade pairs', status: true },
        //         { id: 3, text: 'Reinvesting trade profit', status: true },
        //         { id: 4, text: 'Top settings', status: true },
        //     ],
        //     price: '90 USDT',
        //     popular: true,
        // },
    ];

    return (
        <div className="mx-20 grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 place-items-center gap-5 h-[calc(100vh-50px)]">
            {cards.map((card) => (
                <BillingCard
                    key={card.id}
                    option={card.option as billingOptions}
                    description={card.offers.map((offer) => (
                        <div className="flex justify-between" key={offer.id}>
                            <span>{offer.text}</span>
                            <span>
                                {offer.status ? (
                                    <CheckSvg color="#53C45B" size="19px" />
                                ) : (
                                    <NotCheckSvg color="#DB4C4C" size="17px" />
                                )}
                            </span>
                        </div>
                    ))}
                    price={card.price}
                    popular={card.popular}
                />
            ))}
        </div>
    );
}

type billingOptions = 'basic' | 'middle' | 'pro' | 'god';

function BillingCard({
    option,
    description,
    price,
    popular,
}: {
    option: billingOptions;
    description?: ReactNode;
    price?: string;
    popular?: boolean;
}) {
    const splitedOption = option?.split('_').join(' ');

    return (
        <div className="lg:hover:scale-105 transition-all w-full h-[800px] shadow-main rounded-lg dark:bg-secondary-color cursor-pointer grid grid-rows-4 overflow-hidden relative ">
            <div className="flex flex-col items-center p-14 relative">
                <div className="flex">
                    <span className="text-2xl uppercase">{splitedOption}</span>
                </div>
                {popular && (
                    <div className="absolute top-[50px] right-[40px] animate-wiggle animate-infinite animate-duration-[2000ms] animate-ease-in-out animate-alternate-reverse animate-fill-both">
                        <span className="animate-pulse animate-duration-[2000ms] animate-ease-in-out animate-alternate-reverse animate-fill-both">
                            <FireSvg color="#FF7B16" size="30px" />
                        </span>
                    </div>
                )}
            </div>
            <hr className="absolute top-[140px] w-full dark:border-gray-700 border-gray-300 border-[3px]" />
            <div className="flex flex-col w-3/4 place-self-center gap-3">
                {description}
            </div>
            <div className="flex flex-col  place-self-center gap-5 w-3/4">
                <span className="text-xl">Pricing:</span>
                <div className="flex gap-1">
                    <span className="text-custom-green">{price}</span>
                    <span>/ month</span>
                </div>
            </div>
            <Link
                href={`/dashboard/billing/${option.toLowerCase()}/buy`}
                className="flex border dark:border-gray-400 border-gray-400 p-2 w-3/4 rounded-md dark:hover:bg-white/5 hover:bg-gray-700/5 h-min text-nowrap  place-self-center"
            >
                <span className="text-center w-full py-1 text-lg uppercase">
                    Select subscription
                </span>
            </Link>
            <WavesSvg size="10px" color="#53C45B" />
        </div>
    );
}
