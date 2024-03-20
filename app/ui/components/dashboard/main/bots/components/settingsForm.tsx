'use client';

import { formSettings } from '@/app/actions/setSettings';
import { IBotConfig } from '@/app/lib/@types/types';
import { FormSubmitButton } from '@/app/ui/components/basic/formSubmitButton';
import { useFormState } from 'react-dom';
import CustomInput from './customInput';

export default function SettingsForm(data: IBotConfig) {
    const inputsWrapperCln = 'w-full';
    const [errorMessage, dispatch] = useFormState(formSettings, undefined);

    return (
        <form
            className="dark:bg-secondary-color rounded-lg shadow-main m-1 flex flex-col items-center"
            action={dispatch}
        >
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
            <FormSubmitButton />
        </form>
    );
}
