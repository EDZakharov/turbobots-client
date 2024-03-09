import { getFormSettingsDefaultData } from '@/app/actions/getSettings';
import { getStrategyTableData } from '@/app/actions/getStrategy';
import SettingsForm from '@/app/ui/components/dashboard/main/bots/components/settingsForm';
import SettingsTable from '@/app/ui/components/dashboard/main/bots/components/settingsTable';

export default async function Page({ params }: { params: { id: string } }) {
    const settingsData = getFormSettingsDefaultData(params.id);
    const tableData = getStrategyTableData(params.id);

    const [dataSettings, dataTable] = await Promise.all([
        settingsData,
        tableData,
    ]);

    // console.log('settingsData: ', settingsData);

    return (
        <div className="grid grid-cols-3 grid-rows-2-custom ">
            <span className="text-xl m-5 block col-span-3 row-span-1">
                Bot {params.id} strategy
            </span>
            <div className="mx-3 col-span-1 row-span-1">
                <div className="">
                    <SettingsForm {...dataSettings} {...params} />
                </div>
            </div>
            <div className="h-full mr-3 col-span-2 row-span-1 overflow-y-scroll scrollbar-thin dark:scrollbar-thumb-gray-700 scrollbar-thumb-gray-300 scrollbar-track-transparent shadow-main dark:bg-secondary-color rounded-lg">
                <SettingsTable {...dataTable} />
            </div>
        </div>
    );
}
