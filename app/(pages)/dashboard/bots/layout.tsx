import { Metadata } from 'next';

export const metadata: Metadata = {
    title: {
        template: '%s | LAVA TRADE',
        default: 'Bots',
    },
};

export default function layout({ children }: { children: React.ReactNode }) {
    return <div className="">{children}</div>;
}
