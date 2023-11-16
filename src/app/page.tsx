import { ButtonScrollBottom } from "./components/ButtonScroll";
import { InfiniteLoop } from "./components/InfiniteLoop";
import { PromotionCard } from "./components/PromotionCard";

export default function Home() {
  return (
    <main>
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

      <div id="carros-estoque-destaque" className="flex flex-col gap-4 px-24 items-start justify-start w-full z-10">
        <h2 className="text-4xl text-red-700 font-bold mt-8">Carros em destaque</h2>
        <div className="flex flex-row flex-wrap">
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

      <div className="flex flex-row overflow-hidden w-full bg-gray-200 shadow-lg my-8">
        <InfiniteLoop />
      </div>
    </main >
  )
}
