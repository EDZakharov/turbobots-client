import ThemeChanger from '@/app/components/themeChanger'
import { getSession } from '@/app/lib/getSession'
import Button from '../../components/button'
import { PowerSvg } from '../svg-components/svg-components'

export default async function Header() {
	const session = await getSession()

	return (
		<header className='relative col-span-10 row-end-1 p-1  bg-gradient-to-r from-gray-100 to-gray-300 dark:bg-gradient-to-l dark:from-slate-700 dark:via-slate-600 dark:to-slate-800 w-full '>
			<div className='absolute z-0 top-0 left-0 shadow-stiglitz w-full h-full'></div>
			<div className='w-full h-full flex items-center justify-between text-xs'>
				<div className='flex gap-3 pl-1'>
					<PowerSvg className={'w-6 h-6'} />
					<span className='text-base'>LAVA TRADE</span>
				</div>
				<div className='flex items-center gap-2 mr-2'>
					{session?.user ? (
						<Button href='/' text='Sign Out' />
					) : (
						<Button href='/login' text='Sign In' />
					)}

					<ThemeChanger />
				</div>
			</div>
		</header>
	)
}
