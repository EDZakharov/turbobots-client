export default function Main({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <main className=" col-span-9 row-span-8 row-start-1 row-end-10  overflow-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-300 bg-gray-50 dark:bg-gradient-to-b dark:from-slate-800 dark:via-slate-700 dark:to-slate-800 text-black dark:text-white">
                <div className="">{children}</div>
            </main>
        </>
    );
}
