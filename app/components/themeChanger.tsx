'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const svgWH = 'w-6 h-6'
const darkSVG =
	'stroke-gray-800 fill-gray-300 hover:fill-gray-100 hover:stroke-gray-700'
const lightSVG =
	'stroke-gray-300 fill-gray-300 hover:fill-gray-100 hover:stroke-gray-100'

export default function ThemeChanger() {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [mounted, setMounted] = useState(false)
	const { setTheme, resolvedTheme } = useTheme()

	useEffect(() => setMounted(true), [])

	const handleDarkClick = () => {
		setTheme('dark')
	}

	const handleLightClick = () => {
		setTheme('light')
	}

	if (!mounted) return <div className={`${svgWH}`}></div>

	if (resolvedTheme === 'dark') {
		return <LightChanger handleLightClick={handleLightClick} />
	}
	if (resolvedTheme === 'light') {
		return <DarkChanger handleDarkClick={handleDarkClick} />
	}
}

function DarkChanger({ handleDarkClick }: any) {
	return (
		<div>
			<label className='relative inline-flex items-center cursor-pointer'>
				<svg
					className={`flex-shrink-0 ${svgWH} stroke-linecap-round stroke-linejoin-round ${lightSVG} animate-fade animate-once animate-duration-[400ms] transition`}
					xmlns='http://www.w3.org/2000/svg'
					strokeWidth='2'
					viewBox='0 0 24 24'
					onClick={() => {
						handleDarkClick()
					}}
				>
					<circle cx='12' cy='12' r='4' />
					<path d='M12 8a2 2 0 1 0 4 4' />
					<path d='M12 2v2' />
					<path d='M12 20v2' />
					<path d='m4.93 4.93 1.41 1.41' />
					<path d='m17.66 17.66 1.41 1.41' />
					<path d='M2 12h2' />
					<path d='M20 12h2' />
					<path d='m6.34 17.66-1.41 1.41' />
					<path d='m19.07 4.93-1.41 1.41' />
				</svg>
			</label>
		</div>
	)
}

function LightChanger({ handleLightClick }: any) {
	return (
		<div>
			<label className='relative inline-flex items-center cursor-pointer'>
				<svg
					className={`flex-shrink-0 ${svgWH}  stroke-width-2 stroke-linecap-round stroke-linejoin-round ${darkSVG} animate-fade animate-once animate-duration-[400ms] transition`}
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					onClick={() => {
						handleLightClick()
					}}
				>
					<path d='M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z' />
				</svg>
			</label>
		</div>
	)
}

{
	/* <input type='checkbox' value='' className='sr-only peer' />
					<div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full  peer-checked:after:bg-gray-900 peer-checked:after:border-gray-900 after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:border-gray-400 after:bg-gray-400 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-none peer-checked:bg-gray-300 "></div> */
}

{
	/* <input type='checkbox' value='' className='sr-only peer' />
<div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full  peer-checked:after:bg-gray-900 peer-checked:after:border-gray-900 after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:border-gray-400 after:bg-gray-400 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-none peer-checked:bg-gray-300 "></div> */
}
