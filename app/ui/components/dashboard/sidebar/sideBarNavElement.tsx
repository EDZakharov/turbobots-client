'use client';
import { SvgIcon } from '@/app/ui/components/basic/svgIcon';
import Link from 'next/link';

interface IButtonProps {
    href?: string;
    className?: string;
    text: string;
    nameType?: string;
    svgColor?: string;
}

const defaultStyle =
    'z-10 hover:cursor-pointer border rounded-md hover:bg-gray-400/20 dark:hover:bg-white/10 flex gap-2';

export default function SideBarNavElement({
    href = '/',
    className = defaultStyle,
    text = 'placeholder',
    svgColor,
    nameType = '',
}: IButtonProps) {
    return (
        <Link href={href} className={className}>
            <SvgIcon name={nameType} />
            <span className="">{text}</span>
        </Link>
    );
}
