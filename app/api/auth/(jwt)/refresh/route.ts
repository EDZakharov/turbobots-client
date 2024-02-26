import {
	MAX_AGE_ACCESS_TOKEN,
	MAX_AGE_REFRESH_TOKEN,
} from '@/constants/constants'
import { TokenModel } from '@/mongodb/models/tokenModel'
import { User } from '@/mongodb/models/usermodel'
import { dbConnect, dbDisconnect } from '@/mongodb/mongodb'

import { UserDTO } from '@/mongodb/serialize/SerializeUser'
import { generateTokens, saveRefreshToken } from '@/mongodb/tokens/tokens'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse, userAgent } from 'next/server'

export async function PUT(request: NextRequest) {
	try {
		const checkAccessSecret = process.env.APP_DB_SECRET_ACCESS_TOKEN
		const checkRefreshSecret = process.env.APP_DB_SECRET_REFRESH_TOKEN
		if (!checkAccessSecret || !checkRefreshSecret) {
			return NextResponse.json(
				{ message: 'The server encountered an internal configuration error' },
				{
					headers: {
						'Content-Type': `application/json`,
					},
					status: 506,
				}
			)
		}
		const cookie = cookies()
		const secureUserAgent = userAgent(request)
		const refreshToken = cookie.get('refreshToken')
		console.log('refreshToken ', refreshToken)

		// const accessToken = cookie.get('accessToken')

		if (!refreshToken) {
			return showUnauthorizedError()
		}
		await dbConnect()

		const token = await TokenModel.findOne({
			refreshToken: refreshToken.value,
		})

		if (!token) {
			await dbDisconnect()
			return showUnauthorizedError()
		}

		const user = await User.findById(token.userId)

		const userDto = new UserDTO(user)
		const payload = { ...secureUserAgent, ...userDto }
		const tokens = generateTokens(
			{ ...payload },
			checkAccessSecret,
			checkRefreshSecret
		)

		await saveRefreshToken(userDto.id, tokens.refreshToken)
		await dbDisconnect()
		cookie.set('accessToken', tokens.accessToken, {
			httpOnly: true,
			sameSite: 'strict',
			secure: true,
			path: '/',
			maxAge: MAX_AGE_ACCESS_TOKEN,
		})

		cookie.set('refreshToken', tokens.refreshToken, {
			httpOnly: true,
			sameSite: 'strict',
			secure: true,
			path: '/',
			maxAge: MAX_AGE_REFRESH_TOKEN,
		})
		return NextResponse.json(
			{
				userId: userDto.id,
			},
			{
				headers: {
					'Content-Type': `application/json`,
				},
				status: 200,
			}
		)
	} catch (error) {
		// console.log(error)

		return NextResponse.json(
			{
				message: 'Unable to refresh tokens',
			},
			{
				headers: {
					'Content-Type': `application/json`,
				},
				status: 500,
			}
		)
	}
}

function showUnauthorizedError() {
	return NextResponse.json(
		{ message: 'Unauthorized' },
		{
			headers: {
				'Content-Type': `application/json`,
			},
			status: 401,
		}
	)
}
