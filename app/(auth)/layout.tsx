import { AuthProvider } from './providers'

export default function WithAuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return <AuthProvider>{children}</AuthProvider>
}
