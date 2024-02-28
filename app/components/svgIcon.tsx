import {
	HomeSvg,
	PieSvg,
	PowerSvg,
	QuestionSvg,
	ShopSvg,
	UserSvg,
} from '../ui/svg-components/svg-components'

interface ISvgIconProps {
	name: string
	color: string
	size?: 4 | 6
	sizePx?: number
}

export function SvgIcon({
	name,
	color,
	size,
	sizePx,
}: ISvgIconProps): JSX.Element {
	const classNameSvg = `text-${color} ${
		sizePx ? `w-[${sizePx}px] h-[${sizePx}px]` : `w-${size} h-${size}`
	} `

	console.log(classNameSvg)

	if (name === 'Home') return <HomeSvg className={classNameSvg} />
	if (name === 'Bot settings') return <HomeSvg className={classNameSvg} />
	if (name === 'Dashboard') return <PieSvg className={classNameSvg} />
	if (name === 'Account') return <UserSvg className={classNameSvg} />
	if (name === 'Shop') return <ShopSvg className={classNameSvg} />
	if (name === 'Logout')
		return <PowerSvg fill={'blue'} className={classNameSvg} />

	return <QuestionSvg className={classNameSvg} />
}
