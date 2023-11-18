import Link from "next/link";
import { ButtonScrollBottom } from "./components/ButtonScroll";
import { PromotionCard } from "./components/PromotionCard";
import { WhatsappButton } from "./components/WhatsappButton";
import { InfiniteLoop } from "./components/InfiniteLoop";

export default function Home() {
  return (
    <main>
      <WhatsappButton />
      <div className=" position relative grid grid-cols-2 gap-2 w-full h-screen px-10 bg-page-video bg-cover bg-no-repeat after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black after:opacity-70">
        <div className="mb-14 flex flex-col gap-10 items-start justify-center z-10">
          <span className="mb-2 text-left text-6xl justify-center font-bold font-inter text-gray-200">
            Em busca do seu carro dos sonhos? <br /> Aqui transformamos sonhos em realidade!
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

      <div id="carros-estoque-destaque" className="flex flex-col gap-4 px-14 py-10 items-start justify-start w-full max-h-screen">
        <h2 className="text-4xl text-red-700 font-bold mt-8 font-inter">Novidades</h2>
        <div className="grid grid-cols-2 w-full h-screen">
          <div className="flex items-start justify-start w-full">
            <PromotionCard
              large={true}
              source="/images/car.jpg"
              description="Descrição de teste"
              price={"199.999,00"}
              year="2023/2023"
              exchange="Automático"
              fuelType="Gasolina"
            />
          </div>
          <div className="flex items-start flex-wrap gap-2 justify-start w-full">
            <PromotionCard
              source="/images/car.jpg"
              description="Descrição de teste"
              price={"199.999,00"}
              year="2023/2023"
              exchange="Automático"
              fuelType="Gasolina"
            />
            <PromotionCard
              source="/images/car.jpg"
              description="Descrição de teste"
              price={"199.999,00"}
              year="2023/2023"
              exchange="Automático"
              fuelType="Gasolina"
            />
            <PromotionCard
              source="/images/car.jpg"
              description="Descrição de teste"
              price={"199.999,00"}
              year="2023/2023"
              exchange="Automático"
              fuelType="Gasolina"
            />
            <PromotionCard
              source="/images/car.jpg"
              description="Descrição de teste"
              price={"199.999,00"}
              year="2023/2023"
              exchange="Automático"
              fuelType="Gasolina"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full my-10 h-8 p-8">
        <Link href="/veiculos" >
          <button className=" p-4 bg-red-700 text-gray-150 text-xl rounded-md items-center justify-center hover:brightness-95 transition-all duration-150">Conheça nosso estoque</button>
        </Link>
      </div>
      <div className="bg-red-700">
        <InfiniteLoop />

      </div>
    </main >
  )
}
