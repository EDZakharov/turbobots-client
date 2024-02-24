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
	icons: {
		icon: [
			{
				url: '/favicon-transformed.png',
				media: '(prefers-color-scheme: light)',
			},
			{
				url: '/favicon-transformed.png',
				media: '(prefers-color-scheme: dark)',
			},
		],
	},
}

const darkThemeColor = 'dark:bg-slate-600'
const lightThemeColor = 'bg-slate-100'

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
				className={`${inter.className} ${lightThemeColor} ${darkThemeColor} grid grid-cols-9-custom grid-rows-9 h-screen`}
			>
				{/* <link rel='icon' href={`${favicon}`} sizes='any' /> */}
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
