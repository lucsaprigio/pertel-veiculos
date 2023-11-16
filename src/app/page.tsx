import { ButtonScrollBottom } from "./components/ButtonScroll";
import { InfiniteLoop } from "./components/InfiniteLoop";

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
        <h2 className="text-4xl text-red-700 font-bold mt-10">Carros em destaque</h2>
        <div className="grid grid-cols-3">
          <div className="flex flex-col items-start justify-start rounded-lg overflow-hidden bg-red-700">
            <img className="object-contain rounded-t-lg" src="/images/car.jpg" alt="Carro a venda" />
            <div className="grid grid-col grid-col-2 w-full items-start py-3 px-3">
              <div className="grid grid-cols-2 justify-around w-full ">
                <strong className="text-gray-50 text-lg mb-6">Descrição do carro</strong>
                <strong></strong>
                <span className="flex bg-gray-50 items-center justify-center w-24 rounded-md text-black">2023/2023</span>
                <strong className="flex items-center justify-end text-gray-50 text-2xl text-right">R$199.999,00</strong>
              </div>
            </div>
            <div className="grid grid-cols-1 pb-3 px-3 w-full">
              <span className="flex items-center justify-start opacity-90">Automático</span>
            </div>  
          </div>
        </div>
      </div>

      <div className="flex flex-row overflow-hidden w-full bg-gray-200 shadow-lg my-8">
        <InfiniteLoop />
      </div>
    </main >
  )
}
