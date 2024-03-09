import Link from 'next/link';

export default function BotSettings() {
    return (
        <div className="gap-2 w-full items-center flex">
            <Link
                href={'/dashboard/bots/65eb65ee11016c79fafb8231/settings'}
                className="w-30 border p-2 rounded-md hover:bg-gray-700/5 dark:hover:bg-white/5"
            >
                Bot 65eb65ee11016c79fafb8231
            </Link>
            <Link
                href={'/dashboard/bots/2/settings'}
                className="w-30 border p-2 rounded-md hover:bg-gray-700/5 dark:hover:bg-white/5"
            >
                Bot2
            </Link>
        </div>
    );
}
