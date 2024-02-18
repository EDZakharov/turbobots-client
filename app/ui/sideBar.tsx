import Link from 'next/link'

// 'bg-gradient-to-bl from-green-200 via-slate-400 to-green-300 bg-no-repeat'
//hover:bg-gradient-to-tr hover:from-green-200 hover:via-purple-600 hover:via-slate-400 hover:to-green-300
const liStylesTW =
	'pl-[10px] py-3 flex items-center gap-2 hover:bg-gray-300 dark:hover:bg-gray-600 cursor-pointer '
const svgStylesTW =
	'group-hover:text-gray-500 dark:group-hover:text-gray-200 text-gray-400 dark:fill-current flex-shrink-0 w-4 h-4 dark:text-gray-200 transition duration-75 dark:text-gray-400 animate-fade animate-once animate-duration-[1000ms]'
const iStylesTW = 'mr-4 '

export default function SideBar() {
	return (
		<aside
			className='group fixed top-[10%] left-0 w-[36px] overflow-hidden whitespace-nowrap flex transition-all duration-300 ease-in-out items-center hover:w-[160px] shadow-none 
    hover:shadow-xy-md
    dark:hover:shadow-gray-800
    hover:bg-stone-100/50
    dark:hover:bg-slate-700/90
    rounded-r-xl
    '
		>
			<nav className='w-full relative text-transparent hover:text-white  dark:hover:bg-slate-700/90  hover:overflow-hidden '>
				<ul className='flex flex-col text-sm text-gray-900 dark:text-gray-200'>
					<Link href='/'>
						<li className={liStylesTW}>
							<i className={iStylesTW}>
								<svg
									className={svgStylesTW}
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									fill='currentColor'
								>
									<path d='M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z' />
									<path d='m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z' />
								</svg>
							</i>
							<span>Home</span>
						</li>
					</Link>
					<Link href='/app/dashboard'>
						<li className={liStylesTW}>
							<i className={iStylesTW}>
								<svg
									className={svgStylesTW}
									aria-hidden='true'
									xmlns='http://www.w3.org/2000/svg'
									fill='currentColor'
									viewBox='0 0 22 21'
								>
									<path d='M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z' />
									<path d='M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z' />
								</svg>
							</i>
							<span>Dashboard</span>
						</li>
					</Link>
					<Link href='/app/account'>
						<li className={liStylesTW}>
							<i className={iStylesTW}>
								<svg
									className={svgStylesTW}
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									fill='currentColor'
								>
									<path
										fillRule='evenodd'
										d='M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z'
										clipRule='evenodd'
									/>
								</svg>
							</i>
							<span>Account</span>
						</li>
					</Link>
					<Link href='/app/dashboard/account'>
						<li className={liStylesTW}>
							<i className={iStylesTW}>
								<svg
									className={svgStylesTW}
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									fill='currentColor'
								>
									<path
										fillRule='evenodd'
										d='M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z'
										clipRule='evenodd'
									/>
								</svg>
							</i>
							<span>Shop</span>
						</li>
					</Link>
					<Link href='/' className=''>
						<li className={liStylesTW}>
							<i className={iStylesTW}>
								<svg
									className={svgStylesTW}
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									fill='currentColor'
								>
									<path
										fillRule='evenodd'
										d='M12 2.25a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM6.166 5.106a.75.75 0 0 1 0 1.06 8.25 8.25 0 1 0 11.668 0 .75.75 0 1 1 1.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 0 1 1.06 0Z'
										clipRule='evenodd'
									/>
								</svg>
							</i>
							<span>Logout</span>
						</li>
					</Link>
				</ul>
			</nav>
		</aside>
	)
}
