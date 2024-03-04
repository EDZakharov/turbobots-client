import { SettingsSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';

export default async function SettingsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <Suspense fallback={<SettingsSkeleton />}>{children}</Suspense>;
}
