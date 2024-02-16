import SideBar from '@/app/ui/sideBar'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Dashboard',
}

export default function dashboard({ children }: { children: React.ReactNode }) {
	return (
		<div className='flex flex-col '>
			<div className='flex flex-row'>
				<div
					className={`flex-none w-auto transition-all hover:delay-100 duration-300 ease-in-out border-r border-r-transparent hover:border-r-white dark:hover:border-r-gray-300`}
				>
					<SideBar />
				</div>
				<div className='overflow-auto '>{children}</div>
			</div>
		</div>
	)
}
