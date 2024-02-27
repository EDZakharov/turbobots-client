import { RestClientV5 } from 'bybit-api'

export interface IRestClientOptions {
	key?: string
	secret?: string
	testnet?: boolean
	recv_window?: number
	enable_time_sync?: boolean
	baseUrl?: string
}

export function connectToBybit(key: string, secret: string) {
	const restClientOptions: IRestClientOptions = {
		testnet: false,
		key,
		secret,
		enable_time_sync: true,
		recv_window: 5000,
		baseUrl: 'https://api.bybit.com/',
	}

	try {
		const restClientV5 = new RestClientV5(restClientOptions)
		if (restClientV5) {
			return new RestClientV5(restClientOptions)
		}
	} catch (error) {
		return
	}
}

export const exchanges = {
	bybit: 'https://bybit.com/',
	binance: 'https://binance.com/',
}
