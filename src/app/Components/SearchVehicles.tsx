'use client';

import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from 'lucide-react';
import ReactLoading from 'react-loading'

export function SearchVehicles() {
    const router = useRouter();
    const [description, setDescription] = useState('');
    const [brand, setBrand] = useState('');
    const [loading, setLoading] = useState(false);

    const [controlValue, setControlValue] = useState(0);
    const [formattedValue, setFormattedValue] = useState<string>('0');

    function handleSetControlValue(event: ChangeEvent<HTMLInputElement>) {

        let value = Number(event.currentTarget.value);

        value = Math.max(0, Math.min(100000, value));

        value = Math.round(value / 1000) * 1000;

        // Define o valor formatado como uma string
        setFormattedValue(value.toLocaleString('pt-BR', { maximumFractionDigits: 0 }));

        // Define o valor real como um número
        setControlValue(value);
    }


    async function handleSearchVehicles(description: string, brand: string, price: number) {
        setLoading(true);
        router.push(`/search/description=${description}&brand=${brand}&price=${price}`);
        setLoading(false);
    }

    useEffect(() => {
        const formatted = controlValue.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });
        setFormattedValue(formatted);
    }, [controlValue]);

    return (
        <form onSubmit={e => { e.preventDefault(), handleSearchVehicles(description, brand, controlValue) }} className="flex flex-col my-10 gap-20">
            <strong className="items-center justify-center text-4xl font-inter">Veículos</strong>
            <div className="max-[1024px]:flex-col flex flex-row items-center justify-around gap-20 w-full">
                <input className="p-1 w-80 text-black bg-transparent border-b-bottom border-b-red-600 focus:border-b-2 focus:outline-none focus:border-red-700"
                    type="text"
                    placeholder='Buscar veículos'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <select className="p-1 w-80 text-black bg-transparent border-b-bottom border-b-red-600 focus:border-b-2 focus:outline-none focus:border-red-700"
                    placeholder="Modelo"
                    value={brand}
                    onChange={e => setBrand(e.target.value)}
                >
                    <option value="" disabled hidden>Modelo</option>
                    <option value="fiat" >Fiat</option>
                    <option value="hyundai">Hyundai</option>
                    <option value="wolkswagen">Wolkswagen</option>
                    <option value="chevrolet">Chevrolet</option>
                    <option value="ford">Ford</option>
                </select>
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
                <button className="flex items-center w-full justify-center rounded-md lg:w-14 bg-red-800 hover:brightness-105 transition-all duration-100 p-3"
                    onClick={e => { e.preventDefault(), handleSearchVehicles(description, brand, controlValue) }}>
                    {
                        loading ? (<ReactLoading type="spin" className="text-gray-50" />) : (<Search className="text-gray-50" />)
                    }
                </button>
            </div>
        </form >
    )
}