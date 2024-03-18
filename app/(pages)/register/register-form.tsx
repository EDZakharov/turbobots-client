'use client';

import { register } from '@/app/actions/registration';
import { lusitana } from '@/app/ui/fonts/fonts';
import Link from 'next/link';
import { useFormState, useFormStatus } from 'react-dom';

export default function RegisterForm() {
    // const { data: session } = useSession()
    const [errorMessage, dispatch] = useFormState(register, undefined);

    return (
        <form action={dispatch} className="space-y-1 ">
            <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4">
                <h1 className={`${lusitana.className} mb-3 text-2xl`}>
                    Please log in to continue. <br />
                </h1>
                <div className="w-full">
                    <div>
                        <label
                            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                            htmlFor="username">
                            Username
                        </label>
                        <div className="relative">
                            <input
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-5 text-sm outline-2 placeholder:text-gray-500"
                                id="username"
                                type="username"
                                name="username"
                                placeholder="Enter your username"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label
                            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                            htmlFor="email">
                            Email
                        </label>
                        <div className="relative">
                            <input
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-5 text-sm outline-2 placeholder:text-gray-500"
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Enter your email address"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label
                            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                            htmlFor="name">
                            Name
                        </label>
                        <div className="relative">
                            <input
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-5 text-sm outline-2 placeholder:text-gray-500"
                                id="name"
                                type="name"
                                name="name"
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label
                            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                            htmlFor="password">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-5 text-sm outline-2 placeholder:text-gray-500"
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Enter password"
                                required
                                minLength={3}
                            />
                        </div>
                    </div>
                </div>
                <LoginButton />
                <div
                    className="flex h-8 items-end space-x-1"
                    aria-live="polite"
                    aria-atomic="true">
                    {errorMessage && (
                        <>
                            <p className="text-sm text-red-500">
                                {errorMessage}
                            </p>
                        </>
                    )}
                </div>

                <span className="text-sm text-gray-600">
                    Do you have an account?{' '}
                    <Link
                        href={'/login'}
                        className="hover:text-gray-500 hover:border-b border-gray-600">
                        SignIn
                    </Link>
                </span>
            </div>
        </form>
    );
}

function LoginButton() {
    const { pending } = useFormStatus();

    return (
        <button
            className="mt-4 w-full dark:bg-gray-400"
            aria-disabled={pending}>
            Sign in
        </button>
    );
}
