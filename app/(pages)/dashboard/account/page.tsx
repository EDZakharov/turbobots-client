import Link from 'next/link';

export default function Page() {
    // const isSuccess = useAuth()
    return (
        <div className="">
            <div>Account</div>
            <div>
                <Link
                    href={'/dashboard/account/subscription'}
                    replace
                    prefetch={true}
                >
                    Subscriptions
                </Link>
            </div>
        </div>
    );
}
