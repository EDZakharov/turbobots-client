import Link from 'next/link'

export default function BotSettings() {
	return (
		<div className='flex flex-col gap-2 w-full bg-secondary-color items-center'>
			<Link href={'/dashboard/bots/1'}>settings</Link>
		</div>
	)
}
