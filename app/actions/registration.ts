'use server';

import { redirect } from 'next/navigation';

export async function register(
    prevState: string | undefined,
    formData: FormData
) {
    try {
        const username = formData.get('username');
        const email = formData.get('email');
        const name = formData.get('name');
        const password = formData.get('password');

        const response = await fetch(
            'http://localhost:3000/api/auth/register',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    email,
                    name,
                    password,
                }),
                // cache: 'no-store',
            }
        );

        if (response.ok) {
            return redirect(`/login`);
        } else {
            const { message } = await response.json();
            throw new Error(message);
        }
    } catch (error: any) {
        if (error) {
            return error.message;
        }
        throw error;
    }
}
