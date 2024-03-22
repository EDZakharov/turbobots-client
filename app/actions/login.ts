'use server';

import bcrypt from 'bcrypt';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { User } from '../lib/mongodb/models/usermodel';
import { dbConnect } from '../lib/mongodb/mongodb';
import { UserDTO } from '../lib/mongodb/serialize/SerializeUser';
import { generateTokens, saveRefreshToken } from '../lib/mongodb/tokens/tokens';

export async function formLogin(
    prevState: string | undefined,
    formData: FormData
) {
    try {
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        await dbConnect();

        if (!email || !password) {
            throw new Error('Missing email or password');
        }

        const user = await User.findOne({ email });

        if (!user) {
            throw new Error(`User with email ${email} not found!`);
        }

        const passwordIsMatch = await bcrypt.compare(password, user.password);

        if (!passwordIsMatch) {
            throw new Error('Incorrect password');
        }

        const userDto = new UserDTO(user);

        const payload = { ...userDto };
        const tokens = await generateTokens(
            { ...payload },

            process.env.APP_DB_SECRET_ACCESS_TOKEN as string,
            process.env.APP_DB_SECRET_REFRESH_TOKEN as string
        );

        const result = await saveRefreshToken(userDto.id, tokens.refreshToken);

        const cookiesList = cookies();
        const minute = 60 * 1000;
        const hour = 60 * 60 * 1000;
        const day = 24 * 60 * 60 * 1000;

        cookiesList.set({
            name: 'accessToken',
            value: tokens.accessToken,
            secure: true,
            httpOnly: true,
            path: '/',
            sameSite: 'strict',
            maxAge: 5 * minute,
        });

        cookiesList.set({
            name: 'refreshToken',
            value: tokens.refreshToken,
            secure: true,
            httpOnly: true,
            path: '/',
            sameSite: 'strict',
            maxAge: 30 * day,
        });
    } catch (error: any) {
        console.log(error);

        return error.message;
    } finally {
        revalidatePath('/login');
        redirect('/dashboard');
    }
}
