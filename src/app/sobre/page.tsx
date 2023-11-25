import Image from "next/image";
import { OlMap } from '../Components/Map';
import { SomePoints } from "../Components/SomePoints";

export default function Sobre() {
    return (
        <main className="flex flex-col w-full">
            <section className="flex items-center justify-center flex-col position relative gap-2 object-cover py-10 w-full h-full px-10 bg-background-about bg-no-repeat after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black after:opacity-70">
                <Image width={0} height={0} className="w-64 h-64 top-0 left-0 z-30" src="/images/logo.svg" alt="Logo" />
                <h2 className="flex items-center justify-center font-inter text-4xl z-50 text-gray-50 font-bold">Quem somos?</h2>
                <span className="flex items-center justify-center font-inter md:text-4xl z-50 text-gray-50 text-3xl text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
            </section>
            <section className="w-full h-full grid grid-cols-1 md:grid-cols-2 my-32 shadow-sm">
                <div className="flex flex-col p-20 gap-10">
                    <h3 className="flex items-center flex-col justify-center lg:text-4xl text-2xl font-inter text-center">Sobre a Pertel Veículos </h3>
                    <span className="flex items-center justify-center text-justify lg:text-center text-lg px-2 lg:px-14">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </span>
                </div>
                <div className="relative flex items-center justify-center">
                    <Image width={600} height={600} src="/images/people.jpg" alt="Pessoas" />
                </div>
            </section>
            <section className="w-full h-full grid grid-cols-1 lg:grid-cols-2 my-36 p-12 bg-red-100 shadow-sm">
                <div className="flex items-center justify-center rounded-md">
                    <Image width={800} height={800} src="/images/sobre.jpg" alt="Loja de carro" />
                </div>
                <div className="flex items-center justify-center px-10 md:px-1 md:mr-20">
                    <SomePoints
                        mission="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        vision="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        values="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    />
                </div>
            </section>
            <section>
                <OlMap />
            </section>
        </main>
    )
}