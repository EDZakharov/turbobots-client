import { ApiKeys } from '@/mongodb/models/apiKeysModule'
import { TokenModel } from '@/mongodb/models/tokenModel'
import { dbConnect, dbDisconnect } from '@/mongodb/mongodb'
import { JwtPayload, verify } from 'jsonwebtoken'
import { cookies } from 'next/headers'
import { NextRequest } from 'next/server'
import {
	showStandardCustomError,
	showStandardNotFoundError,
	showUnauthorizedError,
} from '../../errors'
import {
	showCreatedCustomResponse,
	showStandardCustomResponse,
} from '../../responses'

interface ISetApiKey {
	exchange?: string
	apiKey?: string
	apiSecretKey?: string
}

const secretRefresh = process.env.APP_DB_SECRET_REFRESH_TOKEN || ''

export async function POST(request: NextRequest) {
	try {
		const { exchange, apiKey, apiSecretKey }: ISetApiKey = await request.json()

		if (!exchange || !apiKey || !apiSecretKey) {
			return showStandardCustomError('Invalid request data')
		}

		const cookiesList = cookies()
		const refreshToken = cookiesList.get('refreshToken')?.value as string
		const { id } = verify(refreshToken, secretRefresh) as JwtPayload

		if (!id || id.length !== 24) {
			return showStandardCustomError('Id must be 24 hex string')
		}

		await dbConnect()
		const exists = await TokenModel.findOne({ userId: id, refreshToken })

		if (!exists) {
			return showUnauthorizedError()
		}

		const foundDuplicate = await ApiKeys.findOne({
			id,
			exchange,
		})

		if (!foundDuplicate) {
			const newApiKey = new ApiKeys({
				id,
				exchange,
				apiKey,
				apiSecretKey,
			})

			await newApiKey.save()
			await dbDisconnect()
			return showCreatedCustomResponse(`Api key was created`)
		} else {
			await ApiKeys.updateOne(
				{ id, exchange },
				{
					apiKey,
					apiSecretKey,
				}
			)
		}
		await dbDisconnect()
		return showStandardCustomResponse(`Api key was updated`)
	} catch (error: any) {
		console.log(error)

		await dbDisconnect()
		const searchRegEx = /\{([^}]+)\}/gm
		const stringifiedError = error.toString().match(searchRegEx)
		const parsedError = JSON.parse(stringifiedError)

		if (parsedError && parsedError.message) {
			return showStandardNotFoundError(`${parsedError.message}`)
		} else if (error._message && error.errors?.userId) {
			return showStandardNotFoundError('User not found')
		} else {
			return showStandardCustomError('Unable to add api key')
		}
	}
}
