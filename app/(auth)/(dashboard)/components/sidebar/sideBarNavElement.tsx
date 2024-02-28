// import Link from 'next/link'
// import { SvgIcon } from '../../../../components/svgIcon'

// interface ISideBarNavElement {
// 	link: string
// 	tittle: string
// 	color?: string
// 	size: 4 | 6
// 	textStyle: string
// }

// export default function SideBarNavElement({
// 	link,
// 	tittle,
// 	color,
// 	size,
// 	textStyle,
// }: ISideBarNavElement) {
// 	return (
// 		<>
// 			<Link href={link} className='flex gap-4 items-center'>
// 				<SvgIcon name={tittle} color={color} size={size} />
// 				<span className={textStyle}>{tittle}</span>
// 			</Link>
// 		</>
// 	)
// }

'use client'
import { SvgIcon } from '@/app/components/svgIcon'
import Link from 'next/link'

interface IButtonProps {
	href?: string
	className?: string
	text: string
	nameType?: string
	svgColor?: string
}

const defaultStyle =
	'z-10 hover:cursor-pointer border rounded-md hover:bg-gray-400/20 dark:hover:bg-white/10 flex gap-2'

export default function SideBarNavElement({
	href = '/',
	className = defaultStyle,
	text = 'placeholder',
	svgColor,
	nameType = '',
}: IButtonProps) {
	return (
		<Link href={href} className={className}>
			<SvgIcon name={nameType} sizePx={2} fill={svgColor} />
			<span className=''>{text}</span>
		</Link>
	)
}
