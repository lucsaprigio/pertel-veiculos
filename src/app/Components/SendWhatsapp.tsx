'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaWhatsapp } from 'react-icons/fa';


export function SendWhatsapp() {
    const pathname = usePathname();

    return (
        <div className="w-full flex items-center justify-center">
            <Link className="flex items-center justify-around w-full gap-3 lg:px-20 text-gray-50 text-2xl bg-red-700 p-2 h-14 rounded-lg hover:brightness-90 transition-all duration-75" href={`https://wa.me/5527997546411?text=Olá%20tenho%20interesse%20neste%20carro%20http://www.pertelveiculos.com.br${pathname}`} target='blank'>
                <span></span>Enviar mensagem <FaWhatsapp size={32} />
            </Link>
        </div>
    )
}