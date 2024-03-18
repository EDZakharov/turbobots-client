'use client';
import { SvgIcon } from './svgIcon'

interface IHeaderButtonProps {
    href?: string;
    className?: string;
    tittle: string;
    buttonName?: string;
    svgColor?: string;
    textColor?: string;
    tittleStyle?: string;
    onClick?: () => void;
}

const defaultStyle =
    'z-10 hover:cursor-pointer border rounded-md hover:bg-gray-400/20 dark:hover:bg-white/10 flex p-1 gap-1 items-center justify-between transition-all';

export default function Button({
    className = defaultStyle,
    tittle = 'Button',
    tittleStyle = '',
    buttonName = 'Default',
    onClick,
}: IHeaderButtonProps) {
    return (
        <div className={className} onClick={onClick}>
            <SvgIcon name={buttonName} />
            <span className={tittleStyle}>{tittle}</span>
        </div>
    );
}
