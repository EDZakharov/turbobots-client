import { IBuyOrdersStepsToGrid } from '@/app/@types/types';
import { memo } from 'react';

// Компонент строки таблицы
export const TableRow = memo(
    ({ rowData }: { rowData: IBuyOrdersStepsToGrid }) => {
        const colsStyle =
            'text-center dark:border-gray-700 border-gray-300 border-r my-2 overflow-hidden px-2';
        return (
            <div className=" dark:hover:bg-white/5 hover:bg-secondary-color/5 grid grid-cols-10 ">
                <div className={`${colsStyle}`}>
                    <div>{rowData.step}</div>
                </div>
                <div className={`${colsStyle}`}>
                    <div>{rowData.orderDeviation}</div>
                </div>
                <div className={`${colsStyle}`}>
                    <div>{rowData.orderSecondaryPairVolume}</div>
                </div>
                <div className={`${colsStyle}`}>
                    <div>{rowData.orderBasePairVolume}</div>
                </div>
                <div className={`${colsStyle}`}>
                    <div>{rowData.orderPriceToStep}</div>
                </div>
                <div className={`${colsStyle}`}>
                    <div>{rowData.orderAveragePrice}</div>
                </div>
                <div className={`${colsStyle}`}>
                    <div>{rowData.orderTargetPrice}</div>
                </div>
                <div className={`${colsStyle}`}>
                    <div>{rowData.orderTargetDeviation}</div>
                </div>
                <div className={`${colsStyle}`}>
                    <div>{rowData.summarizedOrderSecondaryPairVolume}</div>
                </div>
                <div className={`${colsStyle}`}>
                    <div>{rowData.summarizedOrderBasePairVolume}</div>
                </div>
            </div>
        );
    }
);
