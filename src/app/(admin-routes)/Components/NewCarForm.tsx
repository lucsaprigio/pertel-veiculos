'use client'

import axios from 'axios';
import { ChangeEvent, SyntheticEvent, useState } from 'react';

interface Props {
    token: string;
}

export default function NewCarForm({ token }: Props) {
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [km, setKm] = useState('');
    const [year, setYear] = useState('');
    const [fuelType, setFueltype] = useState('');
    const [exchange, setExchange] = useState('');
    const [doors, setDoors] = useState('4');
    const [file, setFile] = useState('' || null);

    async function handleSubmit(event: SyntheticEvent) {
        try {
            event.preventDefault();

            const formData = new FormData();

            formData.append('description', description);
            formData.append('price', price);
            formData.append('km', km);
            formData.append('year', year);
            formData.append('fuelType', fuelType);
            formData.append('exchange', exchange);
            formData.append('doors', doors);
            formData.append('file', file);

            await axios.post(`${process.env.NEXT_PUBLIC_API_NODE}/new-car`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`,
                }
            });

            console.log(description, price, km, year, fuelType, doors, exchange, token, file);
        } catch (err) {
            console.log(err);
        }
    }

    function handleSetYear(value: string) {
        return value
            .replace(/\D/g, "")
            .replace(/(\d{4})(\d)/, "$1/$2")
            .replace(/(\d{4})(\d)/, "$1");
    }

    function handleSetKm(value: string) {
        const sanitizedValue = value.replace(/\D/g, "");

        if (sanitizedValue.length <= 3) {
            return sanitizedValue;
        }

        if (sanitizedValue.length === 4) {
            return `${sanitizedValue.slice(0, 1)}.${sanitizedValue.slice(1)}`;
        }

        if (sanitizedValue.length > 5) {
            return `${sanitizedValue.slice(0, -3)}.${sanitizedValue.slice(-3)}`;
        }

        return sanitizedValue;
    };

    function handleSetPrice(value: string) {
        return value.replace('', '')
    }


    return (
        <main className="flex flex-col items-center justify-center w-full h-full px-3 gap-6">
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6 my-10 bg-gray-50 py-10 md:px-32 rounded-lg">
                <div className="w-full gap-1 col-span-2">
                    <span className="text-red-950 font-bold">Descrição*</span>
                    <input className={`w-full h-12 p-2 bg-white border rounded-lg border-red-800 focus:outline-none focus:border-2 ${description && 'border-2'}`}
                        type="text"
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value.toUpperCase())}
                    />
                </div>
                <div className="flex flex-col w-full gap-1">
                    <span className="text-red-950 font-bold">Valor*</span>
                    <input className={`w-full md:w-96 h-12 p-2 bg-transparent border rounded-lg border-red-800 focus:outline-none focus:border-2 ${price && 'border-2'}`}
                        type="text"
                        placeholder="Valor"
                        value={price}
                        onChange={e => setPrice(e.target.value)}

                    />
                </div>
                <div className="flex flex-col w-full gap-1">
                    <span className="text-red-950 font-bold">Quilometragem*</span>
                    <input className={`w-full md:w-96 h-12 p-2 bg-transparent border rounded-lg border-red-800 focus:outline-none focus:border-2 ${km && 'border-2'}`}
                        type="text"
                        placeholder="Quilometragem"
                        value={km}
                        maxLength={6}
                        onChange={e => setKm(handleSetKm(e.target.value))}
                    />
                </div>
                <div className="flex flex-col w-full gap-1">
                    <span className="text-red-950 font-bold">Ano/Modelo*</span>
                    <input className={`w-full md:w-96 h-12 p-2 bg-transparent border rounded-lg border-red-800 focus:outline-none focus:border-2 ${year && 'border-2'}`}
                        type="text"
                        placeholder="Ano/Modelo"
                        value={year}
                        onChange={e => setYear(handleSetYear(e.target.value))}
                    />
                </div>
                <div className="flex flex-col w-full gap-1">
                    <span className="text-red-950 font-bold">Combustível*</span>
                    <input className={`w-full md:w-96 h-12 p-2 bg-transparent border rounded-lg border-red-800 focus:outline-none focus:border-2 ${fuelType && 'border-2'}`}
                        type="text"
                        placeholder="Tipo de Combustível"
                        value={fuelType}
                        onChange={e => setFueltype(e.target.value.toUpperCase())}
                    />
                </div>
                <div className="flex flex-col w-full gap-1">

                    <span className="text-red-950 font-bold">Câmbio*</span>
                    <select className={`w-full md:w-96 h-12 p-2 bg-transparent border rounded-lg border-red-800 focus:outline-none focus:border-2 ${exchange && 'border-2'}`} placeholder="Tipo de Combustível"
                        value={exchange}
                        onChange={e => setExchange(e.target.value)}
                    >
                        <option value="" disabled hidden>Câmbio</option>
                        <option value="automatico" >AUTOMÁTICO</option>
                        <option value="manual">MANUAL</option>
                    </select>
                </div>
                <div className="flex flex-col w-full gap-1">
                    <span className="text-red-950 font-bold">Portas*</span>
                    <input className={`w-full md:w-96 h-12 p-2 bg-transparent border rounded-lg border-red-800 focus:outline-none focus:border-2 ${doors && 'border-2'}`}
                        type="text"
                        placeholder="Portas"
                        value={doors}
                        onChange={e => setDoors(e.target.value)}
                    />
                </div>
                <div className="flex flex-col w-full gap-1 col-span-2">
                    <span className="text-red-950 font-bold">Selecione uma imagem (Imagem principal)*</span>
                    <input className="w-full h-12 p-2 bg-transparent border rounded-lg border-red-800 focus:outline-none focus:border-2"
                        type="file"
                        placeholder="Selecione a imagem principal"
                        onChange={e => setFile(e.target.files[0])}
                    />
                </div>

                <div className="flex flex-col w-full gap-1 col-span-2">
                    <button
                        className="text-gray-50 bg-red-800 hover:brightness-90 transition-all duration-100 rounded-lg p-6"
                        type='submit'>
                        Cadastrar
                    </button>
                </div>
            </form>
        </main>
    )
} 