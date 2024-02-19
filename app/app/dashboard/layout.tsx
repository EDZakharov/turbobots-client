import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Dashboard',
}

export default function layout({ children }: { children: React.ReactNode }) {
	return <div className=''>{children}</div>
}
