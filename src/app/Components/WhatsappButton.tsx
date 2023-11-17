'use client'
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

export function WhatsappButton() {
    return (
        <Link href="https://wa.me/5527997546411">
            <div className="fixed mb-12 mr-10 bottom-0 right-0 rounded-full bg-red-700 p-2 z-50 hover:scale-105 duration-200">
                <span>Entre em contato!</span>
                <div className="w-4 h-4 absolute top-0 right-0 rounded-full bg-gray-150 animate-ping"></div>
                <div className="w-4 h-4 absolute top-0 right-0 rounded-full bg-gray-150"></div>
                <FaWhatsapp color={"#ffffff"} size={38} />
            </div>
        </Link>
    )
}