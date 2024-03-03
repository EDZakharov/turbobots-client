'use client';

import CustomInput from './customInput';

export default function SettingsForm() {
    const inputsWrapperCln = 'w-full';

    const handleSubmite = (e: any) => {
        e.preventDefault();
    };

    return (
        <form
            className="dark:bg-secondary-color rounded-lg shadow-main m-1 flex flex-col items-center"
            onSubmit={handleSubmite}
        >
            <div className="flex flex-col gap-5 p-5">
                <div className=" flex flex-col gap-5">
                    <span className="text-xl dark:text-gray-400">
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
                                min={0}
                                max={100}
                            />
                        </div>
                        <div className={inputsWrapperCln}>
                            <CustomInput
                                id="startOrderVolumeUSDT"
                                name="startOrderVolumeUSDT"
                                labelText="Start order volume"
                                placeholder="USDT"
                                required={true}
                                min={0}
                                max={10000}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-5 ">
                    <span className="text-xl dark:text-gray-400">
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
                                min={0}
                                max={10000}
                            />
                        </div>
                        <div className={inputsWrapperCln}>
                            <CustomInput
                                id="insuranceOrderSteps"
                                name="insuranceOrderSteps"
                                labelText="Steps count"
                                placeholder="0-100"
                                required={true}
                                min={0}
                                max={100}
                            />
                        </div>
                        <div className={inputsWrapperCln}>
                            <CustomInput
                                id="insuranceOrderVolumeMultiplier"
                                name="insuranceOrderVolumeMultiplier"
                                labelText="Volume multiplier"
                                placeholder="0-10"
                                required={true}
                                min={0}
                                max={10}
                            />
                        </div>
                        <div className={inputsWrapperCln}>
                            <CustomInput
                                id="insuranceOrderStepsMultiplier"
                                name="insuranceOrderStepsMultiplier"
                                labelText="Steps multiplier"
                                placeholder="0-10"
                                required={true}
                                min={0}
                                max={10}
                            />
                        </div>
                        <div className={inputsWrapperCln}>
                            <CustomInput
                                id="insuranceOrderPriceDeviationPercent"
                                name="insuranceOrderPriceDeviationPercent"
                                labelText="Price deviation"
                                placeholder="%"
                                required={true}
                                min={0}
                                max={10}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <button className="w-[200px] my-10 border dark:border-gray-700 border-gray-300 p-2 rounded-md dark:hover:bg-white/5 hover:bg-secondary-color/5">
                Submit
            </button>
        </form>
    );
}
