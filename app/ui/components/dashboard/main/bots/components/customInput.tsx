'use client';

import { ICustomInput } from '@/app/lib/@types/types';
import { ChangeEvent, useEffect, useState } from 'react';

export default function CustomInput({
    placeholder,
    id,
    name,
    required,
    labelText,
    max,
    min,
    step,
    defaultState,
}: ICustomInput) {
    const [contactInfo, setContactInfo] = useState<string>(defaultState);
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        const sanitizedValue = inputValue.replace(/[^\d.]/g, '');
        const countDots = sanitizedValue.split('.').length - 1;
        const hasMultipleDots = countDots > 1;

        let numericValue;
        if (hasMultipleDots) {
            const parts = sanitizedValue.split('.');
            numericValue = parts[0] + '.' + parts.slice(1, -1).join('');
        } else {
            numericValue = sanitizedValue;
        }

        setContactInfo(numericValue);
    };
    useEffect(() => {
        setContactInfo(defaultState);
    }, [defaultState]);

    return (
        <>
            <label
                className="block dark:text-gray-400 text-[12px] overflow-hidden"
                htmlFor={name}
            >
                {labelText}
            </label>
            <div className="relative w-auto h-auto">
                <input
                    type="text"
                    className="z-10 w-full rounded-lg border dark:border-gray-700 border-gray-300 bg-transparent placeholder:text-end p-2 dark:hover:bg-white/5 hover:bg-secondary-color/5 focus:outline-none"
                    value={contactInfo}
                    min={min}
                    step={step}
                    max={max}
                    onChange={handleInputChange}
                />
                <input
                    id={id}
                    type="range"
                    name={name}
                    required={required}
                    className="w-full bg-transparent cursor-pointer appearance-none disabled:opacity-50 disabled:pointer-events-none focus:outline-none
                    range dark:hover:bg-white/5 hover:bg-secondary-color/5 rounded-xl"
                    value={contactInfo}
                    min={min}
                    max={max}
                    step={step}
                    onChange={handleInputChange}
                />
                <span className="z-0 absolute overflow-hidden right-2 top-3 dark:text-gray-500 text-gray-800 text-sm">
                    {placeholder}
                </span>
            </div>
        </>
    );
}
