import { Cars } from "@/app/DTO/ICars";
import { format } from 'date-fns';
import { Edit } from 'lucide-react';
import Link from "next/link";
import ReloadButton from "../Components/ReloadButton";
import CarsPainel from "../Components/CarsPainel";

async function getCars(): Promise<Cars> {
    try {
        const response = await fetch(`${process.env.NEXT_API_NODE}/all-cars`, { cache: 'no-store' });

        return response.json();
    } catch (err) {
        console.log(err);
    }
}

export default async function Painel() {
    const cars = await getCars();

    return (
        <main className="flex flex-col items-center justify-center w-full h-full px-3">
            <section className="flex flex-col gap-2 py-6 h-20">
                <h2 className="text-2xl font-bold">Painel</h2>
            </section>
            <section className="flex flex-col items-center">
                <span className="font-bold text-lg text-center mb-4">Últimas atualizações</span>
                <ReloadButton />
                <div className="w-full grid grid-cols-5 gap-2">
                    {
                        cars.cars.length > 0 ? (cars.cars.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
                            .slice(0, 5)
                            .map(car => (
                                <div key={car.id} className="flex flex-row w-full gap-6 bg-gray-50 rounded-lg px-6 py-1 border-b-8 border-red-800">
                                    <div className="flex items-center justify-center w-28">
                                        <img className="object-contain rounded-lg" src={`${process.env.NEXT_S3_URL}/${car.source}`} alt="Logo" />
                                    </div>
                                    <ul className="flex flex-col gap-2 items-start w-full">
                                        <li className="text-red-800 text-lg uppercase">{car.description}</li>
                                        <li className="text-red-800 text-lg">{car.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</li>
                                        <li className="text-red-800 text-lg">{format(new Date(car.updated_at), 'dd/MM/yyyy HH:mm')}</li>
                                    </ul>
                                </div>
                            ))) : (<h2 className="flex items-center justify-center text-lg text-gray-300 col-span-5">Nenhuma atualização encontrada</h2>)
                    }
                </div>
            </section>
            <section className="w-full h-full m-10 bg-gray-50 rounded-lg p-4">
                <div className="flex flex-col items-start justify-center px-10 gap-6">
                    <ul className="grid grid-cols-6 md:flex-row gap-20 items-center justify-center">
                        <li></li>
                        <li className="uppercase w-full text-red-950 md:text-1xl font-semibold">Descrição</li>
                        <li className="text-red-950 md:text-1xl font-semibold"> Valor</li>
                        <li className="text-red-950 md:text-1xl font-semibold">Ano/Modelo</li>
                        <li className="text-red-950 md:text-1xl font-semibold">Criação</li>
                        <li className="text-red-950 md:text-1xl font-semibold">Última atualização</li>
                    </ul>
                    <CarsPainel />
                </div>
            </section>
        </main>
    )
}