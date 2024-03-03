'use client';

import { ICustomInput } from '@/app/@types/types';
import { ChangeEvent, useState } from 'react';

export default function CustomInput({
    placeholder,
    id,
    name,
    required,
    labelText,
    max,
    min,
}: ICustomInput) {
    const [contactInfo, setContactInfo] = useState<string>('');

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        const numericValue = inputValue.replace(/\D/g, '');
        setContactInfo(numericValue);
    };

    return (
        <>
            <label
                className="block dark:text-gray-400 text-sm overflow-hidden"
                htmlFor={name}
            >
                {labelText}
            </label>
            <div className="relative w-auto h-auto">
                <input
                    type="text"
                    className="z-10 w-full rounded-lg border dark:border-gray-700 border-gray-300 bg-transparent placeholder:text-end p-2 dark:hover:bg-white/5 hover:bg-secondary-color/5 focus:outline-none"
                    value={contactInfo}
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
                    onChange={handleInputChange}
                />
                <span className="z-0 absolute overflow-hidden right-2 top-3 dark:text-gray-500 text-gray-800 text-sm">
                    {placeholder}
                </span>
            </div>
        </>
    );
}
