'use server';

import { permanentRedirect } from 'next/navigation';

export async function redirectToDashboard() {
    permanentRedirect('/dashboard');
}
