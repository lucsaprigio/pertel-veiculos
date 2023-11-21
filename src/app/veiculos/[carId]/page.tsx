import Link from "next/link";
import { ChevronRight, CarFront, CalendarDays, GaugeCircle, Fuel, DoorClosedIcon, Check } from 'lucide-react';
import { SendWhatsapp } from "@/app/Components/SendWhatsapp";
import { Slider } from "@/app/Components/Slider";

export default function CarDetailsPage({ params }: { params: { carId: string } }) {
    const title = `${params.carId} | Veículos`;

    return (
        <>
            <section className="w-full h-full px-10">
                <div className="flex gap-3 items-start justify-start w-full my-10">
                    <Link href="/home" className="flex items-center text-gray-300 opacity-90 font-inter">Home <ChevronRight size={18} /> </Link>
                    <Link href="/veiculos" className="flex items-center text-gray-300 opacity-90 font-inter">Veículos <ChevronRight size={18} /> </Link>
                    <span className="text-red-700">TOYOTA YARIS</span>
                </div>
                <div className="grid grid-cols-2 w-full my-4 rounded-lg bg-gray-100 p-10">
                    <div className="flex flex-col mx-2">
                        <strong className="uppercase text-3xl mb-3">Toyota yaris xs</strong>
                        <Slider>
                            <img className="object-contain" src=" https://scontent.fmvs2-1.fna.fbcdn.net/v/t45.5328-4/397442047_6858332717578894_6776584399312876377_n.jpg?stp=dst-jpg_p720x720&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_eui2=AeHE6_GdsiC8kWOsG6497QCZ31-ScYW-CO3fX5Jxhb4I7XeLKntX4gVoAmn_LwI3ciyCtOBHwQAP8_A7FwHzYI0l&_nc_ohc=O_bEJ4BcTbwAX_bXZUe&_nc_ht=scontent.fmvs2-1.fna&oh=00_AfBHQHbcoxhPPtOg0L-JC6m3uZp7pcWcq-wuoln0GnBLIA&oe=656112B9" alt="Foto do anúncio" />
                            <img className="object-contain" src=" https://scontent.fmvs2-1.fna.fbcdn.net/v/t45.5328-4/397442047_6858332717578894_6776584399312876377_n.jpg?stp=dst-jpg_p720x720&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_eui2=AeHE6_GdsiC8kWOsG6497QCZ31-ScYW-CO3fX5Jxhb4I7XeLKntX4gVoAmn_LwI3ciyCtOBHwQAP8_A7FwHzYI0l&_nc_ohc=O_bEJ4BcTbwAX_bXZUe&_nc_ht=scontent.fmvs2-1.fna&oh=00_AfBHQHbcoxhPPtOg0L-JC6m3uZp7pcWcq-wuoln0GnBLIA&oe=656112B9" alt="Foto do anúncio" />
                            <img className="object-contain" src=" https://scontent.fmvs2-1.fna.fbcdn.net/v/t45.5328-4/397442047_6858332717578894_6776584399312876377_n.jpg?stp=dst-jpg_p720x720&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_eui2=AeHE6_GdsiC8kWOsG6497QCZ31-ScYW-CO3fX5Jxhb4I7XeLKntX4gVoAmn_LwI3ciyCtOBHwQAP8_A7FwHzYI0l&_nc_ohc=O_bEJ4BcTbwAX_bXZUe&_nc_ht=scontent.fmvs2-1.fna&oh=00_AfBHQHbcoxhPPtOg0L-JC6m3uZp7pcWcq-wuoln0GnBLIA&oe=656112B9" alt="Foto do anúncio" />
                            <img className="object-contain" src=" https://scontent.fmvs2-1.fna.fbcdn.net/v/t45.5328-4/397442047_6858332717578894_6776584399312876377_n.jpg?stp=dst-jpg_p720x720&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_eui2=AeHE6_GdsiC8kWOsG6497QCZ31-ScYW-CO3fX5Jxhb4I7XeLKntX4gVoAmn_LwI3ciyCtOBHwQAP8_A7FwHzYI0l&_nc_ohc=O_bEJ4BcTbwAX_bXZUe&_nc_ht=scontent.fmvs2-1.fna&oh=00_AfBHQHbcoxhPPtOg0L-JC6m3uZp7pcWcq-wuoln0GnBLIA&oe=656112B9" alt="Foto do anúncio" />
                            <img className="object-contain" src=" https://scontent.fmvs2-1.fna.fbcdn.net/v/t45.5328-4/397442047_6858332717578894_6776584399312876377_n.jpg?stp=dst-jpg_p720x720&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_eui2=AeHE6_GdsiC8kWOsG6497QCZ31-ScYW-CO3fX5Jxhb4I7XeLKntX4gVoAmn_LwI3ciyCtOBHwQAP8_A7FwHzYI0l&_nc_ohc=O_bEJ4BcTbwAX_bXZUe&_nc_ht=scontent.fmvs2-1.fna&oh=00_AfBHQHbcoxhPPtOg0L-JC6m3uZp7pcWcq-wuoln0GnBLIA&oe=656112B9" alt="Foto do anúncio" />
                            <img className="object-contain" src=" https://scontent.fmvs2-1.fna.fbcdn.net/v/t45.5328-4/397442047_6858332717578894_6776584399312876377_n.jpg?stp=dst-jpg_p720x720&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_eui2=AeHE6_GdsiC8kWOsG6497QCZ31-ScYW-CO3fX5Jxhb4I7XeLKntX4gVoAmn_LwI3ciyCtOBHwQAP8_A7FwHzYI0l&_nc_ohc=O_bEJ4BcTbwAX_bXZUe&_nc_ht=scontent.fmvs2-1.fna&oh=00_AfBHQHbcoxhPPtOg0L-JC6m3uZp7pcWcq-wuoln0GnBLIA&oe=656112B9" alt="Foto do anúncio" />
                            <img className="object-contain" src=" https://scontent.fmvs2-1.fna.fbcdn.net/v/t45.5328-4/397442047_6858332717578894_6776584399312876377_n.jpg?stp=dst-jpg_p720x720&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_eui2=AeHE6_GdsiC8kWOsG6497QCZ31-ScYW-CO3fX5Jxhb4I7XeLKntX4gVoAmn_LwI3ciyCtOBHwQAP8_A7FwHzYI0l&_nc_ohc=O_bEJ4BcTbwAX_bXZUe&_nc_ht=scontent.fmvs2-1.fna&oh=00_AfBHQHbcoxhPPtOg0L-JC6m3uZp7pcWcq-wuoln0GnBLIA&oe=656112B9" alt="Foto do anúncio" />
                        </Slider>
                    </div>
                    <div className="flex flex-col items-center justify-start gap-10 bg-gray-50 rounded-lg mx-36 p-10">
                        <div className="w-full border-b-bottom border-red-700 mb-1">
                            <strong className="w-full uppercase text-2xl text-red-700 mb-3">R$ 88.000,00</strong>
                        </div>
                        <ul className="w-full flex flex-row gap-28 items-center justify-around mt-4 border-b-bottom border-red-700">
                            <ul className="flex flex-col gap-3 w-full">
                                <li className="flex gap-3 my-2"><CarFront /> Marca: </li>
                                <li className="flex gap-3 my-2"><CalendarDays />Ano: </li>
                                <li className="flex gap-3 my-2"><GaugeCircle /> Quilometragem:</li>
                                <li className="flex gap-3 my-2"><Fuel /> Combustível:</li>
                                <li className="flex gap-3 my-2"><img className="w-6 h-6" src="/images/exchange-black.svg" alt="exchange" />Câmbio:</li>
                                <li className="flex gap-3 my-2"><DoorClosedIcon />Portas:</li>
                            </ul>
                            <ul className="flex flex-col gap-3 w-full">
                                <li className="flex gap-3 my-2"><strong className="uppercase text-red-600 text-1xl">Toyota</strong></li>
                                <li className="flex gap-3 my-2"><strong className="uppercase text-red-600 text-1xl">2020/2020</strong></li>
                                <li className="flex gap-3 my-2"><strong className="uppercase text-red-600 text-1xl">10.000</strong></li>
                                <li className="flex gap-3 my-2"><strong className="uppercase text-red-600 text-1xl">Álcool/Gasolina</strong></li>
                                <li className="flex gap-3 my-2"><strong className="uppercase text-red-600 text-1xl">Automático</strong></li>
                                <li className="flex gap-3 my-2"><strong className="uppercase text-red-600 text-1xl">4</strong></li>
                            </ul>
                        </ul>
                        <ul className="grid grid-cols-2 gap-14">
                            <li className="flex items-center gap-1"><Check className="text-red-700" /><span>Garantia na loja (3 meses)</span></li>
                            <li className="flex items-center gap-1"><Check className="text-red-700" /><span>Garantia na loja (3 meses)</span></li>
                            <li className="flex items-center gap-1"><Check className="text-red-700" /><span>Garantia na loja (3 meses) </span></li>
                        </ul>
                        <div className="w-full mt-3">
                            <strong className="flex items-center justify-center text-red-600 text-3xl">Este anúncio te interessou?</strong>
                        </div>
                        <div className="flex w-full h-full items-center justify-center">
                            <SendWhatsapp />
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}