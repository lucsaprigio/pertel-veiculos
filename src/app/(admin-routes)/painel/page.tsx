import { Cars } from "@/app/DTO/ICars";
import { format } from 'date-fns';
import { Edit } from 'lucide-react';
import Link from "next/link";
async function getCars(): Promise<Cars> {
    try {
        const response = await fetch(`${process.env.NEXT_API_NODE}/all-cars`, { cache: 'no-cache' });

        return response.json();
    } catch (err) {
        console.log(err);
    }
}

export default async function Painel() {
    const cars = await getCars();

    return (
        <main className="flex flex-col items-center justify-center w-full h-full px-3">
            <section className="flex py-6 h-20">
                <h2 className="text-2xl font-bold">Painel</h2>
            </section>
            <section className="flex flex-col items-center">
                <span className="font-bold text-lg text-center mb-4">Últimas atualizações</span>
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
                    {
                        cars.cars.length > 0 ? (cars.cars.map(car => (
                            <div key={car.id} className="flex flex-row items-center justify-center w-full h-32 bg-red-200 rounded-lg p-2 overflow-hidden gap-6 group">
                                <div className="w-48 py-10 rounded-lg">
                                    <img className="flex items-center h-full rounded-lg object-contain" src={`${process.env.NEXT_S3_URL}/${car.source}`} alt="Photo" />
                                </div>
                                <ul className="grid grid-cols-6 md:flex-row gap-20 items-center justify-center">
                                    <li className="items-center justify-center uppercase w-full md:w-96 text-red-950 md:text-1xl font-semibold">{car.description}</li>
                                    <li className="items-center justify-center text-red-950 md:text-1xl font-semibold"> {car.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</li>
                                    <li className="items-center justify-center text-red-950 md:text-1xl font-semibold">{car.year}</li>
                                    <li className="items-center justify-center text-red-950 md:text-1xl font-semibold">{format(new Date(car.created_at), 'dd/MM/yyyy')}</li>
                                    <li className="items-center justify-center text-red-950 md:text-1xl font-semibold">{format(new Date(car.updated_at), 'dd/MM/yyyy')}</li>
                                    <li>
                                        <Link href={`edit-cars/${car.id}`} className="opacity-0 group-hover:opacity-100 transition-all duration-150">
                                            <Edit className="text-red-950" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        ))) : (<h2 className="flex items-center justify-center text-lg text-gray-300">Não há carros a serem exibidos</h2>)
                    }
                </div>
            </section>
        </main>
    )
}