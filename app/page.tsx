'use client';

import Link from 'next/link';

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-between p-24">
            <Link
                href="/dashboard"
                className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
            >
                dashboard
            </Link>
            <Link
                href="/login"
                className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
            >
                login
            </Link>
            <Link
                href="/register"
                className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
            >
                register
            </Link>
        </div>
    );
}
