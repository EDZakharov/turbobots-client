import { ITableData } from '@/app/@types/types';
import { TableHead } from './tableHead';
import { TableRow } from './tableRow';

export default function SettingsTable(data: ITableData) {
    return (
        <div className="w-full my-1 flex flex-col items-center md:text-[6px] lg:text-[8px] xl:text-[10px] 2xl:text-[12px] overflow-hidden p-2">
            <TableHead />
            <div className="w-full">
                {data.strategy.map((element) => (
                    <div key={element.step}>
                        <hr className="dark:border-gray-700 border-gray-300" />
                        <TableRow rowData={element} />
                    </div>
                ))}
            </div>
        </div>
    );
}
