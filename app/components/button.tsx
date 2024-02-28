'use client'
import Link from 'next/link'
import { clearCookies } from '../lib/actions'
import { SvgIcon } from './svgIcon'

interface IHeaderButtonProps {
	href?: string
	className?: string
	text?: string
	onClick?: any
}

const handleClick = (e: any, type?: 'signOut' | 'signIn') => {
	// if (type === 'signOut') {
	// 	signOut({ redirect: false }).then(() => {
	// 		router.push('/')
	// 	})
	// }
	clearCookies()
}

const defaultStyle =
	'z-10 hover:cursor-pointer border rounded-md hover:bg-gray-400/20 dark:hover:bg-white/10 flex gap-2'

export default function Button({
	href = '/',
	className = defaultStyle,
	text = 'placeholder',
}: IHeaderButtonProps) {
	// const router = useRouter()

	return (
		<Link href={href} className={className} onClick={handleClick}>
			<SvgIcon name={'Logout'} color={'white'} sizePx={4} />
			<span className=''>{text}</span>
		</Link>
	)
}
