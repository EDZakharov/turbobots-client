import { showUnauthorizedError } from '@/app/api/(protected)/exchanges/errors'
import { showStandardCustomResponse } from '@/app/api/(protected)/exchanges/responses'
import { TokenModel } from '@/mongodb/models/tokenModel'
import { dbConnect, dbDisconnect } from '@/mongodb/mongodb'
import { JwtPayload, verify } from 'jsonwebtoken'
import { cookies } from 'next/headers'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
	const cookiesList = cookies()
	const accessToken = cookiesList.get('accessToken')?.value as string
	const refreshToken = cookiesList.get('refreshToken')?.value as string
	if (!accessToken) {
		return showUnauthorizedError()
	}

	const secretA = process.env.APP_DB_SECRET_ACCESS_TOKEN || ''
	const secretR = process.env.APP_DB_SECRET_REFRESH_TOKEN || ''

	try {
		await dbConnect()
		if (!refreshToken) {
			const { id } = verify(accessToken, secretA) as JwtPayload
			const exists = await TokenModel.findOne({ userId: id })
			if (!id || id.length !== 24 || !exists) {
				return showUnauthorizedError()
			}
			await dbDisconnect()
			return showStandardCustomResponse('Auth success!')
		}

		const { id } = verify(refreshToken, secretR) as JwtPayload
		const exists = await TokenModel.findOne({ userId: id, refreshToken })

		if (!id || id.length !== 24 || !exists) {
			return showUnauthorizedError()
		}

		await dbDisconnect()
		return showStandardCustomResponse('Auth success!')
	} catch (error) {
		return showUnauthorizedError()
	}
}
