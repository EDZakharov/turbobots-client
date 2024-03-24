import Link from 'next/link';
import { SvgIcon } from './svgIcon';

interface IHeaderButtonProps {
    href?: string;
    className?: string;
    tittle: string;
    buttonName?: string;
}

const defaultStyle =
    'z-10 hover:cursor-pointer border rounded-md hover:bg-gray-400/20 dark:hover:bg-white/10 flex w-full items-center justify-between ';

export default function LinkButton({
    href = '/',
    className = defaultStyle,
    tittle = 'Button',
    buttonName,
}: IHeaderButtonProps) {
    return (
        <Link href={href} className={className}>
            <SvgIcon name={buttonName} />
            <span className="">{tittle}</span>
        </Link>
    );
}
