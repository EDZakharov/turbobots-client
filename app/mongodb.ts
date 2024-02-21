import { connect } from 'mongoose'
import { config } from './lib/config'

async function dbConnect() {
	try {
		await connect(config.mongoDbUri)
		console.log('Mongodb connected!')
	} catch (error) {
		throw new Error('Error in connecting to mongoDb')
	}
}

export default dbConnect
