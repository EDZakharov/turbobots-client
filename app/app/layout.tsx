import ThemeChanger from '@/app/components/themeChanger'
import { Metadata } from 'next'
import SideBar from '../ui/sideBar'

export const metadata: Metadata = {
	title: 'App',
}

export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<div className='grid grid-cols-10 h-screen'>
			<header className='relative col-span-10 p-2 bg-bitcoin-color/80 w-full '>
				<div className='absolute top-0 left-0 shadow-primitive w-full h-full '></div>
				<div className='flex items-center justify-between text-xs'>
					<div>
						<span>{`${metadata.title}`}</span>
					</div>
					<div className='flex items-center'>
						<span className='mr-5'>Sign In</span>
						<span className='mr-5'>Sin Out</span>
						<ThemeChanger />
					</div>
				</div>
			</header>
			<div className='col-span-1 row-span-3 row-start-2 overflow-auto scrollbar-none bg-white  border-r border-bitcoin-color/80 text-black p-2'>
				<SideBar />
			</div>
			<main className='col-span-9 row-span-3 row-start-2 overflow-auto scrollbar-thin  scrollbar-track-transparent scrollbar-thumb-bitcoin-color/80 bg-white p-5  text-black'>
				{children}
			</main>
		</div>
	)
}
