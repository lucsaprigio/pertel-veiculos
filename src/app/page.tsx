import Link from "next/link";
import { ButtonScrollBottom } from "./Components/ButtonScroll";
import { WhatsappButton } from "./Components/WhatsappButton";
import { InfiniteLoop } from "./Components/InfiniteLoop";
import { BuyCard } from "./Components/BuyCard";
import { ChevronRight } from 'lucide-react';
import { Cars } from "./DTO/ICars";
import { Card } from "./Components/Card";

async function getNewCars(): Promise<Cars> {
  try {
    const response = await fetch(`${process.env.NEXT_API_NODE}/new-cars`, { next: { revalidate: 5 } });

    return response.json();
  } catch (err) {
    console.log(err);
  }
}

export default async function Home() {
  const cars = await getNewCars();

  return (
    <main>
      <WhatsappButton />
      <div className="position relative grid grid-cols-1 md:grid-cols-2 aria-hidden: gap-2 w-full h-screen px-10 bg-page-video bg-cover bg-no-repeat after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black after:opacity-70">
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

      <div id="carros-estoque-destaque" className="flex flex-col gap-4 py-6 px-2 lg:px-14 lg:py-10 items-center justify-center w-full h-full mb-64">
        <h2 className="text-4xl text-red-700 font-bold mt-8 font-inter">Novidades</h2>
        <div className="flex flex-col items-center justify-center xl:grid xl:grid-cols-2 gap-3 w-full">
          {
            cars.cars.map((car) => (
              <Link key={car.id} href={`/veiculos/${car.id}`} className="w-full">
                <Card
                  id={car.id}
                  key={car.id}
                  source={`http://localhost:3333/${car.source}`}
                  description={car.description}
                  price={car.price}
                  year={car.year}
                  exchange={car.exchange}
                  km={car.km}
                />
              </Link>
            ))
          }
        </div>

        <div className="flex items-center justify-center w-full h-full p-8">
          <Link href="/veiculos" >
            <button className="flex p-4 bg-red-700 text-gray-150 text-xl rounded-md items-center justify-center hover:brightness-95 hover:scale-105 transition-all duration-150">Conheça nosso estoque <ChevronRight /></button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="flex flex-col gap-20 items-center justify-center w-full h-full bg-red-200 mx-20 px-4 md:p-20 rounded-xl">
          <img className="w-64 h-64 opacity-50 object-contain rounded-full -mb-32" src="/images/sale-car.svg" alt="Logo" />
          <h2 className="text-black font-bold text-4xl text-center font-inter z-50">Quais motivos para comprar conosco?</h2>
          <div className="flex flex-col md:flex-row px-10 gap-10">
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

      <div className="my-8 bg-red-850">
        <InfiniteLoop />
      </div>
    </main >
  )
}
