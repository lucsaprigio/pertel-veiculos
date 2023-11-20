'use client'
import { ArrowDown } from 'lucide-react'

interface ButtonProps {
    targedDiv: string;
    description?: string;
}

export function ButtonScrollBottom({ targedDiv, description }: ButtonProps) {
    function scrollToDiv(targedDiv: string) {
        const targetDiv = document.getElementById(targedDiv);
        const targetPosition = targetDiv!.offsetTop;

        // Realiza o scroll suave até a posição da div de destino
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth',
        });
    };

    return (
        <button className="flex flex-row items-center justify-around bg-red-700 px-4 py-2 rounded-full text-black animate-bounce" onClick={() => scrollToDiv(targedDiv)}>
            {description}
            <ArrowDown />
        </button>
    )
}