import { getStrategyTableData } from '@/app/actions/getStrategy';
import SettingsTable from './settingsTable';

export default async function Table({ params }: { params: { id: string } }) {
    const strategy = await getStrategyTableData(params.id);

    return (
        <>
            <SettingsTable strategy={strategy} />
        </>
    );
}
