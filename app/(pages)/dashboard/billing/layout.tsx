import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Billing',
};

export default async function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div className="flex flex-col">{children}</div>;
}
