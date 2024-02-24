import SideBar from '@/app/ui/sideBar'
import type { Metadata } from 'next'
import Header from '../ui/header/header'
import Main from '../ui/main/main'

export const metadata: Metadata = {
	title: 'Dashboard',
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
