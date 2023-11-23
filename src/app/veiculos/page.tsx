import { Metadata } from 'next';
import { Card } from '../Components/Card';
import { InputRange } from '../Components/InputRange';
import Link from 'next/link';
import { Cars } from '../DTO/ICars';

export const metadata: Metadata = {
    title: 'Veículos | Pertel Veículos',
    description: 'Pertel',
}

async function getCars(page: string): Promise<Cars> {
    const response = await fetch(`${process.env.NEXT_API_NODE}/cars?page=${page}`, { cache: 'no-cache' });

    return response.json();
}

export default async function Vehicles() {
    const cars = await getCars('1');
    console.log(cars.cars.map(car => [
        car.id,
        car.description,
        car.price,
        car.exchange,
        car.km,
        car.source,
        car.year
    ]
    ))

    return (
        <div className="flex flex-col items-start justify-start px-10 w-full scroll-smooth focus:scroll-auto">
            <div className="flex flex-col my-10 gap-20">
                <strong className=" items-center justify-center text-4xl font-inter">Veículos</strong>
                <div className="flex flex-row items-center justify-around gap-20 w-full">
                    <input className="p-1 w-80 text-black bg-transparent border-b-bottom border-b-red-600 focus:border-b-2 focus:outline-none focus:border-red-700" type="text" placeholder='Buscar veículos' />
                    <select className="p-1 w-80 text-black bg-transparent border-b-bottom border-b-red-600 focus:border-b-2 focus:outline-none focus:border-red-700" defaultValue="" placeholder="Modelo">
                        <option value="" disabled hidden>Modelo</option>
                        <option value="fiat">Fiat</option>
                        <option value="hyundai">Hyundai</option>
                        <option value="wolkswagen">Wolkswagen</option>
                        <option value="chevrolet">Chevrolet</option>
                        <option value="ford">Ford</option>
                    </select>
                    <InputRange />
                </div>
            </div>
            <div className="flex flex-row w-full flex-wrap gap-8 py-10 border-b-top-sm border-opacity-30 border-red-700 ">
                {
                    cars.cars.map((car) => (
                        <Link href={`/veiculos/${car.id}`} key={car.id}>
                            <div className="flex w-80 h-80">
                                <Card
                                    id={car.id}
                                    source={`http://localhost:3333/${car.source}`}
                                    description={car.description}
                                    price={car.price}
                                    year={car.year}
                                    exchange={car.exchange}
                                    km={car.km}
                                />
                            </div>
                        </Link>
                    ))
                }
            </div>
            <div className="w-full flex items-center justify-center mb-10">
                <button className="flex items-center justify-center w-8 h-8 rounded-md border-red-700 border-b-sm hover:bg-red-700 hover:text-gray-50 transition-all duration-150">
                    1
                </button>
                <button className="flex items-center justify-center w-8 h-8 rounded-md border-red-700 border-b-sm hover:bg-red-700 hover:text-gray-50 transition-all duration-150">
                    2
                </button>
                <button className="flex items-center justify-center w-8 h-8 rounded-md border-red-700 border-b-sm hover:bg-red-700 hover:text-gray-50 transition-all duration-150">
                    3
                </button>
                <button className="flex items-center justify-center w-8 h-8 rounded-md border-red-700 border-b-sm hover:bg-red-700 hover:text-gray-50 transition-all duration-150">
                    4
                </button>
                <button className="flex items-center justify-center w-8 h-8 rounded-md border-red-700 border-b-sm hover:bg-red-700 hover:text-gray-50 transition-all duration-150">
                    ...
                </button>
            </div>
        </div>
    )
}