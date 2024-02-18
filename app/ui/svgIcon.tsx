import {
	HomeSvg,
	PieSvg,
	PowerSvg,
	QuestionSvg,
	ShopSvg,
	UserSvg,
} from './svg-components/svg-components'

interface ISvgIconProps {
	name: string
	color: string
	size: 4 | 6
	// width: number
}

export function SvgIcon({ name, color, size }: ISvgIconProps): JSX.Element {
	if (name === 'Home')
		return <HomeSvg className={`text-${color} w-${size} h${size}`} />
	if (name === 'Dashboard')
		return <PieSvg className={`text-${color} w-${size} h${size}`} />
	if (name === 'Account')
		return <UserSvg className={`text-${color} w-${size} h${size}`} />
	if (name === 'Shop')
		return <ShopSvg className={`text-${color} w-${size} h${size}`} />
	if (name === 'Logout')
		return <PowerSvg className={`text-${color} w-${size} h${size}`} />
	return <QuestionSvg className={`text-${color} w-${size} h${size}`} />
}
