import { getFormSettingsDefaultData } from '@/app/actions/getSettings';
import SettingsForm from './settingsForm';

export default async function Settings({ params }: { params: { id: string } }) {
    const settingsData = await getFormSettingsDefaultData(params.id);

    return <SettingsForm {...settingsData} {...params} />;
}
