'use client';

import { formSettings } from '@/app/actions/setSettings';
import { IBotConfig } from '@/app/lib/@types/types';
import { SpinSvg } from '@/app/ui/components/svg-components/svg-components';
import { useRouter } from 'next/navigation';
import { useFormState, useFormStatus } from 'react-dom';
import CustomInput from './customInput';

export default function SettingsForm(data: IBotConfig) {
    const inputsWrapperCln = 'w-full';
    const [errorMessage, dispatch] = useFormState(formSettings, undefined);
    const router = useRouter();
    if (!data) {
        console.log(data);
        return new Error();
    }
    return (
        <form
            className="h-max dark:bg-secondary-color rounded-lg shadow-main m-1 flex flex-col items-center"
            action={dispatch}>
            <input
                className="absolute hidden"
                placeholder=""
                id="botId"
                name="botId"
                defaultValue={data.id}
            />
            <div className="flex flex-col gap-5 p-5">
                <div className=" flex flex-col gap-5">
                    <span className="text-md w-max dark:text-gray-400">
                        Strategy:
                    </span>
                    <div className="flex gap-5">
                        <div className={inputsWrapperCln}>
                            <CustomInput
                                id="targetProfitPercent"
                                name="targetProfitPercent"
                                labelText="Target profit"
                                placeholder="%"
                                required={true}
                                min={'0'}
                                step={'0.1'}
                                max={'10'}
                                defaultState={data.targetProfitPercent}
                            />
                        </div>
                        <div className={inputsWrapperCln}>
                            <CustomInput
                                id="startOrderVolumeUSDT"
                                name="startOrderVolumeUSDT"
                                labelText="Start order volume"
                                placeholder="USDT"
                                required={true}
                                min={'0'}
                                step={'0.001'}
                                max={'10000'}
                                defaultState={data.startOrderVolumeUSDT}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-5 ">
                    <span className="text-md w-max dark:text-gray-400">
                        Insurance orders:
                    </span>
                    <div className="grid grid-cols-2-custom relative gap-5">
                        <div className={inputsWrapperCln}>
                            <CustomInput
                                id="insuranceOrderVolumeUSDT"
                                name="insuranceOrderVolumeUSDT"
                                labelText="Volume"
                                placeholder="USDT"
                                required={true}
                                min={'0'}
                                step={'0.001'}
                                max={'10000'}
                                defaultState={data.insuranceOrderVolumeUSDT}
                            />
                        </div>
                        <div className={inputsWrapperCln}>
                            <CustomInput
                                id="insuranceOrderSteps"
                                name="insuranceOrderSteps"
                                labelText="Steps count"
                                placeholder="0-100"
                                required={true}
                                min={'0'}
                                max={'100'}
                                defaultState={data.insuranceOrderSteps}
                            />
                        </div>
                        <div className={inputsWrapperCln}>
                            <CustomInput
                                id="insuranceOrderVolumeMultiplier"
                                name="insuranceOrderVolumeMultiplier"
                                labelText="Volume multiplier"
                                placeholder="0-10"
                                required={true}
                                min={'0'}
                                step={'0.01'}
                                max={'10'}
                                defaultState={
                                    data.insuranceOrderVolumeMultiplier
                                }
                            />
                        </div>
                        <div className={inputsWrapperCln}>
                            <CustomInput
                                id="insuranceOrderStepsMultiplier"
                                name="insuranceOrderStepsMultiplier"
                                labelText="Steps multiplier"
                                placeholder="0-10"
                                required={true}
                                min={'0'}
                                step={'0.01'}
                                max={'10'}
                                defaultState={
                                    data.insuranceOrderStepsMultiplier
                                }
                            />
                        </div>
                        <div className={inputsWrapperCln}>
                            <CustomInput
                                id="insuranceOrderPriceDeviationPercent"
                                name="insuranceOrderPriceDeviationPercent"
                                labelText="Price deviation"
                                placeholder="%"
                                required={true}
                                min={'0'}
                                step={'0.01'}
                                max={'10'}
                                defaultState={
                                    data.insuranceOrderPriceDeviationPercent
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
            {errorMessage && (
                <>
                    <p className="text-sm text-red-500">{errorMessage}</p>
                </>
            )}
            <LoginButton />
        </form>
    );
}

function LoginButton() {
    const { pending } = useFormStatus();
    return (
        <button
            className="w-[200px] my-8 border dark:border-gray-700 border-gray-300 p-2 rounded-md dark:hover:bg-white/5 hover:bg-secondary-color/5 flex flex-col items-center disabled:cursor-not-allowed"
            disabled={pending}>
            {pending ? (
                <span className="animate-pulse">
                    <SpinSvg size="24" />
                </span>
            ) : (
                <span className="">Save</span>
            )}
        </button>
    );
}
