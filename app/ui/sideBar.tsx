import Link from 'next/link'
import { SvgIcon } from './svgIcon'

export default function SideBar() {
	const menu = [
		{ id: 1, tittle: 'Home', link: '/' },
		{ id: 2, tittle: 'Dashboard', link: '/app/dashboard' },
		{ id: 3, tittle: 'Account', link: '/app/account' },
		{ id: 4, tittle: 'Shop', link: '/app/shop' },
		{ id: 5, tittle: 'Logout', link: '/' },
	]

	return (
		<aside className=''>
			<nav className=''>
				<ul className='flex flex-col'>
					{menu.map((el) => (
						<li key={el.id}>
							<Link href={el.link} className='flex gap-2 hover:bg-gray-500'>
								<SvgIcon name={el.tittle} color='gray-400' size={4} />
								<span>{el.tittle}</span>
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</aside>
	)
}
