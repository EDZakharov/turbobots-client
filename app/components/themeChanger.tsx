'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const svgWH = 'w-6 h-6'
const darkSVG =
	'stroke-gray-800 fill-gray-300 hover:fill-gray-100 hover:stroke-gray-700'
const lightSVG =
	'stroke-gray-300 fill-gray-300 hover:fill-gray-100 hover:stroke-gray-100'

const liStylesTW =
	'p-[20px] flex items-center gap-2 text-white hover:bg-gradient-to-tr hover:from-fuchsia-950 hover:via-purple-600 hover:to-fuchsia-500 dark:hover:bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] dark:hover:from-teal-500 dark:via-teal-900 dark:hover:to-cyan-950 cursor-pointer'

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

	if (!mounted)
		return (
			<div
				className={`w-full ${liStylesTW} `}
				onClick={() => {
					handleDarkClick()
				}}
			>
				<label
					className={`relative inline-flex items-center cursor-pointer animate-fade animate-once animate-duration-[1000ms] transition `}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke-width='1.5'
						stroke='currentColor'
						className={`${svgWH} flex-shrink-0 stroke-linecap-round stroke-linejoin-round
            animate-spin animate-infinity animate-duration-[1000ms] transition dark:stroke-gray-400 stroke-gray-100`}
					>
						<path
							stroke-linecap='round'
							stroke-linejoin='round'
							d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99'
						/>
					</svg>
					<span className='ml-5'>Switch to dark</span>
				</label>
			</div>
		)

	if (resolvedTheme === 'dark') {
		return <LightChanger handleLightClick={handleLightClick} />
	}
	if (resolvedTheme === 'light') {
		return <DarkChanger handleDarkClick={handleDarkClick} />
	}
}

function DarkChanger({ handleDarkClick }: any) {
	return (
		<div
			className={`w-full ${liStylesTW} `}
			onClick={() => {
				handleDarkClick()
			}}
		>
			<label className='relative inline-flex items-center cursor-pointer'>
				<svg
					className={`flex-shrink-0 ${svgWH} stroke-linecap-round stroke-linejoin-round ${lightSVG} animate-fade animate-once animate-duration-[1000ms] transition`}
					xmlns='http://www.w3.org/2000/svg'
					strokeWidth='2'
					viewBox='0 0 24 24'
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
				<span className='ml-5'>Switch to dark</span>
			</label>
		</div>
	)
}

function LightChanger({ handleLightClick }: any) {
	return (
		<div
			className={`w-full ${liStylesTW}`}
			onClick={() => {
				handleLightClick()
			}}
		>
			<label className='relative inline-flex items-center cursor-pointer'>
				<svg
					className={`flex-shrink-0 ${svgWH}  stroke-width-2 stroke-linecap-round stroke-linejoin-round ${darkSVG} animate-fade animate-once animate-duration-[1000ms] transition`}
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
				>
					<path d='M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z' />
				</svg>
				<span className='ml-5'>Switch to light</span>
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
