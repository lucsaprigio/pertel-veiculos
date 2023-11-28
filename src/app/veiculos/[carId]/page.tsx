import Link from "next/link";
import { ChevronRight, CarFront, CalendarDays, GaugeCircle, Fuel, DoorClosedIcon, Check } from 'lucide-react';
import { SendWhatsapp } from "@/app/Components/SendWhatsapp";
import { Slider } from "@/app/Components/Slider";
import { Car } from "@/app/DTO/ICar";

async function getCar(carId: string): Promise<Car> {
    try {
        const response = await fetch(`${process.env.NEXT_API_NODE}/car/${carId}`, { cache: 'no-cache' });

        return response.json();
    } catch (err) {
        console.log(err);
    }
}


export default async function CarDetailsPage({ params }: { params: { carId: string } }) {
    const car = await getCar(params.carId);
    console.log(car);
    const title = `${car.description} | Veículos`;

    return (
        <>
            <title>{title}</title>
            <section className="w-full h-full lg:px-10">
                <div className="flex gap-3 items-start justify-start w-full my-10">
                    <Link href="/home" className="flex items-center text-gray-300 opacity-90 font-inter">Home <ChevronRight size={18} /> </Link>
                    <Link href="/veiculos" className="flex items-center text-gray-300 opacity-90 font-inter">Veículos <ChevronRight size={18} /> </Link>
                    <span className="text-red-700">{car.description}</span>
                </div>
                <div className="lg:grid lg:grid-cols-2 flex flex-col overflow-hidden w-full h-full my-4 rounded-lg bg-gray-100 md:p-10">
                    <div className="flex flex-col mx-2">
                        <strong className="uppercase text-3xl mb-3">{car.description}</strong>
                        <Slider>
                            {

                                car.ImageCars.map((image) => (
                                    <img key={car.id} className="lg:object-contain" src={`http://localhost:3333/${image.source}`} alt="Imagem do carro" />
                                ))
                            }
                        </Slider>
                    </div>

                    <div className="w-full flex flex-col items-center justify-start gap-10 bg-gray-50 rounded-lg my-10 p-7 md:p-10">
                        <div className="w-full border-b-bottom border-red-700 mb-1">
                            <strong className="w-full uppercase text-2xl text-red-700 mb-3">{car.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>
                        </div>
                        <ul className="w-full flex flex-row lg:gap-28 items-center justify-around mt-4 border-b-bottom border-red-700">
                            <ul className="flex flex-col md:gap-3 w-full">
                                <li className="flex gap-3 my-2"><CarFront /> Marca: </li>
                                <li className="flex gap-3 my-2"><CalendarDays />Ano: </li>
                                <li className="flex gap-3 my-2"><GaugeCircle /> Quilometragem:</li>
                                <li className="flex gap-3 my-2"><Fuel /> Combustível:</li>
                                <li className="flex gap-3 my-2"><img className="w-6 h-6" src="/images/exchange-black.svg" alt="exchange" />Câmbio:</li>
                                <li className="flex gap-3 my-2"><DoorClosedIcon />Portas:</li>
                            </ul>
                            <ul className="flex flex-col md:gap-3 w-full">
                                <li className="flex gap-3 my-2"><strong className="uppercase text-red-600 text-1xl">{car.brand}</strong></li>
                                <li className="flex gap-3 my-2"><strong className="uppercase text-red-600 text-1xl">{car.year}</strong></li>
                                <li className="flex gap-3 my-2"><strong className="uppercase text-red-600 text-1xl">{car.km.toLocaleString()}</strong></li>
                                <li className="flex gap-3 my-2"><strong className="uppercase text-red-600 text-1xl">{car.fuelType}</strong></li>
                                <li className="flex gap-3 my-2"><strong className="uppercase text-red-600 text-1xl">{car.exchange}</strong></li>
                                <li className="flex gap-3 my-2"><strong className="uppercase text-red-600 text-1xl">{car.doors}</strong></li>
                            </ul>
                        </ul>
                        <ul className="grid grid-cols-2 gap-14">
                            <li className="flex items-center gap-1"><Check className="text-red-700" /><span>Garantia na loja (3 meses)</span></li>
                            <li className="flex items-center gap-1"><Check className="text-red-700" /><span>Garantia na loja (3 meses)</span></li>
                            <li className="flex items-center gap-1"><Check className="text-red-700" /><span>Garantia na loja (3 meses) </span></li>
                        </ul>
                        <div className="w-full mt-3">
                            <strong className="flex items-center justify-center text-red-600 text-lg lg:text-3xl">Este anúncio te interessou?</strong>
                        </div>
                        <div className="flex w-full h-full items-center justify-center ">
                            <SendWhatsapp />
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}