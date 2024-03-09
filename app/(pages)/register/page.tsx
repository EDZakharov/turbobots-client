import { Metadata } from 'next/types';
import RegisterForm from './register-form';

export const metadata: Metadata = {
    title: 'Register',
};

export default async function RegisterPage() {
    return (
        <main className="flex mt-[6%] items-start justify-center w-screen ">
            <div className="flex flex-col bg-gray-200 rounded-xl">
                <div className="flex w-full items-end rounded-lg bg-gray-500 shadow-main">
                    <div className=" text-white ">Logo</div>
                </div>
                <div className="shadow-main rounded-lg">
                    <RegisterForm />
                </div>
            </div>
        </main>
    );
}
