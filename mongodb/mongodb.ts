import { config } from '@/app/lib/config'
import { connect, disconnect } from 'mongoose'

export async function dbConnect() {
	try {
		await connect(config.DB_URL)
	} catch (error) {
		throw new Error('Error in connecting to mongoDb')
	}
}
export async function dbDisconnect() {
	try {
		await disconnect()
	} catch (error) {
		throw new Error('Error in connecting to mongoDb')
	}
}
