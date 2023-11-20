import { FuelIcon, CarFront } from 'lucide-react';

interface Props {
    description: string;
    price: string;
    year: string;
    fuelType: string;
    exchange: string;
    source: string;
    large?: boolean;
}

export function PromotionCard({ description, price, exchange, fuelType, year, source, large = false }: Props) {
    return (
        large ? (
            <div className="flex flex-col w-full h-full mx-5 items-center justify-start rounded-lg overflow-hidden shadow-xl bg-red-700 hover:scale-105 transition-all duration-200">
                <img className="object-contain rounded-t-lg" src={source} alt="Carro a venda" />
                <div className="grid grid-col grid-col-2 w-full items-start pb-10 px-3">
                    <div className="grid grid-cols-2 justify-around w-full">
                        <div className="border-b-white border-b-bottom border-opacity-80 py-2">
                            <strong className="text-gray-50 text-lg mb-6"><CarFront size={22} className="text-gray-100 mr-1" />{description.toUpperCase()}</strong>
                        </div>
                        <div className="border-b-white border-b-bottom border-opacity-80"></div>
                        <span className="flex bg-gray-50 items-center justify-center w-24 mt-2 rounded-md text-black">{year}</span>
                        <strong className="flex items-center justify-end mt-2 text-gray-50 text-2xl text-right">R$ {price}</strong>
                    </div>
                </div>
                <div className="flex flex-row gap-14 pb-3 px-3 w-full">
                    <span className="flex items-center justify-start text-gray-100"><FuelIcon size={18} className="text-gray-100 mr-1" />{fuelType}</span>
                    <span className="flex items-center justify-start text-gray-100"><img src="/images/exchange.svg" alt="Câmbio" className="text-gray-100 mr-1 w-6 object-contain" />{exchange}</span>
                </div>
            </div>

        ) :
            (
                <div className="flex flex-col w-96 h-96 mx-2 items-center justify-start rounded-lg overflow-hidden shadow-xl bg-red-700 hover:scale-105 transition-all duration-200">
                    <img className="object-contain rounded-t-lg" src={source} alt="Carro a venda" />
                    <div className="grid grid-col grid-col-2 w-full items-start py-3 px-3">
                        <div className="grid grid-cols-2 justify-around w-full ">
                            <div className="border-b-white border-b-bottom border-opacity-80 py-2">
                                <strong className="text-gray-50 text-base mb-6">{description.toUpperCase()}</strong>
                            </div>
                            <div className="border-b-white border-b-bottom border-opacity-80"></div>
                            <span className="flex bg-gray-50 items-center justify-center w-24 mt-2 rounded-md text-black">{year}</span>
                            <strong className="flex items-center justify-end mt-2 text-gray-50 text-1xl text-right font-inter">R$ {price}</strong>
                        </div>
                    </div>
                    <div className="flex flex-row gap-14 pb-3 px-3 w-full">
                        <span className="flex items-center justify-start text-gray-100"><FuelIcon size={18} className="text-gray-100 mr-1" />{fuelType}</span>
                        <span className="flex items-center justify-start text-gray-100"><img src="/images/exchange.svg" alt="Câmbio" className="text-gray-100 mr-1 w-6 object-contain" />{exchange}</span>
                    </div>
                </div>
            )
    )
}