'use client'
import { useTheme } from 'next-themes'

export default function units() {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { theme, setTheme } = useTheme()
	return (
		<div className='bg-white dark:bg-black'>
			<div className='py-20 flex flex-col items-center justify-center'>
				<h1 className='text-5xl text-center text-gray-800 dark:text-gray-100 font-bold'>
					Next Themes + Tailwind Dark Mode
				</h1>
			</div>
		</div>
	)
}
