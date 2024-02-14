import { Metadata } from 'next'
import SideBar from '../ui/sideBar'

export const metadata: Metadata = {
	title: 'Dashboard',
}

export default function dashboard({ children }: { children: React.ReactNode }) {
	return (
		<div className='flex h-screen flex-col'>
			<div className='flex flex-row'>
				<div
					className={`flex-none w-auto transition-all hover:delay-100 duration-300 ease-in hover:border-r dark:hover:border-r-gray-300`}
				>
					<SideBar />
				</div>
				{children}
			</div>
		</div>
	)
}
