'use server';

import { cookies } from 'next/headers';

export async function clearCookies() {
    const cookie = cookies();
    cookie.delete('accessToken');
    cookie.delete('refreshToken');
}
