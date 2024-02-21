import { connect } from 'mongoose'
import { config } from '../app/lib/config'

async function dbConnect() {
	try {
		await connect(config.mongoDbUri)
	} catch (error) {
		throw new Error('Error in connecting to mongoDb')
	}
}

export default dbConnect
