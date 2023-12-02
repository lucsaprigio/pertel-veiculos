import { Metadata } from 'next';
import { Card } from '../Components/Card';
import Link from 'next/link';
import { Cars } from '../DTO/ICars';
import { SearchVehicles } from '../Components/SearchVehicles';
import { CountPagesButton } from '../Components/CountPagesButton';
import { Footer } from '../Components/Footer';

export const metadata: Metadata = {
    title: 'Veículos | Pertel Veículos',
    description: 'Pertel',
}

async function getCars(page: string): Promise<Cars> {
    try {
        const response = await fetch(`${process.env.NEXT_API_NODE}/cars?page=${page}`, { cache: 'no-cache' });

        return response.json();
    } catch (err) {
        console.log(err);
    }
}

export default async function Vehicles({ searchParams }: { searchParams?: { page: string } }) {
    const cars = await getCars(searchParams.page);

    return (
        <>
            <div className="flex flex-col items-start justify-start px-2 md:px-10 w-full scroll-smooth focus:scroll-auto">
                <SearchVehicles />
                <div className="lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-4 sm:flex sm:flex-col w-full gap-8 py-10 border-b-top-sm border-opacity-30 border-red-700">
                    {
                        cars.cars.length > 0 ? cars.cars.map((car) => (
                            <Link href={`/veiculos/${car.id}`} key={car.id}>
                                <Card
                                    id={car.id}
                                    source={`${process.env.NEXT_S3_URL}/${car.source}`}
                                    description={car.description}
                                    price={car.price}
                                    year={car.year}
                                    exchange={car.exchange}
                                    km={car.km}
                                />
                            </Link>
                        )) : (
                            <div className="flex items-center justify-center col-span-4 h-60">
                                <span className="text-gray-300 opacity-80 text-3xl">Não há veículo a ser exibido</span>
                            </div>
                        )
                    }
                </div>
                <div className="w-full flex items-center justify-center mb-10">
                    <CountPagesButton countPages={cars && cars.totalPages} />
                </div>
            </div>
            <Footer />
        </>
    )
}