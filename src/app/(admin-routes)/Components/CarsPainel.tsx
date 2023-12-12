'use client'
import Link from "next/link";
import { format } from 'date-fns';
import { Edit, Search } from 'lucide-react';
import { useEffect, useState } from "react";
import { api } from "@/app/axios/api";
import { Car } from "@/app/DTO/ICar";

export default function CarsPainel() {
    const [cars, setCars] = useState<Car[]>([]);
    const [searchedCars, setSearchedCars] = useState<Car[]>([]);
    const [search, setSearch] = useState('')


    async function handleListCars() {
        try {
            const response = await api.get('/all-cars');

            setCars(response.data.cars);
        } catch (err) {
            console.log(err);
        }
    }

    function handleSearchCars() {
        const filteredCars = cars.filter((car) =>
            car.description.toLowerCase().includes(search.toLowerCase())
        );
        console.log(filteredCars);

        if (search !== '') {
            setSearchedCars(filteredCars);
        } else {
            setSearchedCars([])
        }

        return filteredCars;
    }

    useEffect(() => {
        handleListCars();
    }, []);

    return (
        <>
            <ul className="grid grid-cols-6 md:flex-row gap-20 items-center justify-center">
                <li></li>
                <li className="uppercase w-full text-red-950 md:text-1xl font-semibold">Descrição</li>
                <li className="text-red-950 md:text-1xl font-semibold"> Valor</li>
                <li className="text-red-950 md:text-1xl font-semibold">Ano/Modelo</li>
                <li className="text-red-950 md:text-1xl font-semibold">Criação</li>
                <li className="text-red-950 md:text-1xl font-semibold">Última atualização</li>
            </ul>
            <div className="flex w-full items-start justify-start">
                <input
                    className="flex items-center justify-center p-2 h-10 border-border-1 border-red-700 rounded-md placeholder:opacity-50 focus:border-2 focus:outline-none"
                    placeholder="Pesquisar"
                    type="text"
                    value={search}
                    onChange={e => { setSearch(e.target.value), handleSearchCars }}
                />
                <button className="flex items-center justify-center" type="button" onClick={handleSearchCars}><Search className="text-red-700 mx-2" /></button>
            </div>
            <div className="max-h-96 overflow-y-auto space-y-3 p-1">
                {
                    search !== '' &&
                    searchedCars && searchedCars.map((car) => (
                        <div key={car.id} className="flex flex-row items-center justify-center w-full h-32 bg-red-200 rounded-lg p-2 overflow-hidden gap-6 group">
                            <div className="w-48 py-10 rounded-lg">
                                <img className="flex items-center h-full rounded-lg object-contain" src={`${process.env.NEXT_PUBLIC_S3_URL}/${car.source}`} alt="Photo" />
                            </div>
                            <ul className="grid grid-cols-6 md:flex-row gap-20 items-center justify-center">
                                <li className="items-center justify-center uppercase w-full md:w-96 text-red-950 md:text-1xl font-semibold">{car.description}</li>
                                <li className="items-center justify-center text-red-950 md:text-1xl font-semibold"> {car.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</li>
                                <li className="items-center justify-center text-red-950 md:text-1xl font-semibold">{car.year}</li>
                                <li className="items-center justify-center text-red-950 md:text-1xl font-semibold">{format(new Date(car.created_at), 'dd/MM/yyyy HH:mm')}</li>
                                <li className="items-center justify-center text-red-950 md:text-1xl font-semibold">{format(new Date(car.updated_at), 'dd/MM/yyyy HH:mm')}</li>
                                <li>
                                    <Link href={`/painel/edit-car/${car.id}`} className="opacity-0 group-hover:opacity-100 transition-all duration-150">
                                        <Edit className="text-red-950" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    ))
                }
                {
                    search === '' &&
                        cars.length > 0 ? (cars.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()).map(car => (
                            <div key={car.id} className="flex flex-row items-center justify-center w-full h-32 bg-red-200 rounded-lg p-2 overflow-hidden gap-6 group">
                                <div className="w-48 py-10 rounded-lg">
                                    <img className="flex items-center h-full rounded-lg object-contain" src={`${process.env.NEXT_PUBLIC_S3_URL}/${car.source}`} alt="Photo" />
                                </div>
                                <ul className="grid grid-cols-6 md:flex-row gap-20 items-center justify-center">
                                    <li className="items-center justify-center uppercase w-full md:w-96 text-red-950 md:text-1xl font-semibold">{car.description}</li>
                                    <li className="items-center justify-center text-red-950 md:text-1xl font-semibold"> {car.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</li>
                                    <li className="items-center justify-center text-red-950 md:text-1xl font-semibold">{car.year}</li>
                                    <li className="items-center justify-center text-red-950 md:text-1xl font-semibold">{format(new Date(car.created_at), 'dd/MM/yyyy HH:mm')}</li>
                                    <li className="items-center justify-center text-red-950 md:text-1xl font-semibold">{format(new Date(car.updated_at), 'dd/MM/yyyy HH:mm')}</li>
                                    <li>
                                        <Link href={`/painel/edit-car/${car.id}`} className="opacity-0 group-hover:opacity-100 transition-all duration-150">
                                            <Edit className="text-red-950" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        ))) : (
                        <h2 className={`w-full flex items-center justify-center text-lg text-gray-300 ${!!search && 'hidden'}`}>Não há carros a serem exibidos</h2>
                    )
                }
            </div >
        </>
    )
}