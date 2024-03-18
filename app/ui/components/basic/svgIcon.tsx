import {
    AccountSvg,
    DashboardSvg,
    ExitSvg,
    HomeSvg,
    QuestionSvg,
    RobotSvg,
    ShopSvg,
    SpinSvg,
} from '../svg-components/svg-components';

interface ISvgIconProps {
    name?: string;
}

export function SvgIcon({ name }: ISvgIconProps): JSX.Element {
    if (name === 'Home') return <HomeSvg />;
    if (name === 'Bots') return <RobotSvg />;
    if (name === 'Dashboard') return <DashboardSvg />;
    if (name === 'Account') return <AccountSvg />;
    if (name === 'Shop') return <ShopSvg />;
    if (name === 'Logout') return <ExitSvg />;
    if (name === 'Default') return <SpinSvg />;

    return <QuestionSvg />;
}
