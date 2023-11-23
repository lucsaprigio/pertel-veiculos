import { BsSpeedometer } from 'react-icons/bs';
import { MdCalendarMonth } from 'react-icons/md';

interface Props {
    id: string;
    description: string;
    price: number;
    year: string;
    km: number;
    exchange: string;
    source: string;
    large?: boolean;
}


export function Card({ id, description, price, year, km, exchange, source }: Props) {
    return (
        <main className="grid grid-cols-1 mx-2 items-center justify-start rounded-lg shadow-xl bg-red-700 hover:drop-shadow-2xl transition-all duration-300 group">
            <div className="flex flex-col items-center justify-center rounded-t-lg w-full max-h-48 overflow-hidden">
                <img className="h-auto w-auto object-cover rounded-t-lg group-hover:scale-105 transition-all duration-150" src={source} alt="Carro a venda" />
            </div>
            <div className="grid grid-col grid-col-2 w-full items-start py-3 px-3">
                <div className="grid grid-cols-2 justify-around w-full ">
                    <div className="border-b-white border-b-bottom border-opacity-80 py-2">
                        <strong className="text-gray-50 text-sm mb-6">{description.toUpperCase()}</strong>
                    </div>
                    <div className="border-b-white border-b-bottom border-opacity-80"></div>
                    <span className="flex gap-2 bg-gray-50 items-center justify-center w-32 mt-2 rounded-md text-black"><MdCalendarMonth size={22} className="text-black" /> {year}</span>
                    <strong className="flex items-center justify-end mt-2 text-gray-50 text-1xl text-right font-inter">{price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>
                </div>
            </div>
            <div className="flex flex-row gap-14 pb-3 px-3 w-full">
                <span className="flex items-center justify-start text-sm text-gray-100"><BsSpeedometer size={18} className="text-gray-100 mr-1" />{km.toLocaleString()}</span>
                <span className="flex items-center justify-start text-sm text-gray-100"><img src="/images/exchange.svg" alt="Câmbio" className="text-gray-100 mr-1 w-4 object-contain" />{exchange}</span>
            </div>
        </main>
    )
}