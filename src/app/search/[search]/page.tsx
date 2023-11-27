import { Card } from "@/app/Components/Card";
import { SearchVehicles } from "@/app/Components/SearchVehicles";
import { Cars } from "@/app/DTO/ICars";
import axios from "axios";
import Link from "next/link";

async function getCar(search: string): Promise<Cars> {
    try {
        const response = await fetch(`${process.env.NEXT_API_NODE}/search-cars/?${search}`, { cache: 'no-cache' });

        return response.json();
    } catch (err) {
        console.log(err);
    }
}

export default async function SearchParams({ params }: { params: { search: string } }) {
    const decoded = decodeURIComponent(params.search);
    const cars = await getCar(decoded);
    console.log(cars);

    return (
        <div className="flex flex-col items-start justify-start px-2 md:px-10 w-full scroll-smooth focus:scroll-auto">
            <SearchVehicles />
            <div className="lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-4 sm:flex sm:flex-col w-full gap-8 py-10 border-b-top-sm border-opacity-30 border-red-700">
                {
                    cars.cars.length <= 0 && (
                        <span className="flex items-center justify-center text-1xl font-bold">Nenhum carro encontrado.</span>
                    )
                }
                {
                    cars.cars.map((car) => (
                        <Link href={`/veiculos/${car.id}`} key={car.id}>
                            <Card
                                id={car.id}
                                source={`http://localhost:3333/${car.source}`}
                                description={car.description}
                                price={car.price}
                                year={car.year}
                                exchange={car.exchange}
                                km={car.km}
                            />
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}