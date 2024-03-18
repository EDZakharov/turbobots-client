'use client';

import { createBot } from '@/app/actions/bots';
import { FormSubmitButton } from '@/app/ui/components/basic/formSubmitButton';
import { useFormState } from 'react-dom';

export default function BotCreationForm({ coins }: { coins: string[] }) {
    const [errorMessage, dispatch] = useFormState(createBot, undefined);

    return (
        <form
            className="h-max  m-1 flex flex-col items-center"
            action={dispatch}
        >
            <div className="flex flex-col p-5">
                <div className=" flex flex-col gap-5 ">
                    <div className="w-full grid grid-cols-2 gap-x-5">
                        {coins &&
                            coins.map((symbol) => (
                                <FormInput
                                    key={symbol}
                                    type="checkbox"
                                    id={symbol}
                                    value={symbol}
                                    name={symbol}
                                />
                            ))}
                    </div>
                    <label htmlFor="botName">Creation bot name</label>
                    <input
                        type="text"
                        id="1"
                        name="botName"
                        placeholder="Enter bot name"
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
        <div className="flex gap-5 justify-between">
            <label htmlFor={name}>{value}</label>
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
