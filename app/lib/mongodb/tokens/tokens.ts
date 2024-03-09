import jwt from 'jsonwebtoken';
import { TokenModel } from '../models/tokenModel';
import { ObjectId } from '../models/usermodel';
import { dbConnect } from '../mongodb';

interface IGenTokens {
    accessToken: string;
    refreshToken: string;
}

export function generateTokens(
    payload: any,
    accessSecret: string,
    refreshSecret: string
): IGenTokens {
    const accessToken = jwt.sign(payload, accessSecret, {
        expiresIn: '5m',
    });
    const refreshToken = jwt.sign(payload, refreshSecret, {
        expiresIn: '30d',
    });
    return {
        accessToken,
        refreshToken,
    };
}

export async function saveRefreshToken(userId: ObjectId, refreshToken: string) {
    await dbConnect();
    const tokenData = await TokenModel.findOne({ userId });

    if (tokenData) {
        tokenData.refreshToken = refreshToken;
        return tokenData.save();
    }
    const token = await TokenModel.create({ userId, refreshToken });
    return token;
}

export async function removeRefreshToken(refreshToken: string) {
    await dbConnect();
    const result = await TokenModel.deleteOne({ refreshToken });
    return result;
}

export async function findRefreshToken(refreshToken: string) {
    await dbConnect();
    const result = await TokenModel.findOne({ refreshToken });
    return result;
}

export async function validateAccessToken(
    accessToken: string,
    accessSecret: string
): Promise<string | jwt.JwtPayload | undefined> {
    try {
        const result = jwt.verify(accessToken, accessSecret);
        return result;
    } catch (error) {
        return;
    }
}

export function validateRefreshToken(
    refreshToken: string,
    refreshSecret: string
): string | jwt.JwtPayload | undefined {
    try {
        const result = jwt.verify(refreshToken, refreshSecret);
        return result;
    } catch (error) {
        return;
    }
}
