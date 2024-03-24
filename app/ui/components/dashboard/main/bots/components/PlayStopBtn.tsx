'use client';

import { updateBotStatus } from '@/app/actions/bots';
import { Modal } from '@/app/ui/components/basic/modal';
import {
    ClockSvg,
    SpinSvg,
    WarningSvg,
} from '@/app/ui/components/svg-components/svg-components';
import { useEffect, useState } from 'react';
import RollDownNotification from './rollNotification';

const DEFAULT_SIZES = '20px';
const DEFAULT_FILL = 'white';

export function PlayStopBotBtn({
    size = DEFAULT_SIZES,
    color = DEFAULT_FILL,
    botId,
    status,
    expired,
}: {
    size?: string;
    color?: string;
    botId: string;
    status: boolean;
    expired?: boolean;
}) {
    const [botStatus, setStatus] = useState<boolean>(status);
    const [confirmAction, setConfirmAction] = useState<boolean>(false);
    const [rollDown, setRollDown] = useState<boolean>(false);

    const handleCLick = async () => {
        if (confirmAction) {
            try {
                await updateBotStatus(botId, !botStatus);
                if (rollDown) {
                    setRollDown(false);
                }
                setRollDown(true);

                setStatus(!botStatus);
                setConfirmAction(false);
                setTimeout(() => {
                    setRollDown(false);
                }, 3000);
            } catch (error) {}
        } else {
            setConfirmAction(true);
        }
    };

    useEffect(() => {
        if (status !== undefined) {
            setConfirmAction(false);
        }
    }, [status, rollDown]);

    if (status === undefined) {
        return <SpinSvg size="17px" />;
    }

    return (
        <div className="relative ">
            {confirmAction && (
                <Modal
                    setConfirmAction={setConfirmAction}
                    submitOnClick={handleCLick}
                    buttonSubmitText={botStatus ? 'Yes, stop' : 'Yes, start'}
                    buttonCancelText="Cancel"
                    modalHeaderText="Confirm bot action"
                    modalSpanText={`Are you sure you want to ${
                        botStatus ? 'stop' : 'start'
                    } the bot?`}
                    svgComponent={
                        <WarningSvg
                            className="dark:fill-gray-700 fill-gray-100"
                            size="40px"
                        />
                    }
                />
            )}
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
            ) : expired ? (
                <ClockSvg
                    className="animate-pulse animate-duration-[2000ms] dark:fill-yellow-400 fill-yellow-500"
                    size="17px"
                />
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
            {rollDown && (
                <RollDownNotification
                    status={!!botStatus}
                    className={
                        'fixed z-40 left-0 top-0 w-full animate-fade-down'
                    }
                    firstOptionText="Bot was started"
                    secondOptionText="Bot was stopped"
                />
            )}
        </div>
    );
}
