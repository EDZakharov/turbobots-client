'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { SvgIcon } from './svgIcon';

interface IHeaderButtonProps {
    href?: string;
    className?: string;
    tittle: string;
    buttonName?: string;
    svgColor?: string;
    textColor?: string;
}

const defaultStyle =
    'z-10 hover:cursor-pointer border rounded-md hover:bg-gray-400/20 dark:hover:bg-white/10 flex w-full items-center justify-between ';

export default function Button({
    href = '/',
    className = defaultStyle,
    tittle = 'Button',
    buttonName,
}: IHeaderButtonProps) {
    // const { logout } = useAuth();
    const router = useRouter();
    const handleClick = (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (tittle === 'Logout') {
            // logout();
        }
        router.push(href);
    };

    return (
        <Link href={href} className={className} onClick={handleClick}>
            <SvgIcon name={buttonName} />
            <span className="">{tittle}</span>
        </Link>
    );
}
