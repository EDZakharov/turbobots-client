import {
    AccountSvg,
    DashboardSvg,
    ExitSvg,
    HomeSvg,
    RobotSvg,
    ShopSvg,
    SpinSvg,
} from '../svg-components/svg-components';

interface ISvgIconProps {
    name?: string;
}

export function SvgIcon({ name }: ISvgIconProps): JSX.Element {
    const fillColor = 'dark:white black';

    if (name === 'Home')
        return <HomeSvg className="dark:fill-white fill-black" />;
    if (name === 'Bots')
        return <RobotSvg className="dark:fill-white fill-black" />;
    if (name === 'Dashboard')
        return <DashboardSvg className="dark:fill-white fill-black" />;
    if (name === 'Account')
        return <AccountSvg className="dark:fill-white fill-black" />;
    if (name === 'Shop')
        return <ShopSvg className="dark:fill-white fill-black" />;
    if (name === 'Logout')
        return <ExitSvg className="dark:fill-white fill-black" />;
    return <SpinSvg className="dark:fill-white fill-black" />;
}
