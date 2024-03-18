'use client';

import { useState } from 'react';
import Button from '../../basic/button';
import ExchangeLogo from '../../diff/exchangeLogo';

interface IExchange {
    name?: string;
    formattedNumber: string;
    availablePairs?: number;
}

export default function Exchange({
    name,
    formattedNumber,
    availablePairs,
}: IExchange) {
    const [apiSideBar, setApiSideBar] = useState<boolean>(false);

    const handleClick = () => {
        setApiSideBar(!apiSideBar);
    };

    const handleOffClick = () => {
        if (apiSideBar) {
            setApiSideBar(!apiSideBar);
        }
    };

    return (
        <div className="grid grid-cols-4 my-3 place-items-center">
            <ExchangeLogo name={name} width="50px" />
            <div>{formattedNumber}</div>
            <div>{availablePairs}</div>

            <div>
                <div className=" flex gap-2 ">
                    <Button tittle="Exchange" />
                    <Button tittle="Api keys" onClick={handleClick} />
                </div>
            </div>
            {apiSideBar && (
                <div className="absolute top-0 right-0 z-30 animate-fade-left animate-duration-75">
                    <div className="w-[200px] h-screen bg-gray-800 ">
                        <span onClick={handleOffClick}>Close</span>
                        <span>1</span>
                    </div>
                </div>
            )}
        </div>
    );
}
