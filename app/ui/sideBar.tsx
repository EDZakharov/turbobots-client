import SideBarNavElement from './sideBarNavElement'

export default function SideBar() {
	const menu = [
		// { id: 1, tittle: 'Home', link: '/' },
		{ id: 2, tittle: 'Dashboard', link: '/app/dashboard' },
		{ id: 3, tittle: 'Account', link: '/app/account' },
		{ id: 4, tittle: 'Shop', link: '/app/shop' },
		{ id: 5, tittle: 'Logout', link: '/' },
	]

	return (
		<aside className=''>
			<nav className='w-full'>
				<ul className='flex flex-col gap-2'>
					{menu.map((el) => (
						<li
							key={el.id}
							className=' hover:bg-gray-200 dark:hover:bg-white/15 hover:text-black dark:hover:text-white transition-all rounded-r-xl pl-4 pr-2 text-sm '
						>
							<div>
								<SideBarNavElement
									link={el.link}
									size={4}
									tittle={el.tittle}
									color=''
									textStyle=''
								/>
							</div>
						</li>
					))}
				</ul>
			</nav>
		</aside>
	)
}
