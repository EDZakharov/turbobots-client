import LinkButton from '@/app/ui/components/basic/linkButton';

export default function SideBar() {
    const menu = [
        // { id: 1, tittle: 'Home', link: '/' },
        { id: 1, tittle: 'Dashboard', link: '/dashboard' },
        { id: 2, tittle: 'Bots', link: '/dashboard/bots' },
        { id: 3, tittle: 'Account', link: '/dashboard/account' },
        { id: 4, tittle: 'Shop', link: '/dashboard/shop' },
        { id: 5, tittle: 'Logout', link: '/' },
        { id: 6, tittle: 'Login', link: '/login' },
    ];

    return (
        <div className="row-span-8 row-start-1 row-end-10 pt-4 pr-4 overflow-auto scrollbar-none bg-gray-50 dark:bg-sidebar-color-dark ">
            <div className="">
                <aside className="">
                    <nav className="w-full">
                        <ul className="flex flex-col gap-2">
                            {menu.map((el) => (
                                <li
                                    key={el.id}
                                    className=" hover:bg-gray-200 dark:hover:bg-white/15 hover:text-black  dark:hover:text-white transition-all rounded-r-xl px-7 text-sm ">
                                    <LinkButton
                                        href={el.link}
                                        svgColor={'text-white'}
                                        tittle={el.tittle}
                                        buttonName={el.tittle}
                                        textColor="white"
                                        className="flex items-center gap-4 h-8"
                                    />
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>
            </div>
        </div>
    );
}
