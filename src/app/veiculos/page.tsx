import { Metadata } from 'next';
import { Card } from '@/components/Card';
import { InputRange } from '@/components/InputRange';


export const metadata: Metadata = {
    title: 'Veículos | Pertel Veículos',
    description: 'Pertel',
}

export default function Softwares() {
    return (
        <div className="flex flex-col items-start justify-start px-10 w-full">
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
                <div className="flex w-80">
                    <Card
                        id="1"
                        source="/images/car.jpg"
                        description="Descrição de teste"
                        price={"199.999,00"}
                        year="2023/2023"
                        exchange="Automático"
                        fuelType="Gasolina"
                    />
                </div>
                <div className="flex w-80">
                    <Card
                        id="1"
                        source="/images/car.jpg"
                        description="Descrição"
                        price={"199.999,00"}
                        year="2023/2023"
                        exchange="Automático"
                        fuelType="Gasolina"
                    />
                </div>
                <div className="flex w-80">
                    <Card
                        id="1"
                        source="/images/car.jpg"
                        description="Descrição de teste"
                        price={"199.999,00"}
                        year="2023/2023"
                        exchange="Automático"
                        fuelType="Gasolina"
                    />
                </div>
            </div>
            <div className="w-full flex items-center justify-center">
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