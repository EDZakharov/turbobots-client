import { CryptoSymbolSVG } from '@/app/ui/symbol'

const bgColor = 'backdrop-blur-2xl bg-cards-color/20 shadow-lg'
export default async function Page() {
	// 'use server'
	// const res = await login('evgesha1', 'SLoqwnxz1')
	// const validCoins = await getValidCoins()

	return (
		<main className='w-full h-screen '>
			<div className=''>
				<h1 className='text-4xl text-white ml-2 mt-2'>Welcome to Dashboard</h1>
				<div className='grid grid-rows-3 grid-cols-3 gap-4 m-3'>
					<div
						className={`col-span-3 break-words rounded-lg ${bgColor} text-white p-2`}
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
						placeat excepturi laboriosam facilis odio sequi autem cupiditate hic
						mollitia eius totam magnam perferendis, quaerat tenetur dolores
						eligendi deserunt tempore asperiores deleniti quis in consequuntur?
						Consequuntur, quae, mollitia quisquam alias dicta esse
						exercitationem temporibus sed, voluptas distinctio corporis quos
						animi odio eos nam dolorem doloribus. Eaque a totam ab assumenda
						nulla laboriosam. Quo perferendis, exercitationem, quibusdam quidem
						aut ipsam voluptate nihil laboriosam tempore impedit atque,
						accusantium modi dolorem maxime eum! Odio perspiciatis, neque minus
						ipsa itaque omnis modi culpa odit inventore. Incidunt repudiandae
						molestias doloribus. Quos, soluta? Quae voluptatibus, eveniet
						laborum non tempora veniam, blanditiis sed commodi aperiam at quidem
						praesentium cupiditate dolorem. Natus cum odio iure minus quia,
						sint, dolores similique inventore alias laborum perspiciatis
						consequatur libero veniam possimus in qui ab quam nam recusandae
						necessitatibus? Laboriosam voluptate distinctio explicabo non,
						mollitia porro veniam, quod voluptas molestias recusandae sapiente
						in culpa optio vero facere ut doloremque numquam excepturi sed
						autem. Consequatur labore corporis odit cupiditate, recusandae
						doloribus dolor, ea dolorum debitis, adipisci nam consequuntur quasi
						reprehenderit exercitationem quas? Suscipit similique quo temporibus
						earum dicta! Tempora ab delectus aliquid? Hic ullam quaerat sit
						molestias! Harum minima architecto veniam itaque sapiente illum!
						Excepturi distinctio adipisci unde officia quam! Voluptate,
						asperiores! Quidem, tenetur quo, cupiditate, excepturi cum veritatis
						sed amet sit aliquid sunt maxime ipsum officiis. Aperiam eligendi
						eum illo labore voluptatum perferendis cum magnam unde. Nostrum
						omnis quis modi, voluptatum numquam facilis voluptatibus earum
						asperiores porro aliquid dolorem illum a saepe adipisci veniam
						impedit ab. Fugiat expedita unde beatae animi ea reiciendis velit
						non. Dicta pariatur omnis officia culpa enim totam, tempora nesciunt
						odit magnam asperiores soluta ea quidem vel eligendi quas reiciendis
						aperiam necessitatibus maiores, dolor blanditiis sapiente sunt?
						Consequatur iste rerum, eius ipsam quaerat eligendi soluta quibusdam
						quia commodi ullam optio. Odit itaque recusandae perspiciatis magnam
						culpa pariatur incidunt assumenda ea explicabo! Dolore quo nulla
						iste odio necessitatibus quibusdam unde, itaque hic officia,
						adipisci sint dignissimos ab laboriosam fugit deleniti quam, at
						eligendi maiores! Tempore veniam quibusdam odit qui vero dignissimos
						omnis sapiente consequuntur delectus consectetur accusantium ullam
						beatae rerum debitis modi, voluptates laboriosam repellat sed
						eveniet? Omnis facere labore impedit aliquam officia nemo excepturi
						soluta esse commodi. Dolor provident nam culpa, ratione velit beatae
						molestias similique vel ipsam eum voluptates sapiente, quas
						aspernatur excepturi! Voluptas corporis et, sunt nobis eum saepe
						officia? Provident nulla consequuntur possimus facere cum error unde
						sint praesentium veniam necessitatibus adipisci incidunt, id minus
						quam consequatur fuga doloribus nihil laboriosam labore voluptas
						quasi blanditiis. Delectus in officiis ad! Ipsa saepe ad cumque odio
						nisi autem sit delectus eligendi quis dolores odit voluptatum quidem
						omnis velit excepturi, ratione aliquid recusandae aspernatur in
						reprehenderit possimus! Eligendi doloribus unde pariatur
						voluptatibus assumenda odio vero molestiae, deleniti illum, libero
						similique dolor, expedita dolorum iure sequi quidem? Veniam hic odit
						voluptas harum non ad nemo laboriosam quod dolore atque. Tempore
						quaerat perferendis molestias voluptatibus a, explicabo alias, quas
						eos molestiae qui quibusdam consequuntur sunt ipsum repellat
						laboriosam! Et, dolorem illum!
					</div>
					<div
						className={`col-span-2 break-words rounded-lg ${bgColor} text-white p-2`}
					>
						2
					</div>
					<div
						className={`col-span-1 break-words rounded-lg ${bgColor} text-white p-2`}
					>
						{/* {validCoins.map(
							(el: { _id: string; symbol: string; __v: number }) => (
								<CryptoSymbolSVG key={el._id} symbol={el.symbol} width={30} />
							)
						)} */}
						<div className='flex flex-col'>
							<span>Avalible coins</span>
							<CryptoSymbolSVG symbol='KASUSDT' width={30} />
							<CryptoSymbolSVG symbol='BTCUSDT' width={30} />
						</div>
					</div>
					<div
						className={`col-span-1 rounded-lg ${bgColor} text-white p-2`}
					></div>
					<div className={`col-span-2 rounded-lg ${bgColor} text-white p-2`}>
						5
					</div>
				</div>
			</div>
		</main>
	)
}

// async function login(username: string, password: string) {
// 	'use server'
// 	const res = await fetch('http://localhost:5000/api/users/login-user', {
// 		method: 'POST',
// 		headers: { 'Content-Type': 'application/json' },
// 		body: JSON.stringify({
// 			username,
// 			password,
// 		}),

// 		cache: 'no-store',
// 	})
// 	if (!res.ok) {
// 		throw new Error('Failed to fetch data')
// 	}

// 	const response = await res.json()

// 	return response
// }

// async function getValidCoins() {
// 	const res = await fetch('http://localhost:5000/api/users/get-valid-coins', {
// 		method: 'GET',
// 		cache: 'no-store',
// 	})
// 	if (!res.ok) {
// 		throw new Error('Failed to fetch data')
// 	}

// 	const { validCoins } = await res.json()

// 	return validCoins
// }
