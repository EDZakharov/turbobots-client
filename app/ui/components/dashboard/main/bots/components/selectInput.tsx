'use client';
import React, { useState } from 'react';

export default function SelectInput({
    id,
    name,
    labelText,
    options,
}: {
    id: string;
    name: string;
    labelText: string;
    options: string[];
}) {
    const [optionsValue, setOptionsValue] = useState<string>('1');

    const handleOptionChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setOptionsValue(event.target.value);
    };

    return (
        <div className="">
            <label
                className="block dark:text-gray-400 text-[12px] overflow-hidden"
                htmlFor={name}
            >
                {labelText}
            </label>
            <select
                id={id}
                name={name}
                className="z-10 w-full rounded-lg border dark:border-gray-700 border-gray-300 bg-transparent placeholder:text-end p-2 dark:hover:bg-white/5 text-[12px] hover:bg-secondary-color/5 focus:outline-none"
                value={optionsValue}
                onChange={handleOptionChange}
            >
                {options.map((option, index) => (
                    <option
                        key={index}
                        value={option}
                        className="dark:bg-gray-800/80 dark:text-gray-200"
                    >
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}
