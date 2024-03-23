import { jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { decryptPayload } from './forge';

export async function decrypt(): Promise<undefined | any> {
    try {
        const cookiesList = cookies();
        const accessToken = cookiesList.get('accessToken')?.value as string;
        const checkAccessSecret = process.env.APP_DB_SECRET_ACCESS_TOKEN || '';

        const { payload }: { payload: any } = await jwtVerify(
            accessToken,
            new TextEncoder().encode(checkAccessSecret)
        );

        const decryptedPayload = await decryptPayload(payload.payload);
        return decryptedPayload;
    } catch (error) {
        return;
    }
}
