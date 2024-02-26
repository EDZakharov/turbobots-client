import SideBarNavElement from './sideBarNavElement'

export default function SideBar() {
	const menu = [
		// { id: 1, tittle: 'Home', link: '/' },
		{ id: 1, tittle: 'Dashboard', link: '/dashboard' },
		{ id: 2, tittle: 'Bots', link: '/dashboard/bots' },
		{ id: 3, tittle: 'Account', link: '/dashboard/account' },
		{ id: 4, tittle: 'Shop', link: '/dashboard/shop' },
		{ id: 5, tittle: 'Logout', link: '/' },
	]

	return (
		<div className='row-span-8 row-start-1 row-end-10 pt-4 pr-4 overflow-auto scrollbar-none bg-gray-50 dark:bg-sidebar-color-dark  text-black dark:text-white '>
			<div className=''>
				<aside className=''>
					<nav className='w-full'>
						<ul className='flex flex-col gap-2'>
							{menu.map((el) => (
								<li
									key={el.id}
									className=' hover:bg-gray-200 dark:hover:bg-white/15 hover:text-black dark:text-sidebar-dark-color dark:hover:text-white transition-all rounded-r-xl pl-4 pr-2 text-sm '
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
			</div>
		</div>
	)
}

