import Link from "next/link";
import { ButtonScrollBottom } from "./Components/ButtonScroll";
import { PromotionCard } from "./Components/PromotionCard";
import { WhatsappButton } from "./Components/WhatsappButton";
import { InfiniteLoop } from "./Components/InfiniteLoop";
import { BuyCard } from "./Components/BuyCard";
import { ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <main>
      <WhatsappButton />
      <div className=" position relative grid grid-cols-2 aria-hidden: gap-2 w-full h-screen px-10 bg-page-video bg-cover bg-no-repeat after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black after:opacity-70">
        <div className="mb-14 flex flex-col gap-10 items-start justify-center z-10">
          <span className="mb-2 text-left text-6xl justify-center font-bold font-inter text-gray-200">
            Em busca do seu carro dos sonhos?
          </span>
          <span className="text-left text-3xl justify-center text-gray-200">
            Com um estoque abrangente e as melhores opções, estamos prontos para ajudá-lo a encontrar o veículo perfeito.
          </span>
          <div>
            <ButtonScrollBottom
              description="Conheça nosso estoque"
              targedDiv="carros-estoque-destaque"
            />
          </div>
        </div>
      </div>

      <div id="carros-estoque-destaque" className="flex flex-col gap-4 px-14 py-10 items-start justify-start w-full max-h-screen mb-64">
        <h2 className="text-4xl text-red-700 font-bold mt-8 font-inter">Novidades</h2>
        <div className="grid grid-cols-2 w-full">
          <div className="flex items-start justify-start w-full">
            <PromotionCard
              large={true}
              source="/images/car.jpg"
              description="Descrição de teste"
              price={199999}
              year="2023/2023"
              exchange="Automático"
              km={100000}
            />
          </div>
          <div className="flex items-start flex-wrap gap-2 justify-start w-full">
            <PromotionCard
              source="/images/car.jpg"
              description="Descrição de teste"
              price={199999}
              year="2023/2023"
              exchange="Automático"
              km={100000}
            />
            <PromotionCard
              source="/images/car.jpg"
              description="Descrição de teste"
              price={199999}
              year="2023/2023"
              exchange="Automático"
              km={100000}
            />
            <PromotionCard
              source="/images/car.jpg"
              description="Descrição de teste"
              price={199999}
              year="2023/2023"
              exchange="Automático"
              km={100000}
            />
            <PromotionCard
              source="/images/car.jpg"
              description="Descrição de teste"
              price={1999999}
              year="2023/2023"
              exchange="Automático"
              km={100000}
            />
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-32 p-8">
          <Link href="/veiculos" >
            <button className="flex p-4 bg-red-700 text-gray-150 text-xl rounded-md items-center justify-center hover:brightness-95 hover:scale-105 transition-all duration-150">Conheça nosso estoque <ChevronRight /></button>
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-center w-full h-screen">
        <div className="flex flex-col gap-20 items-center justify-center w-full h-full bg-red-200 mx-20 p-20 rounded-xl">
          <img className="w-64 h-64 opacity-50 object-contain rounded-full -mb-32" src="/images/sale-car.svg" alt="Logo" />
          <h2 className="text-black font-bold text-4xl font-inter z-50">Quais motivos para comprar conosco?</h2>
          <div className="flex flex-row px-10 gap-10">
            <BuyCard
              title="Lorem Epsum"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book"
            />
            <BuyCard
              title="Lorem Epsum"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book"
            />
            <BuyCard
              title="Lorem Epsum"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book"
            />
          </div>
        </div>
      </div>

      <div className="bg-red-700">
        <InfiniteLoop />
      </div>
    </main >
  )
}
