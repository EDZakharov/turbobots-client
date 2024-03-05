import {
    getFormSettingsDefaultData,
    getStrategyTableData,
} from '@/app/lib/actions';
import { revalidatePath } from 'next/cache';
import SettingsForm from './components/settingsForm';
import SettingsTable from './components/settingsTable';

export default async function Page({ params }: { params: { id: string } }) {
    const settingsData = getFormSettingsDefaultData(params.id);
    const tableData = getStrategyTableData(params.id);

    const [dataSettings, dataTable] = await Promise.all([
        settingsData,
        tableData,
    ]).finally(() => {
        revalidatePath(`/dashboard/bots/${params.id}/settings`);
    });

    return (
        <div className="grid grid-cols-3 grid-rows-2-custom ">
            <span className="text-xl m-5 block col-span-3 row-span-1">
                Bot {params.id} strategy
            </span>
            <div className="mx-3 col-span-1 row-span-1">
                <div className="">
                    <SettingsForm {...dataSettings} />
                </div>
            </div>
            <div className="h-full mr-3 col-span-2 row-span-1 overflow-y-scroll scrollbar-thin dark:scrollbar-thumb-gray-700 scrollbar-thumb-gray-300 scrollbar-track-transparent shadow-main dark:bg-secondary-color rounded-lg">
                <SettingsTable {...dataTable} />
            </div>
        </div>
    );
}
