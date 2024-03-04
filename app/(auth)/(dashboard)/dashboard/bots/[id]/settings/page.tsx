import { getFormSettingsDefaultData } from '@/app/lib/actions';
import SettingsForm from './components/settingsForm';
import SettingsTable from './components/settingsTable';

export default async function Page({ params }: { params: { id: string } }) {
    const data = await getFormSettingsDefaultData(params.id);

    return (
        <div className="flex flex-col">
            <span className="text-xl m-5 block">Bot {params.id} strategy</span>
            <div className="flex gap-5 mr-5">
                <div className="flex-initial">
                    <SettingsForm {...data} />
                </div>
                <div className="flex-1">
                    <SettingsTable />
                </div>
            </div>
        </div>
    );
}
