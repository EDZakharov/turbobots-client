import '@/app/ui/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: {
		template: '%s | LAVA TRADE',
		default: 'LAVA TRADE',
	},
	description: 'The official Lava Trade site',
}

const darkThemeColor = 'dark:bg-slate-600'
// 'dark:bg-gradient-to-tr dark:from-cyan-950 dark:via-cyan-9000 dark:to-cyan-900 bg-no-repeat'
// const lightThemeColor = 'bg-gradient-to-bl from-cyan-500 via-sky-400 to-sky-700'
const lightThemeColor = 'bg-slate-100'
// 'bg-gradient-to-bl from-green-200 via-slate-400 to-green-300 bg-no-repeat'

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang='en'
			suppressHydrationWarning
			className={`scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-600 `}
		>
			<body
				className={`${inter.className} ${lightThemeColor} ${darkThemeColor}`}
			>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}

//dark
//bg-gradient-to-r from-purple-800 via-orange-900 to-gray-800
//bg-gradient-to-tl from-current via-gray-800 to-cyan-600
//bg-gradient-to-tl from-black via-pink-900 to-sky-900
//bg-gradient-to-tr from-stone-700 via-slate-700 to-stone-700
//bg-gradient-to-tr from-black via-teal-900 to-teal-700
//bg-gradient-to-tr from-black via-slate-900 to-teal-700
//bg-gradient-to-tr from-black via-slate-800 to-cyan-800

//light
//bg-gradient-to-tl from-fuchsia-300 via-stone-200 to-white
//bg-gradient-to-bl from-cyan-100 via-sky-400 to-sky-900
