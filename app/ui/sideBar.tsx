import Link from 'next/link'
import ThemeChanger from '../components/themeChanger'

const liStylesTW =
	'p-[20px] flex items-center gap-2 text-white hover:bg-gradient-to-tr hover:from-fuchsia-950 hover:via-purple-600 hover:to-fuchsia-500 dark:hover:bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] dark:hover:from-teal-500 dark:via-teal-900 dark:hover:to-cyan-950 cursor-pointer'
const svgStylesTW =
	' dark:fill-current flex-shrink-0 w-6 h-6 text-gray-200 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white animate-fade animate-once animate-duration-[1000ms]'
const iStylesTW = 'mr-3'

export default function SideBar() {
	return (
		<aside className='w-[60px]  overflow-hidden whitespace-nowrap shadow-sm hover:w-[250px] transition-all duration-300 ease-in-out '>
			<ul className='flex flex-col h-screen'>
				<Link href='/'>
					<li className={liStylesTW}>
						<i className={iStylesTW}>
							<svg
								className={svgStylesTW}
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								stroke-width='2'
								stroke-linecap='round'
								stroke-linejoin='round'
							>
								<path d='m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' />
								<polyline points='9 22 9 12 15 12 15 22' />
							</svg>
						</i>
						<span>Home</span>
					</li>
				</Link>
				<Link href='/dashboard'>
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

				<Link href='/Billing'>
					<li className={liStylesTW}>
						<i className={iStylesTW}>
							<svg
								className={svgStylesTW}
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='currentColor'
							>
								<path
									fill-rule='evenodd'
									d='M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z'
									clip-rule='evenodd'
								/>
							</svg>
						</i>
						<span>Account</span>
					</li>
				</Link>
				<Link href='/account'>
					<li className={liStylesTW}>
						<i className={iStylesTW}>
							<svg
								className={svgStylesTW}
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='currentColor'
							>
								<path
									fill-rule='evenodd'
									d='M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z'
									clip-rule='evenodd'
								/>
							</svg>
						</i>
						<span>Shop</span>
					</li>
				</Link>
				<ThemeChanger />
				<Link href='/' className='mt-auto mb-10'>
					<li className={liStylesTW}>
						<i className={iStylesTW}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke-width='1.5'
								stroke='currentColor'
								className={svgStylesTW}
							>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									d='M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9'
								/>
							</svg>
						</i>
						<span>Logout</span>
					</li>
				</Link>
				{/* <li ></li> */}
			</ul>
		</aside>
	)
}
