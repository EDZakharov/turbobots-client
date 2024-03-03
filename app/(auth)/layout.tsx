import { AuthProvider } from './providers';

export default async function WithAuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <AuthProvider>{children}</AuthProvider>;
    // return <div>{children}</div>;
}
