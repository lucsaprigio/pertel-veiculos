'use client';
import { ChangeEvent, useState } from "react";

export function InputRange() {
    const [controlValue, setControlValue] = useState(20000);

    function handleSetControlValue(event: ChangeEvent<HTMLInputElement>) {

        let value = Number(event.currentTarget.value);

        value = Math.max(0, Math.min(100000, value));

        value = Math.round(value / 1000) * 1000;

        setControlValue(value)


    }

    return (
        <div className="flex flex-col gap-2 items-center justify-center">
            <label>R${controlValue.toFixed(2)}</label>
            <input className="p-1 w-80 accent-red-700"
                type="range"
                placeholder='Buscar veículos'
                value={controlValue}
                onChange={handleSetControlValue}
                min="0"
                max="100000"
                step="1000"
            />
        </div>
    )
}