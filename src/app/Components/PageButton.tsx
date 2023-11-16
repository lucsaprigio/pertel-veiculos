'use client';

import { ArrowCircleRight } from "@phosphor-icons/react";

export function PageButton() {
    return (
        <button className="flex flex-row w-96 items-center justify-around h-11 px-4 bg-blue-700 rounded-md text-gray-200 hover:scale-105 duration-100">
            <span className="text-gray-100 text-justify text-lg">Conheça nossas soluções</span>
            <ArrowCircleRight size={36} />
        </button>
    )
}