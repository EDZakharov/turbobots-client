import jwt from 'jsonwebtoken'
import { TokenModel } from '../models/tokenModel'
import { ObjectId } from '../models/usermodel'

interface IGenTokens {
	accessToken: string
	refreshToken: string
}

export function generateTokens(
	payload: any,
	accessSecret: string,
	refreshSecret: string
): IGenTokens {
	const accessToken = jwt.sign(payload, accessSecret, {
		expiresIn: '5s',
	})
	const refreshToken = jwt.sign(payload, refreshSecret, {
		expiresIn: '15d',
	})
	return {
		accessToken,
		refreshToken,
	}
}

export async function saveRefreshToken(userId: ObjectId, refreshToken: string) {
	const tokenData = await TokenModel.findOne({ userId })

	if (tokenData) {
		tokenData.refreshToken = refreshToken
		return tokenData.save()
	}
	const token = await TokenModel.create({ userId, refreshToken })
	return token
}

export async function removeRefreshToken(refreshToken: string) {
	const result = await TokenModel.deleteOne({ refreshToken })
	return result
}

export async function findRefreshToken(refreshToken: string) {
	const result = await TokenModel.findOne({ refreshToken })
	return result
}

export async function validateAccessToken(
	accessToken: string,
	accessSecret: string
): Promise<string | jwt.JwtPayload | undefined> {
	try {
		const result = jwt.verify(accessToken, accessSecret)
		return result
	} catch (error) {
		return
	}
}

export async function validateRefreshToken(
	refreshToken: string,
	refreshSecret: string
): Promise<string | jwt.JwtPayload | undefined> {
	try {
		const result = jwt.verify(refreshToken, refreshSecret)
		return result
	} catch (error) {
		return
	}
}
