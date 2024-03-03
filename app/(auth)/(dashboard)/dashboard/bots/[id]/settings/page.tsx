'use client';

import { getFormSettingsDefaultData } from '@/app/lib/actions';
import { SettingsSkeleton } from '@/app/ui/skeletons';
import { useEffect, useState } from 'react';
import SettingsForm from './components/settingsForm';

// export const runtime = 'edge';

export default function Page({ params }: { params: { id: string } }) {
    // revalidatePath(`/dashboard/bots/${params.id}/settings`);
    const [loading, setLoading] = useState(true);
    const [state, setState] = useState({
        targetProfitPercent: '',
        startOrderVolumeUSDT: '',
        insuranceOrderSteps: '',
        insuranceOrderPriceDeviationPercent: '',
        insuranceOrderStepsMultiplier: '',
        insuranceOrderVolumeUSDT: '',
        insuranceOrderVolumeMultiplier: '',
    });

    useEffect(() => {
        const getData = async () => {
            const data = await getFormSettingsDefaultData(params.id);
            setLoading(false);
            setState(data);
        };
        getData();
    }, []);

    return (
        <div className="flex flex-col">
            <span className="text-xl mx-5">Bot {params.id} settings</span>
            <div className="flex">
                <div className="flex-initial">
                    {loading ? (
                        <SettingsSkeleton />
                    ) : (
                        <SettingsForm {...state} />
                    )}
                </div>
                {/* <SettingsSkeleton /> */}
            </div>
        </div>
    );
}
