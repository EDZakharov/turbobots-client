import ThemeChanger from '@/app/components/themeChanger'
import Link from 'next/link'

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
								className={svgStylesTW}
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='currentColor'
							>
								<path
									fill-rule='evenodd'
									d='M12 2.25a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM6.166 5.106a.75.75 0 0 1 0 1.06 8.25 8.25 0 1 0 11.668 0 .75.75 0 1 1 1.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 0 1 1.06 0Z'
									clip-rule='evenodd'
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
