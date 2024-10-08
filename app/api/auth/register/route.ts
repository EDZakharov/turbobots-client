import { User } from '@/app/lib/mongodb/models/usermodel';
import { dbConnect } from '@/app/lib/mongodb/mongodb';
import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';

interface IUserCredentials {
    name: string;
    username: string;
    email: string;
    password: string;
}

export async function POST(request: NextRequest) {
    try {
        await dbConnect();

        const { name, username, email, password }: IUserCredentials =
            await request.json();

        const usernameNotTaken = await validateUsername(username);
        if (usernameNotTaken) {
            return NextResponse.json(
                { message: `Username ${username} is already taken` },
                {
                    headers: {
                        'Content-Type': `application/json`,
                    },
                    status: 409,
                }
            );
        }

        const emailNotRegistered = await validateEmail(email);
        if (emailNotRegistered) {
            return NextResponse.json(
                { message: `Email ${email} is already taken` },
                {
                    headers: {
                        'Content-Type': `application/json`,
                    },
                    status: 409,
                }
            );
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = new User({
            name,
            username,
            email,
            password: hashedPassword,
        });

        await newUser.save();

        return NextResponse.json(
            { message: `User ${username} was registered` },
            {
                headers: {
                    'Content-Type': `application/json`,
                },
                status: 201,
            }
        );
    } catch (error) {
        return NextResponse.json(
            { message: 'Unable to create your account' },
            {
                headers: {
                    'Content-Type': `application/json`,
                },
                status: 500,
            }
        );
    }
}

const validateUsername = async (username: string) => {
    try {
        const user = await User.findOne({ username });
        return user ? true : false;
    } catch (error) {
        return false;
    }
};

const validateEmail = async (email: string) => {
    try {
        const user = await User.findOne({ email });
        return user ? true : false;
    } catch (error) {
        return false;
    }
};
