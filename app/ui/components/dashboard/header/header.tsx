import LinkButton from '@/app/ui/components/basic/linkButton';
import ThemeChanger from '@/app/ui/components/diff/themeChanger';
import { LogoSvgAnimated } from '../../svg-components/svg-components';

export default async function Header() {
    return (
        <header className="relative col-span-10 row-end-1 p-1  bg-gradient-to-r from-gray-100 to-gray-300 dark:bg-gradient-to-l dark:from-slate-700 dark:via-slate-600 dark:to-slate-800 w-full ">
            <div className="absolute z-0 top-0 left-0 shadow-stiglitz w-full h-full"></div>
            <div className="w-full h-full flex items-center justify-between text-xs">
                <div className="flex gap-3 pl-5 items-center">
                    <LogoSvgAnimated />
                    <span className="text-base animate-fade-down animate-duration-2000">
                        LAVA TRADE
                    </span>
                </div>
                <div className="flex items-center gap-2 mr-2 ">
                    <LinkButton
                        href="/"
                        tittle="Logout"
                        buttonName="Logout"
                        className="z-10 flex items-center gap-2 text-[10px] px-2 py-[2px] hover:cursor-pointer border rounded-md hover:bg-gray-400/20 dark:hover:bg-white/10 dark:hover:border-sidebar-dark-color dark:hover:shadow-xl transition-all"
                    />
                    <LinkButton
                        href="/"
                        tittle="User"
                        buttonName="Logout"
                        className="z-10 flex items-center gap-2 text-[10px] px-2 py-[2px] hover:cursor-pointer border rounded-md hover:bg-gray-400/20 dark:hover:bg-white/10 dark:hover:border-sidebar-dark-color dark:hover:shadow-xl transition-all"
                    />
                    <ThemeChanger />
                </div>
            </div>
        </header>
    );
}
