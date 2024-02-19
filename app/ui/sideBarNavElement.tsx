import Link from 'next/link'
import { SvgIcon } from './svgIcon'

interface ISideBarNavElement {
	link: string
	tittle: string
	color: string
	size: 4 | 6
	textStyle: string
}

export default function SideBarNavElement({
	link,
	tittle,
	color,
	size,
	textStyle,
}: ISideBarNavElement) {
	return (
		<>
			<Link href={link} className='flex gap-4 items-center'>
				<SvgIcon name={tittle} color={color} size={size} />
				<span className={textStyle}>{tittle}</span>
			</Link>
		</>
	)
}
