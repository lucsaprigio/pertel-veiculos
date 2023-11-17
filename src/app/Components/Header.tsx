import Link from "next/link";

export function Header() {
    return (
        <aside className="flex w-full p-10 h-16 shadow-xl bg-gradient-to-b from-red-700 to-red-700">
            <nav className="flex flex-row gap-28 justify-center items-center">
                <div className="flex w-32 h-20 justify-center ml-3">
                    <Link href="/">
                        <img className="hover:scale-105 duration-200 w-full h-full object-contain" src="/images/logo.svg" alt="Logo" />
                    </Link>
                </div>
                <div className="flex gap-20 ml-6">
                    <Link className="relative overflow-hidden group/link text-gray-100 text-lg hover:font-bold duration-300" href="/">
                        Home
                        <span className="absolute -inset-x-12 h-0.5 bottom-0 w-full group-hover/link:border-b-0 group-hover/link:translate-x-full group-hover/link:bg-gray-150 transition-transform duration-700" />
                    </Link>
                    <Link className="relative overflow-hidden group/link text-gray-100 text-lg hover:text-gray-150 hover:font-bold duration-300" href="/softwares">
                        Veículos
                        <span className="absolute -inset-x-24 h-0.5 bottom-0 w-full group-hover/link:border-b-0 group-hover/link:translate-x-full group-hover/link:bg-gray-150 transition-transform duration-700" />
                    </Link>
                    <Link className="relative overflow-hidden group/link text-gray-100 text-lg hover:text-gray-150 hover:font-bold duration-300" href="/sobre">
                        Sobre
                        <span className="absolute -inset-x-12 h-0.5 bottom-0 w-full group-hover/link:border-b-0 group-hover/link:translate-x-full group-hover/link:bg-gray-150 transition-transform duration-700" />
                    </Link>
                </div>
            </nav>
        </aside>
    )
}