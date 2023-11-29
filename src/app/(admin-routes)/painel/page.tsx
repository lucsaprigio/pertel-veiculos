import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

async function getLastCars() {

}

export default async function Painel() {
    const session = await getServerSession(nextAuthOptions);

    return (
        <main className="flex flex-col items-center justify-center w-full h-full px-3">
            <section className="flex py-6 h-20">
                <h2 className="text-2xl font-bold">Painel</h2>
            </section>
            <section className="flex flex-col items-center">
                <span className="font-bold text-lg text-center mb-4">Últimos cadastros</span>
                <div className="w-full grid grid-cols-5 gap-2">
                    <div className="flex flex-row w-full gap-6 bg-gray-50 rounded-lg px-6 py-1 border-b-8 border-red-800">
                        <div className="flex items-center justify-center w-28">
                            <img className="object-contain" src="/images/logo.svg" alt="Logo" />
                        </div>
                        <ul className="flex flex-col gap-2 items-start w-full">
                            <li className="text-red-800 text-lg uppercase">Hyundai 2016</li>
                            <li className="text-red-800 text-lg">R$ 39.999,99</li>
                            <li className="text-red-800 text-lg">28/11/2023 21:11</li>
                        </ul>
                    </div>
                    <div className="flex flex-row w-full gap-6 bg-gray-50 rounded-lg px-6 py-1 border-b-8 border-red-800">
                        <div className="flex items-center justify-center w-28">
                            <img className="object-contain" src="/images/logo.svg" alt="Logo" />
                        </div>
                        <ul className="flex flex-col gap-2 items-start w-full overflow-hidden">
                            <li className="text-red-800 text-lg uppercase">Hyundai 2016</li>
                            <li className="text-red-800 text-lg">R$ 39.999,99</li>
                            <li className="text-red-800 text-lg">28/11/2023 21:11</li>
                        </ul>
                    </div>
                    <div className="flex flex-row w-full gap-6 bg-gray-50 rounded-lg px-6 py-1 border-b-8 border-red-800">
                        <div className="flex items-center justify-center w-28">
                            <img className="object-contain" src="/images/logo.svg" alt="Logo" />
                        </div>
                        <ul className="flex flex-col gap-2 items-start w-full">
                            <li className="text-red-800 text-lg uppercase">Hyundai 2016</li>
                            <li className="text-red-800 text-lg">R$ 39.999,99</li>
                            <li className="text-red-800 text-lg">28/11/2023 21:11</li>
                        </ul>
                    </div>
                    <div className="flex flex-row w-full gap-6 bg-gray-50 rounded-lg px-6 py-1 border-b-8 border-red-800">
                        <div className="flex items-center justify-center w-28">
                            <img className="object-contain" src="/images/logo.svg" alt="Logo" />
                        </div>
                        <ul className="flex flex-col gap-2 items-start w-full">
                            <li className="text-red-800 text-lg uppercase">Hyundai 2016</li>
                            <li className="text-red-800 text-lg">R$ 39.999,99</li>
                            <li className="text-red-800 text-lg">28/11/2023 21:11</li>
                        </ul>
                    </div>
                    <div className="flex flex-row w-full gap-6 bg-gray-50 rounded-lg px-6 py-1 border-b-8 border-red-800">
                        <div className="flex items-center justify-center w-28">
                            <img className="object-contain" src="/images/logo.svg" alt="Logo" />
                        </div>
                        <ul className="flex flex-col gap-2 items-start w-full">
                            <li className="text-red-800 text-lg uppercase">Hyundai 2016</li>
                            <li className="text-red-800 text-lg">R$ 39.999,99</li>
                            <li className="text-red-800 text-lg">28/11/2023 21:11</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="w-full h-full m-10 bg-gray-50 rounded-lg p-4">
                <div className="flex flex-col items-start justify-center px-10">
                    <div className="flex flex-row bg-red-200 rounded-lg px-2">
                        <div className="w-32 h-32">
                            <img src="/images/photo.png" alt="Photo" />
                        </div>
                        <ul className="flex flex-col gap-6 items-start justify-center">
                            <li>CARRO TESTE 12345678123123</li>
                            <li>R$ 39.999,99</li>
                            <li>2023/2023</li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    )
}