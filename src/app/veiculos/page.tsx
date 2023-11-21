import { Metadata } from 'next';
import { Card } from '../Components/Card';
import { InputRange } from '../Components/InputRange';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Veículos | Pertel Veículos',
    description: 'Pertel',
}

export default async function Softwares() {
    const cars = [
        {
            "id": "fdskjfui8921038413",
            "description": "Toyota yaris xs",
            "price": 71900,
            "year": "2019/2019",
            "km": 1000,
            "exchange": "Automático",
            "source": "https://scontent.fmvs2-1.fna.fbcdn.net/v/t45.5328-4/397442047_6858332717578894_6776584399312876377_n.jpg?stp=dst-jpg_p720x720&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_eui2=AeHE6_GdsiC8kWOsG6497QCZ31-ScYW-CO3fX5Jxhb4I7XeLKntX4gVoAmn_LwI3ciyCtOBHwQAP8_A7FwHzYI0l&_nc_ohc=O_bEJ4BcTbwAX_bXZUe&_nc_ht=scontent.fmvs2-1.fna&oh=00_AfBHQHbcoxhPPtOg0L-JC6m3uZp7pcWcq-wuoln0GnBLIA&oe=656112B9"
        },
        {
            "id": "fdskjfui8921038413",
            "description": "Toyota yaris xs",
            "price": 71900,
            "year": "2019/2019",
            "km": 1000,
            "exchange": "Automático",
            "source": "https://scontent.fmvs2-1.fna.fbcdn.net/v/t45.5328-4/397442047_6858332717578894_6776584399312876377_n.jpg?stp=dst-jpg_p720x720&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_eui2=AeHE6_GdsiC8kWOsG6497QCZ31-ScYW-CO3fX5Jxhb4I7XeLKntX4gVoAmn_LwI3ciyCtOBHwQAP8_A7FwHzYI0l&_nc_ohc=O_bEJ4BcTbwAX_bXZUe&_nc_ht=scontent.fmvs2-1.fna&oh=00_AfBHQHbcoxhPPtOg0L-JC6m3uZp7pcWcq-wuoln0GnBLIA&oe=656112B9"
        },
        {
            "id": "fdskjfui8921038413",
            "description": "Toyota yaris xs",
            "price": 71900,
            "year": "2019/2019",
            "km": 1000,
            "exchange": "Automático",
            "source": "https://scontent.fmvs2-1.fna.fbcdn.net/v/t45.5328-4/397442047_6858332717578894_6776584399312876377_n.jpg?stp=dst-jpg_p720x720&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_eui2=AeHE6_GdsiC8kWOsG6497QCZ31-ScYW-CO3fX5Jxhb4I7XeLKntX4gVoAmn_LwI3ciyCtOBHwQAP8_A7FwHzYI0l&_nc_ohc=O_bEJ4BcTbwAX_bXZUe&_nc_ht=scontent.fmvs2-1.fna&oh=00_AfBHQHbcoxhPPtOg0L-JC6m3uZp7pcWcq-wuoln0GnBLIA&oe=656112B9"
        },
        {
            "id": "fdskjfui8921038413",
            "description": "Toyota yaris xs",
            "price": 71900,
            "year": "2019/2019",
            "km": 1000,
            "exchange": "Automático",
            "source": "https://scontent.fmvs2-1.fna.fbcdn.net/v/t45.5328-4/397442047_6858332717578894_6776584399312876377_n.jpg?stp=dst-jpg_p720x720&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_eui2=AeHE6_GdsiC8kWOsG6497QCZ31-ScYW-CO3fX5Jxhb4I7XeLKntX4gVoAmn_LwI3ciyCtOBHwQAP8_A7FwHzYI0l&_nc_ohc=O_bEJ4BcTbwAX_bXZUe&_nc_ht=scontent.fmvs2-1.fna&oh=00_AfBHQHbcoxhPPtOg0L-JC6m3uZp7pcWcq-wuoln0GnBLIA&oe=656112B9"
        },
        {
            "id": "fdskjfui8921038413",
            "description": "Toyota yaris xs",
            "price": 71900,
            "year": "2019/2019",
            "km": 1000,
            "exchange": "Automático",
            "source": "https://scontent.fmvs2-1.fna.fbcdn.net/v/t45.5328-4/397442047_6858332717578894_6776584399312876377_n.jpg?stp=dst-jpg_p720x720&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_eui2=AeHE6_GdsiC8kWOsG6497QCZ31-ScYW-CO3fX5Jxhb4I7XeLKntX4gVoAmn_LwI3ciyCtOBHwQAP8_A7FwHzYI0l&_nc_ohc=O_bEJ4BcTbwAX_bXZUe&_nc_ht=scontent.fmvs2-1.fna&oh=00_AfBHQHbcoxhPPtOg0L-JC6m3uZp7pcWcq-wuoln0GnBLIA&oe=656112B9"
        }
    ]

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
                    cars.map((car) => (
                        <Link href={`/veiculos/${car.id}`} key={car.id}>
                            <div className="flex w-80">
                                <Card
                                    id={car.id}
                                    source={car.source}
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