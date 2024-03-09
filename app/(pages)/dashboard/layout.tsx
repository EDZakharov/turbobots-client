import Header from '@/app/ui/components/dashboard/header/header';
import Main from '@/app/ui/components/dashboard/main/main';
import SideBar from '@/app/ui/components/dashboard/sidebar/sideBar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: {
        template: '%s | LAVA TRADE',
        default: 'Dashboard',
    },
};

export default async function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header />
            <SideBar />
            <Main>{children}</Main>
        </>
    );
}
