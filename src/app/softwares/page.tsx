import { ButtonScrollBottom } from "../components/ButtonScroll";

export default function Softwares() {

    return (
        <>
            <div className="grid grid-cols-2 w-full h-screen bg-gradient-to-b from-gray-100 to-blue-200 overflow-hidden">
                <div className="flex flex-col items-center justify-start gap-14 w-full px-20 mt-40">
                    <strong className="text-7xl text-blue-700 text-left font-inter">
                        Com um compromisso contínuo com a inovação
                    </strong>
                    <span className="text-2xl text-blue-700 text-left">
                        Nossa plataforma oferece soluções intuitivas e eficientes para otimizar processos, proporcionando uma gestão empresarial mais ágil e bem-sucedida.
                        <br /> Vamos listar algumas de nossas soluções abaixo:
                    </span>
                    <div className="flex flex-row w-full h-12 items-center justify-center gap-20 rounded-lg bg-blue-200 mt-14 shadow-lg">
                        <img className="w-20 h-20 object-contain animate-scale-animation" src="/images/taxa.png" alt="Taxa" />
                        <img className="w-20 h-20 object-contain animate-scale-animation" src="/images/estoque-pronto.png" alt="Estoque" />
                        <img className="w-20 h-20 object-contain animate-scale-animation" src="/images/papel.png" alt="Venda" />
                        <img className="w-20 h-20 object-contain animate-scale-animation" src="/images/dinheiro-na-entrega.png" alt="Dinheiro na entrega" />
                    </div>

                    <ButtonScrollBottom targedDiv="fiscal" />
                </div>
                <div className="w-full h-4/5">
                    <img className="w-full h-full object-contain" src="/images/software-img.svg" alt="Monitor" />
                </div>
            </div>
            <div id="fiscal" className="w-full h-screen">
                <span>Fiscal</span>
            </div>
        </>
    )
}