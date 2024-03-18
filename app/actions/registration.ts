'use server';

import bcrypt from 'bcrypt';
import { revalidatePath } from 'next/cache';
import { User } from '../lib/mongodb/models/usermodel';
import { dbConnect } from '../lib/mongodb/mongodb';

export async function register(
    prevState: string | undefined,
    formData: FormData
) {
    try {
        const username = formData.get('username') as string;
        const email = formData.get('email') as string;
        const name = formData.get('name') as string;
        const password = formData.get('password') as string;

        if (!username || !email || !name || !password) {
            throw new Error('Missing data');
        }

        if (!isValidEmail(email)) {
            throw new Error('Invalid email');
        }

        if (!isValidPassword(password)) {
            console.log(12);

            throw new Error('Invalid password');
        }

        await dbConnect();

        if (await foundUsernameDuplicate(username)) {
            throw new Error('Username already taken');
        }

        if (await foundEmailDuplicate(email)) {
            throw new Error('Email already taken');
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = new User({
            name,
            username,
            email,
            password: hashedPassword,
        });

        await newUser.save();
    } catch (error: any) {
        return error.message;
    } finally {
        revalidatePath('/register');
        // redirect(`/register`);
    }
}

function isValidEmail(email: string): boolean {
    const emailRegex: RegExp =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

function isValidPassword(password: string): boolean {
    const passwordRegex: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return passwordRegex.test(password);
}

async function foundUsernameDuplicate(username: string) {
    try {
        const user = await User.findOne({ username });
        return user ? true : false;
    } catch (error) {
        return false;
    }
}

async function foundEmailDuplicate(email: string) {
    try {
        const user = await User.findOne({ email });
        return user ? true : false;
    } catch (error) {
        return false;
    }
}
