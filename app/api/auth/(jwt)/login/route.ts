import {
	MAX_AGE_ACCESS_TOKEN,
	MAX_AGE_REFRESH_TOKEN,
} from '@/constants/constants'
import { User } from '@/mongodb/models/usermodel'
import { dbConnect, dbDisconnect } from '@/mongodb/mongodb'

import { UserDTO } from '@/mongodb/serialize/SerializeUser'
import { generateTokens, saveRefreshToken } from '@/mongodb/tokens/tokens'
import bcrypt from 'bcrypt'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

interface IUserCredentials {
	email: string
	password: string
}

export async function POST(request: NextRequest) {
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
		await dbConnect()
		const { email, password }: IUserCredentials = await request.json()
		const user = await User.findOne({ email })

		if (!user) {
			await dbDisconnect()
			return NextResponse.json(
				{ message: 'Email not found' },
				{
					headers: {
						'Content-Type': `application/json`,
					},
					status: 404,
				}
			)
		}

		// if (user.role !== role) {
		// 	await dbDisconnect()
		// 	return NextResponse.json(
		// 		{
		// 			message: 'The client does not have permission to access the content',
		// 		},
		// 		{
		// 			headers: {
		// 				'Content-Type': `application/json`,
		// 			},
		// 			status: 403,
		// 		}
		// 	)
		// }

		const passwordIsMatch = await bcrypt.compare(password, user.password)
		if (!passwordIsMatch) {
			await dbDisconnect()
			return NextResponse.json(
				{ message: 'Incorrect password' },
				{
					headers: {
						'Content-Type': `application/json`,
					},
					status: 409,
				}
			)
		}
		const userDto = new UserDTO(user)

		const tokens = generateTokens(
			{ ...userDto },
			checkAccessSecret,
			checkRefreshSecret
		)

		await saveRefreshToken(userDto.id, tokens.refreshToken)
		await dbDisconnect()
		const cookie = cookies()

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
		await dbDisconnect()
		return NextResponse.json(
			{ message: 'Unable to login' },
			{
				headers: {
					'Content-Type': `application/json`,
				},
				status: 500,
			}
		)
	}
}
