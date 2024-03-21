/* eslint-disable react/display-name */
import { IBuyOrdersStepsToGrid } from '@/app/lib/@types/types';
import { memo } from 'react';

// Компонент строки таблицы
export const TableRow = memo(
    ({ rowData }: { rowData: IBuyOrdersStepsToGrid }) => {
        const colsStyle =
            'text-center dark:border-gray-700 border-gray-300 border-x my-2 overflow-hidden px-2';

        // Проходим по каждому элементу и заменяем NaN на 0
        const sanitizedRowData = Object.fromEntries(
            Object.entries(rowData).map(([key, value]) => [
                key,
                isNaN(value) ? 0 : value,
            ])
        );

        return (
            <div className=" dark:hover:bg-white/5 hover:bg-secondary-color/5 grid grid-cols-10 ">
                {Object.entries(sanitizedRowData).map(([key, value]) => (
                    <div key={key} className={`${colsStyle}`}>
                        <div className="dark:text-gray-200">{value}</div>
                    </div>
                ))}
            </div>
        );
    }
);
