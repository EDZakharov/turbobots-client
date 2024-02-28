import type { Metadata } from 'next'
import Header from './components/header/header'
import Main from './components/main/main'
import SideBar from './components/sidebar/sideBar'

export const metadata: Metadata = {
	title: {
		template: '%s | LAVA TRADE',
		default: 'Dashboard',
	},
}

export default async function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<Header />
			<SideBar />
			<Main>{children}</Main>
		</>
	)
}
