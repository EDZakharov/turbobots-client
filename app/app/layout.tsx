import ThemeChanger from '@/app/components/themeChanger'
import SideBar from '../ui/sideBar'
import { PowerSvg } from '../ui/svg-components/svg-components'

export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<div className='grid grid-cols-9-custom grid-rows-9 h-screen'>
			<header className='relative col-span-10 row-end-1 p-1  bg-gradient-to-r from-gray-100 to-gray-300 dark:bg-gradient-to-l dark:from-slate-950 dark:to-indigo-950 w-full '>
				<div className='absolute top-0 left-0 shadow-primitive w-full h-full'></div>
				<div className='w-full h-full flex items-center justify-between text-xs'>
					<div className='flex gap-3 pl-1'>
						<PowerSvg className={'w-6 h-6'} />
						<span className='text-base'>LAVA TRADE</span>
					</div>
					<div className='flex items-center'>
						<span className='mr-5'>Sign In</span>
						<span className='mr-5'>Sin Out</span>
						<ThemeChanger />
					</div>
				</div>
			</header>
			<div className='row-span-8 row-start-1 row-end-10 pt-4 pr-4 overflow-auto scrollbar-none bg-gray-50 dark:bg-gradient-to-t dark:from-slate-900 dark:to-slate-700  text-black dark:text-white '>
				<div className=''>
					<SideBar />
				</div>
			</div>
			<main className=' col-span-9 row-span-8 row-start-1 row-end-10 p-4 overflow-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-300 bg-gray-50 dark:bg-gradient-to-t dark:from-slate-900 dark:to-slate-700 text-black dark:text-white'>
				<div className=''>{children}</div>
			</main>
		</div>
	)
}
