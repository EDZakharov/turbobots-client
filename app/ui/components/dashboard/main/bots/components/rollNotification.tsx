import Link from 'next/link';

const defaultPositiveStyle =
    'flex flex-col w-full text-nowrap rounded-b-md bg-custom-green items-center text-white animate-fade';
const defaultNegativeStyle =
    'flex flex-col w-full text-nowrap rounded-b-md bg-red-400 items-center  text-white animate-fade';
const defaultExpiredStyle =
    'flex flex-col w-full text-nowrap rounded-b-md bg-yellow-400 items-center text-white animate-fade';

export default function RollDownNotification({
    status,
    expired,
    className,
    firstOptionText,
    secondOptionText,
    innerPositiveClassName = defaultPositiveStyle,
    innerNegativeClassName = defaultNegativeStyle,
    innerExpiredClassName = defaultExpiredStyle,
}: {
    status?: boolean;
    expired?: boolean;
    className?: string;
    firstOptionText?: string;
    secondOptionText?: string;
    innerPositiveClassName?: string;
    innerNegativeClassName?: string;
    innerExpiredClassName?: string;
}) {
    switch (status) {
        case true: {
            return (
                <div className={className}>
                    <div className={innerPositiveClassName}>
                        {firstOptionText}
                    </div>
                </div>
            );
        }

        case false: {
            if (expired) {
                return (
                    <div className={className}>
                        <div className={innerExpiredClassName}>
                            <div>
                                <span className=" text-gray-700 ">
                                    Subscription expired.{' '}
                                </span>
                                <Link
                                    href={'/dashboard/account/subscription'}
                                    className="underline underline-offset-2 text-blue-500 hover:text-blue-700 transition-all"
                                >
                                    Renew your subscription
                                </Link>
                            </div>
                        </div>
                    </div>
                );
            }

            return (
                <div className={className}>
                    <div className={innerNegativeClassName}>
                        {secondOptionText}
                    </div>
                </div>
            );
        }
        default: {
            return <></>;
        }
    }
}
