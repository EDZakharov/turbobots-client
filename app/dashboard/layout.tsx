import { Metadata } from 'next'
import Link from 'next/link'
import ThemeChanger from '../components/themeChanger'

export const metadata: Metadata = {
	title: 'Dashboard',
}

export default function dashboard({ children }: { children: React.ReactNode }) {
	return (
		<div className='flex h-screen flex-row'>
			<div className={`flex-none w-56 border `}>
				{/* <SideNav /> */}menu12312
				<Link
					href='/'
					className='flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base'
				>
					Home
				</Link>
			</div>
			<div className={`grow border `}>{children}</div>
			<div className={`flex-none border `}>
				{/* <SideNav /> */}
				<ThemeChanger />
			</div>
		</div>
	)
}
