import Image from "next/image";
import { OlMap } from '../Components/Map';
import { SomePoints } from "../Components/SomePoints";
import { Footer } from "../Components/Footer";

export default function Sobre() {
    return (
        <>
            <main className="flex flex-col w-full">
                <section className="flex items-center justify-center flex-col position relative gap-2 object-cover py-10 w-full h-full px-10 bg-background-about bg-no-repeat after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black after:opacity-70">
                    <Image width={0} height={0} className="w-64 h-64 top-0 left-0 z-30" src="/images/logo.svg" alt="Logo" />
                    <h2 className="flex items-center justify-center font-inter text-4xl z-50 text-gray-50 font-bold">Quem somos?</h2>
                    <span className="flex items-center justify-center font-inter md:text-4xl z-50 text-gray-50 text-3xl text-center">Ao longo de mais de três décadas, construímos uma sólida trajetória no mercado de veículos seminovos.</span>
                </section>
                <section className="w-full h-full grid grid-cols-1 md:grid-cols-2 my-32 shadow-sm">
                    <div className="flex flex-col p-20 gap-10">
                        <h3 className="flex items-center flex-col justify-center lg:text-4xl text-2xl font-inter text-center">Sobre a Pertel Veículos </h3>
                        <span className="flex items-center justify-center text-justify lg:text-center text-lg px-2 lg:px-14">
                            Bem-vindo à nossa empresa familiar, com mais de 30 anos de dedicação ao mercado de venda de veículos seminovos! Nosso compromisso é proporcionar a mais alta qualidade e atendimento excepcional aos nossos clientes.

                            Somos especialistas em financiamentos, oferecendo uma ampla gama de opções de diversas instituições financeiras para atender às suas necessidades. Nossa missão é tornar o processo de aquisição do seu veículo o mais fácil e conveniente possível.

                            Atendemos orgulhosamente toda a região de Colatina e o Noroeste do Espírito Santo, servindo nossa comunidade com integridade e profissionalismo. Estamos localizados na Avenida Silvio Ávidos, 3025, Bairro São Silvano, Colatina, 29703100.

                            Confie em nós para uma experiência única ao adquirir o seu próximo veículo. Sua satisfação é a nossa prioridade!
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
                            mission="Conduzimos nossa empresa com a missão de proporcionar uma experiência excepcional aos nossos clientes, oferecendo veículos seminovos de alta qualidade e serviços de financiamento personalizados. Estamos comprometidos em superar as expectativas, construindo relações duradouras baseadas na confiança, integridade e transparência."
                            vision="Vislumbramos ser reconhecidos como referência no mercado de veículos seminovos, sendo a escolha preferencial para clientes que valorizam qualidade, compromisso e atendimento personalizado. Planejamos continuar crescendo de maneira sustentável, expandindo nossa presença e mantendo a excelência em todos os aspectos do nosso negócio."
                            values="Buscamos incessantemente a excelência, oferecendo veículos seminovos cuidadosamente selecionados para garantir a satisfação dos nossos clientes."
                        />
                    </div>
                </section>
                <section>
                    <OlMap />
                </section>
            </main>
            <Footer />
        </>
    )
}