'use client';

import { createBot } from '@/app/actions/bots';
import { Coin } from '@/app/ui/components/basic/coin';
import { FormSubmitButton } from '@/app/ui/components/basic/formSubmitButton';
import { useFormState } from 'react-dom';

export default function BotCreationForm({ coins }: { coins: string[] }) {
    const [errorMessage, dispatch] = useFormState(createBot, undefined);

    return (
        <form
            className="h-max w-full flex flex-col items-center "
            action={dispatch}
        >
            <div className="flex flex-col ">
                <div className="flex flex-col gap-5 w-full ">
                    <div className="flex flex-wrap gap-y-2 gap-x-4 ">
                        {coins &&
                            coins.map((symbol) => (
                                <FormInput
                                    key={symbol}
                                    type="checkbox"
                                    id={symbol}
                                    value={symbol}
                                    name={symbol}
                                    className=" transition-all cursor-pointer"
                                />
                            ))}
                    </div>
                    <label htmlFor="botName">Creation bot name</label>
                    <input
                        type="text"
                        id="1"
                        name="botName"
                        placeholder="Enter bot name"
                        minLength={3}
                        maxLength={12}
                    />
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

function FormInput({
    type,
    id,
    name,
    value,
    className,
}: {
    type: string;
    id: string;
    name: string;
    value: string;
    className?: string;
}) {
    return (
        <div className="min-w-24 flex gap-2 justify-between items-center">
            <Coin coinName={name} size="17px" />
            <span className="text-[8px] text-wrap break-words">{value}</span>
            <input
                type={type}
                id={id}
                name={name}
                value={value}
                className={className}
            />
        </div>
    );
}
