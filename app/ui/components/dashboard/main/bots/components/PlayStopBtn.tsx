'use client';

import { getBotFrozenStatus, updateBotStatus } from '@/app/actions/bots';
import { SpinSvg } from '@/app/ui/components/svg-components/svg-components';
import { useEffect, useState } from 'react';

const DEFAULT_SIZES = '20px';
const DEFAULT_FILL = 'white';

export function PlayStopBotBtn({
    size = DEFAULT_SIZES,
    color = DEFAULT_FILL,
    botId,
}: {
    size?: string;
    color?: string;
    botId: string;
}) {
    const [status, setStatus] = useState<boolean | undefined>(undefined);

    const handleCLick = async () => {
        try {
            await updateBotStatus(botId, !status);
            setStatus(!status);
        } catch (error) {}
    };

    useEffect(() => {
        const getStatus = async () => {
            const newStatus = await getBotFrozenStatus(botId);
            setStatus(newStatus);
        };
        getStatus();
    }, [status]);

    if (status === undefined) {
        return <SpinSvg size="17px" />;
    }

    return (
        <>
            {status ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={size}
                    height={size}
                    fill={color}
                    onClick={handleCLick}
                    className="fill-red-400 dark:fill-red-300 hover:fill-red-500 dark:hover:fill-red-400 transition-all cursor-pointer"
                    viewBox="0 0 16 16"
                >
                    <path d="M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5" />
                </svg>
            ) : (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={size}
                    height={size}
                    fill={color}
                    onClick={handleCLick}
                    className="fill-green-400 dark:fill-green-300 hover:fill-green-500 dark:hover:fill-green-400 transition-all cursor-pointer"
                    viewBox="0 0 16 16"
                >
                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                </svg>
            )}
        </>
    );
}
