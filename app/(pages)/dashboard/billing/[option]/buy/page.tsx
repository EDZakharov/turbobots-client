import Link from 'next/link';

export default async function Page({ params }: { params: { option: string } }) {
    return (
        <div className="">
            <span>{params.option}</span>
            <div></div>
            <Link
                href={'/dashboard/billing'}
                className="border dark:border-gray-700 border-gray-400 rounded-lg p-2 dark:hover:bg-white/5 hover:bg-secondary-color/5"
            >
                Select other subscription
            </Link>
        </div>
    );
}
