'use client';
import { ChangeEvent, useEffect, useState } from "react";

export function InputRange() {
    const [controlValue, setControlValue] = useState(20000);
    const [formattedValue, setFormattedValue] = useState<string>('20,000');

    function handleSetControlValue(event: ChangeEvent<HTMLInputElement>) {

        let value = Number(event.currentTarget.value);

        value = Math.max(0, Math.min(100000, value));

        value = Math.round(value / 1000) * 1000;

        // Define o valor formatado como uma string
        setFormattedValue(value.toLocaleString('pt-BR', { maximumFractionDigits: 0 }));

        // Define o valor real como um número
        setControlValue(value);
    }

    useEffect(() => {
        const formatted = controlValue.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });
        setFormattedValue(formatted);
    }, [controlValue]);

    return (
        <div className="flex flex-col gap-2 items-center justify-center">
            <label>{formattedValue}</label>
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