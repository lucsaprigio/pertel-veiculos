'use client'

import { PlusCircle } from 'lucide-react';
export default function RegisterCar() {
    return (
        <main className="flex flex-col items-center justify-center w-full h-full px-3 gap-6">
            <div className="w-full flex items-center justify-center my-10">
                <h2 className="flex flex-row items-center justify-center gap-6 text-4xl font-bold"><PlusCircle size={34} /> Cadastrar veículo</h2>
            </div>

            <form className="flex flex-col gap-6 my-10">
                <input className="w-full md:w-96 h-12 p-2 bg-transparent border rounded-lg border-red-800 focus:outline-none focus:border-b-2"
                    type="text"
                    placeholder="Marca"
                />
                <input className="w-full md:w-96 h-12 p-2 bg-transparent border rounded-lg border-red-800 focus:outline-none focus:border-b-2"
                    type="text"
                    placeholder="Descrição"
                />
                <input className="w-full md:w-96 h-12 p-2 bg-transparent border rounded-lg border-red-800 focus:outline-none focus:border-b-2"
                    type="text"
                    placeholder="Valor"
                />
                <input className="w-full md:w-96 h-12 p-2 bg-transparent border rounded-lg border-red-800 focus:outline-none focus:border-b-2"
                    type="number"
                    placeholder="Quilometragem"
                />
                <input className="w-full md:w-96 h-12 p-2 bg-transparent border rounded-lg border-red-800 focus:outline-none focus:border-b-2"
                    type="text"
                    placeholder="Ano/Modelo"
                />
                <input className="w-full md:w-96 h-12 p-2 bg-transparent border rounded-lg border-red-800 focus:outline-none focus:border-b-2"
                    type="text"
                    placeholder="Tipo de Combustível"
                />
                <input className="w-full md:w-96 h-12 p-2 bg-transparent border rounded-lg border-red-800 focus:outline-none focus:border-b-2"
                    type="text"
                    placeholder="Portas"
                />
                <input className="w-full md:w-96 h-12 p-2 bg-transparent border rounded-lg border-red-800 focus:outline-none focus:border-b-2"
                    type="file"
                    placeholder="Selecione a imagem principal"
                />
            </form>
        </main>
    )
} 