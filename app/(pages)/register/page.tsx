import { Metadata } from 'next/types';
import RegisterForm from './register-form';

export const metadata: Metadata = {
    title: 'Register',
};

export default async function RegisterPage() {
    return (
        <main className="flex items-center justify-center md:h-screen w-screen">
            <div className="relative mx-auto flex max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32 bg-gray-200 rounded-xl">
                <div className="flex h-20 w-full items-end rounded-lg bg-gray-500 p-3 md:h-36 shadow-main">
                    <div className="w-32 text-white md:w-36">Logo</div>
                </div>
                <div className="shadow-main rounded-lg">
                    <RegisterForm />
                </div>
            </div>
        </main>
    );
}
