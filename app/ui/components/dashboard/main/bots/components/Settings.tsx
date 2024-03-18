import { getFormSettingsDefaultData } from '@/app/actions/getSettings';
import SettingsForm from '@/app/ui/components/dashboard/main/bots/components/settingsForm';

export default async function Settings({ params }: { params: { id: string } }) {
    const settingsData = await getFormSettingsDefaultData(params.id);
    return (
        <div className="">
            <SettingsForm {...settingsData} {...params} />
        </div>
    );
}
