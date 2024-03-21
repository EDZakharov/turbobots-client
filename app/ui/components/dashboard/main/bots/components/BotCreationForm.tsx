'use client';

import { createBot } from '@/app/actions/bots';
import { getPrice } from '@/app/actions/getSelectedCoinPrice';
import { generateBotStrategy } from '@/app/generateDCA';
import { IBuyOrdersStepsToGrid } from '@/app/lib/@types/types';
import { debounce } from '@/app/lib/utils/debounce';
import { Coin } from '@/app/ui/components/basic/coin';
import { FormSubmitButton } from '@/app/ui/components/basic/formSubmitButton';
import { useEffect, useState } from 'react';
import { useFormState } from 'react-dom';
import CustomInput from './customInput';
import SelectInput from './selectInput';
import SettingsTable from './settingsTable';

export default function BotCreationForm({ coins }: { coins: string[] }) {
    const [errorMessage, dispatch] = useFormState(createBot, undefined);
    const [selectedCoins, setSelectedCoins] = useState<string[]>([]);
    const [rsi, setRsi] = useState<boolean>(false);
    const [botName, setBotName] = useState<string>('');
    const [isFormValid, setIsFormValid] = useState<boolean>(false);
    const [strategy, setStrategy] = useState<IBuyOrdersStepsToGrid[]>([]);

    const handleCheckboxChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { value } = event.target;
        setSelectedCoins((prevSelectedCoins: any) => {
            if (prevSelectedCoins.includes(value)) {
                return prevSelectedCoins.filter((coin: any) => coin !== value);
            } else {
                return [...prevSelectedCoins, value];
            }
        });
    };

    const handleDebounceFormChange = async (e: any) => {
        const formData = new FormData(e.target.form);
        const formValues: Record<string, string> = {};
        formData.forEach((value, key) => {
            formValues[key] = value.toString();
        });

        const { insuranceOrderSteps, ...rest } = formValues;

        const firstSelectedCoinPrice = (await getPrice({
            coin: selectedCoins[0],
        })) as number | undefined;

        const strategy =
            firstSelectedCoinPrice &&
            generateBotStrategy(
                selectedCoins[0],
                formValues,
                firstSelectedCoinPrice,
                0.000000001
            );

        strategy && setStrategy(strategy);
    };

    const debouncedHandleFormChange = debounce(handleDebounceFormChange, 200);

    useEffect(() => {
        setIsFormValid(selectedCoins.length > 0);
    }, [selectedCoins, rsi, strategy]);

    return (
        <form
            className="p-5 gap-5 "
            action={dispatch}
            onChange={(e) => debouncedHandleFormChange(e)}
        >
            <div className="grid grid-cols-3 gap-5">
                <div className="flex flex-col gap-5 col-span-1">
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-wrap gap-5">
                            <span className="text-md w-max dark:text-gray-400">
                                Available coins:
                            </span>

                            <div className="flex flex-wrap flex-grow gap-2">
                                {coins &&
                                    coins.map((symbol) => (
                                        <FormInput
                                            key={symbol}
                                            type="checkbox"
                                            id={symbol}
                                            value={symbol}
                                            name={symbol}
                                            onChange={handleCheckboxChange}
                                            checked={selectedCoins.includes(
                                                symbol
                                            )}
                                        />
                                    ))}
                            </div>
                        </div>
                        <label
                            htmlFor="botName"
                            className="flex flex-col gap-2"
                        >
                            <span className="text-md w-max dark:text-gray-400">
                                Bot name:
                            </span>
                            <input
                                type="text"
                                id="1"
                                name="botName"
                                minLength={3}
                                maxLength={12}
                                placeholder="..."
                                className="max-w-44 z-10 rounded-lg border dark:border-gray-700 border-gray-300 bg-transparent placeholder:text-start p-2 dark:hover:bg-white/5 hover:bg-secondary-color/5 focus:outline-none text-[12px]"
                                required
                                value={botName}
                                onChange={(e) => setBotName(e.target.value)}
                            />
                        </label>
                        <label
                            htmlFor="botName"
                            className="flex flex-col gap-2"
                        >
                            <span className="text-md w-max dark:text-gray-400">
                                Signals:
                            </span>
                            <RSIInput
                                type="checkbox"
                                id="RSI"
                                name="rsiSelected"
                                value={true}
                                onChange={() => setRsi(!rsi)}
                            />
                        </label>

                        {rsi && (
                            <div className=" flex flex-col gap-5">
                                <span className="text-md w-max dark:text-gray-400">
                                    RSI options:
                                </span>
                                <div className="grid grid-cols-2 gap-5 w-full place-content-center">
                                    <div>
                                        <SelectInput
                                            id="targetProfitPercent"
                                            name="rsiTimeInterval"
                                            labelText="Time interval"
                                            options={[
                                                '1',
                                                '3',
                                                '5',
                                                '15',
                                                '30',
                                                '60',
                                                '120',
                                                '240',
                                                '720',
                                                '1D',
                                                '1W',
                                            ]}
                                        />
                                    </div>
                                    <div className="">
                                        <CustomInput
                                            id="candlesCount"
                                            name="rsiCandlesCount"
                                            labelText="Candles count"
                                            placeholder="candles"
                                            required={true}
                                            min={'1'}
                                            step={'1'}
                                            max={'50'}
                                            defaultState={'1'}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col gap-5 w-full">
                        <div className=" flex flex-col gap-5">
                            <span className="text-md w-max dark:text-gray-400">
                                Trade options:
                            </span>
                            <div className="grid grid-cols-2-custom gap-5">
                                <div>
                                    <CustomInput
                                        id="targetProfitPercent"
                                        name="targetProfitPercent"
                                        labelText="Target profit"
                                        placeholder="%"
                                        required={true}
                                        min={'0'}
                                        step={'0.1'}
                                        max={'10'}
                                        defaultState={'0'}
                                    />
                                </div>
                                <div>
                                    <CustomInput
                                        id="startOrderVolumeUSDT"
                                        name="startOrderVolumeUSDT"
                                        labelText="Start order volume"
                                        placeholder="USDT"
                                        required={true}
                                        min={'0'}
                                        step={'0.001'}
                                        max={'10000'}
                                        defaultState={'0'}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 w-full">
                            <span className="text-md w-max dark:text-gray-400">
                                Insurance orders:
                            </span>
                            <div className="grid grid-cols-2-custom relative gap-5 ">
                                <div>
                                    <CustomInput
                                        id="insuranceOrderVolumeUSDT"
                                        name="insuranceOrderVolumeUSDT"
                                        labelText="Volume"
                                        placeholder="USDT"
                                        required={true}
                                        min={'0'}
                                        step={'0.001'}
                                        max={'10000'}
                                        defaultState={'0'}
                                    />
                                </div>
                                <div>
                                    <CustomInput
                                        id="insuranceOrderSteps"
                                        name="insuranceOrderSteps"
                                        labelText="Steps count"
                                        placeholder="0-100"
                                        required={true}
                                        min={'0'}
                                        max={'100'}
                                        defaultState={'0'}
                                    />
                                </div>
                                <div>
                                    <CustomInput
                                        id="insuranceOrderVolumeMultiplier"
                                        name="insuranceOrderVolumeMultiplier"
                                        labelText="Volume multiplier"
                                        placeholder="0-10"
                                        required={true}
                                        min={'0'}
                                        step={'0.01'}
                                        max={'10'}
                                        defaultState={'0'}
                                    />
                                </div>
                                <div>
                                    <CustomInput
                                        id="insuranceOrderStepsMultiplier"
                                        name="insuranceOrderStepsMultiplier"
                                        labelText="Steps multiplier"
                                        placeholder="0-10"
                                        required={true}
                                        min={'0'}
                                        step={'0.01'}
                                        max={'10'}
                                        defaultState={'0'}
                                    />
                                </div>
                                <div>
                                    <CustomInput
                                        id="insuranceOrderPriceDeviationPercent"
                                        name="insuranceOrderPriceDeviationPercent"
                                        labelText="Price deviation"
                                        placeholder="%"
                                        required={true}
                                        min={'0'}
                                        step={'0.01'}
                                        max={'10'}
                                        defaultState={'0'}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <FormSubmitButton isValidForm={isFormValid} />
                        </div>
                    </div>
                    {errorMessage && (
                        <>
                            <p className="text-sm text-red-500">
                                {errorMessage}
                            </p>
                        </>
                    )}
                </div>
                <div className="col-span-2">
                    {selectedCoins.length === 0 ? (
                        <span className="text-md w-max dark:text-gray-400">
                            Wait for coin selection
                            <span className="animate-pulse"> ... </span>
                        </span>
                    ) : (
                        <span className="text-md w-max dark:text-gray-400">
                            Calculated strategy:
                        </span>
                    )}
                    <div
                        className={`${
                            selectedCoins.length > 0
                                ? 'opacity-1 max-h-[780px] overflow-auto scrollbar-thin'
                                : 'opacity-0 h-[10px] overflow-auto'
                        } transition-all`}
                    >
                        <SettingsTable
                            strategy={strategy}
                            coin={
                                selectedCoins.length > 0
                                    ? selectedCoins[0]
                                    : undefined
                            }
                        />
                    </div>
                </div>
            </div>
        </form>
    );
}

function FormInput({
    type,
    id,
    name,
    value,
    onChange,
    checked,
}: {
    type: string;
    id: string;
    name: string;
    value: string;
    className?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    checked?: boolean;
}) {
    return (
        <div className="min-w-28 flex gap-2 justify-between items-center">
            <Coin coinName={name} size="17px" />
            <span className="text-[8px] text-wrap break-words">{value}</span>
            <label
                className=" relative flex cursor-pointer items-center rounded-full"
                htmlFor={id}
            >
                <input
                    type={type}
                    id={id}
                    name={name}
                    value={value}
                    className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-md border dark:border-gray-700 border-gray-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-6 before:w-6 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-gray-600 before:opacity-0 before:transition-opacity dark:checked:border-gray-700 checked:bg-secondary-color/5 checked:before:bg-gray-400 dark:hover:bg-white/5 hover:bg-secondary-color/5 hover:before:opacity-10"
                    onChange={onChange}
                    checked={checked}
                />
                <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5 fill-gray-500 stroke-gray-500 dark:stroke-gray-300 dark:fill-gray-300 hover:fill-gray-700 dark:hover:fill-white"
                        viewBox="0 0 20 20"
                        stroke="currentColor"
                        strokeWidth="1"
                    >
                        <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </div>
            </label>
        </div>
    );
}

function RSIInput({
    type,
    id,
    name,
    value,
    onChange,
    checked,
}: {
    type: string;
    id: string;
    name: string;
    value: string | boolean;
    className?: string;
    onChange?: () => void;
    checked?: boolean;
}) {
    return (
        <label
            className="w-min h-min relative flex gap-2 text-md cursor-pointer rounded-full"
            htmlFor={id}
        >
            <span className="text-[12px] w-max dark:text-gray-400 select-none">
                RSI double crossover 30
            </span>
            <input
                type={type}
                id={id}
                name={name}
                value={value.toString()}
                className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-md border dark:border-gray-700 border-gray-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-6 before:w-6 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-gray-600 before:opacity-0 before:transition-opacity dark:checked:border-gray-700 checked:bg-secondary-color/5 checked:before:bg-gray-400 dark:hover:bg-white/5 hover:bg-secondary-color/5 hover:before:opacity-10"
                onChange={onChange}
                checked={checked}
            />
            <div className="pointer-events-none absolute top-0 right-0 -translate-x-[1.5px] text-white opacity-0 transition-opacity peer-checked:opacity-100">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5 fill-gray-500 stroke-gray-500 dark:stroke-gray-300 dark:fill-gray-300 hover:fill-gray-700 dark:hover:fill-white"
                    viewBox="0 0 20 20"
                    stroke="currentColor"
                    strokeWidth="1"
                >
                    <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                    ></path>
                </svg>
            </div>
        </label>
    );
}
