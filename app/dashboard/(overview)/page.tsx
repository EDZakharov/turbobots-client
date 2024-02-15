import { CryptoSymbolSVG } from '@/app/ui/symbol'

export default async function Page() {
	'use server'
	const res = await login('evgesha1', 'SLoqwnxz1')
	const validCoins = await getValidCoins()

	return (
		<main className='w-full h-screen '>
			<div className=''>
				<h1 className='text-4xl'>Welcome to Dashboard</h1>
				<div className='grid grid-rows-3 grid-cols-2 gap-4'>
					<div className='border col-span-3 break-words'>{res.accessToken}</div>
					<div className='border col-span-2'></div>
					<div className='border col-span-1 '>
						{validCoins.map(
							(el: { _id: string; symbol: string; __v: number }) => (
								<CryptoSymbolSVG key={el._id} symbol={el.symbol} width={30} />
							)
						)}
					</div>
					<div className='border col-span-2'></div>
					<div className='border col-span-1'>5</div>
				</div>
			</div>
		</main>
	)
}

async function login(username: string, password: string) {
	'use server'
	const res = await fetch('http://localhost:5000/api/users/login-user', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			username,
			password,
		}),

		cache: 'no-store',
	})
	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	const response = await res.json()

	return response
}

async function getValidCoins() {
	const res = await fetch('http://localhost:5000/api/users/get-valid-coins', {
		method: 'GET',
		cache: 'no-store',
	})
	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	const { validCoins } = await res.json()

	return validCoins
}
