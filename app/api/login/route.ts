import { User } from '@/mongodb/models/usermodel'
import dbConnect from '@/mongodb/mongodb'
import { generateTokens, saveRefreshToken } from '@/mongodb/tokens/tokens'
import bcrypt from 'bcrypt'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

interface IUserCredentials {
	username: string
	password: string
	role: 'user' | 'admin'
}

export class UserDTO {
	id
	email
	password
	username
	role
	name
	updateAt
	createAt

	constructor(model: any) {
		this.id = model._id
		this.email = model.email
		this.password = model.password
		this.username = model.username
		this.role = model.role
		this.name = model.name
		this.updateAt = model.updateAt
		this.createAt = model.createAt
	}
}

export async function POST(request: NextRequest) {
	try {
		await dbConnect()
		const checkAccessSecret = process.env.APP_DB_SECRET_ACCESS_TOKEN
		const checkRefreshSecret = process.env.APP_DB_SECRET_REFRESH_TOKEN
		if (!checkAccessSecret || !checkRefreshSecret) {
			return NextResponse.json(
				{ message: 'The server encountered an internal configuration error' },
				{
					status: 506,
				}
			)
		}

		const { username, password, role }: IUserCredentials = await request.json()
		const user = await User.findOne({ username })

		if (!user) {
			return NextResponse.json(
				{ message: 'Username not found' },
				{
					status: 404,
				}
			)
		}

		if (user.role !== role) {
			return NextResponse.json(
				{
					message: 'The client does not have permission to access the content',
				},
				{
					status: 403,
				}
			)
		}

		const passwordIsMatch = await bcrypt.compare(password, user.password)
		if (!passwordIsMatch) {
			return NextResponse.json(
				{ message: 'Incorrect password' },
				{
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

		const cookie = cookies()
		cookie.set('refreshToken', tokens.refreshToken, {
			httpOnly: true,
			sameSite: 'strict',
		})
		return NextResponse.json(
			{
				userId: userDto.id,
				accessToken: tokens.accessToken,
				message: 'You are now logged in',
			},
			{
				headers: { 'Set-Cookie': `refreshToken=${tokens.refreshToken}` },
				status: 200,
			}
		)
	} catch (error) {
		return NextResponse.json(
			{ message: 'Unable to login' },
			{
				status: 500,
			}
		)
	}
}
