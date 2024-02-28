import { AuthProvider } from '@/app/(auth)/providers'
import { Metadata } from 'next/types'

export const metadata: Metadata = {
	title: 'Login',
}

export default function WithAuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return <AuthProvider>{children}</AuthProvider>
}
