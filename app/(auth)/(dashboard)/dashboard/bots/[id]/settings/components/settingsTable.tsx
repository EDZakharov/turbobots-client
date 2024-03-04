'use client';

import { IBuyOrdersStepsToGrid } from '@/app/@types/types';
import { fakeData } from '@/app/lib/fakeData';
import { useEffect, useState } from 'react';

export default function SettingsTable() {
    const [jsonData, setJsonData] = useState<IBuyOrdersStepsToGrid | null>({});

    useEffect(() => {
        const { coin, message, status, ...rest } = fakeData;
        setJsonData(rest);
    }, []);

    if (!jsonData) {
        return <div>Loading...</div>;
    }

    const headerColsStyle =
        'text-center border-r dark:border-gray-700 border-gray-300 p-0';
    const colsStyle =
        'text-center border-r dark:border-gray-700 border-gray-300';

    return (
        <div className="h-full w-full  dark:bg-secondary-color rounded-lg shadow-main my-1 flex flex-col items-center text-[12px] ">
            <table className="h-full w-full ">
                <thead className="h-[100px] w-full rounded-lg  dark:bg-white/5 bg-secondary-color/5 ">
                    <tr>
                        <th className={`w-10 rounded-tl-lg ${headerColsStyle}`}>
                            Step
                        </th>
                        <th className={`${headerColsStyle}`}>
                            Order Deviation
                        </th>
                        <th className={`${headerColsStyle}`}>
                            Order Secondary Pair Volume
                        </th>
                        <th className={`${headerColsStyle}`}>
                            Order Base Pair Volume
                        </th>
                        <th className={`${headerColsStyle}`}>
                            Order Price To Step
                        </th>
                        <th className={`${headerColsStyle}`}>
                            Order Average Price
                        </th>
                        <th className={`${headerColsStyle}`}>
                            Order Target Price
                        </th>
                        <th className={`${headerColsStyle}`}>
                            Order Target Deviation
                        </th>
                        <th className={`${headerColsStyle}`}>
                            Summarized Order Secondary Pair Volume
                        </th>
                        <th
                            className={`rounded-tr-lg ${headerColsStyle} border-r-0 `}
                        >
                            Summarized Order Base Pair Volume
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(jsonData).map((key) => (
                        <tr
                            key={key}
                            className="dark:hover:bg-white/5 hover:bg-secondary-color/5"
                        >
                            <td className={`${colsStyle}`}>
                                {jsonData[key].step}
                            </td>
                            <td className={`${colsStyle}`}>
                                {jsonData[key].orderDeviation}
                            </td>
                            <td className={`${colsStyle}`}>
                                {jsonData[key].orderSecondaryPairVolume}
                            </td>
                            <td className={`${colsStyle}`}>
                                {jsonData[key].orderBasePairVolume}
                            </td>
                            <td className={`${colsStyle}`}>
                                {jsonData[key].orderPriceToStep}
                            </td>
                            <td className={`${colsStyle}`}>
                                {jsonData[key].orderAveragePrice}
                            </td>
                            <td className={`${colsStyle}`}>
                                {jsonData[key].orderTargetPrice}
                            </td>
                            <td className={`${colsStyle}`}>
                                {jsonData[key].orderTargetDeviation}
                            </td>
                            <td className={`${colsStyle}`}>
                                {
                                    jsonData[key]
                                        .summarizedOrderSecondaryPairVolume
                                }
                            </td>
                            <td className={`${colsStyle} border-r-0 `}>
                                {jsonData[key].summarizedOrderBasePairVolume}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
