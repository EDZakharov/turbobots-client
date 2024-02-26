'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const svgWH = 'w-4 h-4'
const darkSVG =
	'stroke-gray-500 fill-gray-500 hover:fill-gray-400 hover:stroke-gray-400'
const lightSVG =
	'stroke-gray-200 fill-gray-200 hover:fill-gray-400 hover:stroke-gray-400'

export default function ThemeChanger() {
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
			<>
				<label
					className={`relative inline-flex items-center animate-fade animate-once animate-duration-[1000ms] transition `}
				>
					<svg
						onClick={() => {
							handleDarkClick()
						}}
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth='2'
						stroke='currentColor'
						className={`cursor-pointer ${svgWH} flex-shrink-0 stroke-linecap-round stroke-linejoin-round
            animate-spin animate-infinity animate-duration-[1000ms] transition dark:stroke-gray-400 stroke-gray-100`}
					>
						<path d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99' />
					</svg>
				</label>
			</>
		)

	if (resolvedTheme === 'light') {
		return <LightChanger handleLightClick={handleDarkClick} />
	}
	if (resolvedTheme === 'dark') {
		return <DarkChanger handleDarkClick={handleLightClick} />
	}
}

function DarkChanger({ handleDarkClick }: any) {
	return (
		<>
			<label className='relative inline-flex items-center'>
				<svg
					onClick={() => {
						handleDarkClick()
					}}
					className={` cursor-pointer flex-shrink-0 ${svgWH} stroke-linecap-round stroke-linejoin-round ${lightSVG} animate-fade animate-once animate-duration-[1000ms] transition`}
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
			</label>
		</>
	)
}

function LightChanger({ handleLightClick }: any) {
	return (
		<>
			<label className='relative inline-flex items-center '>
				<svg
					onClick={() => {
						handleLightClick()
					}}
					className={`cursor-pointer flex-shrink-0 ${svgWH}  stroke-width-2 stroke-linecap-round stroke-linejoin-round ${darkSVG} animate-fade animate-once animate-duration-[1000ms] transition`}
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
				>
					<path d='M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z' />
				</svg>
			</label>
		</>
	)
}
