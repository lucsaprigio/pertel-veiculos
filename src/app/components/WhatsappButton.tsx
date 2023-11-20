import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

export function WhatsappButton() {
    return (
        <Link href="https://wa.me/5527997546411" target='blank'>
            <div className="fixed group mb-12 mr-10 bottom-0 right-0 rounded-full bg-red-700 p-2 z-10 hover:scale-105 duration-200">
                <span className="absolute max-w-0 max-h-0 w-0 mt-3 pl-2 opacity-0 rounded-md text-white bg-red-700 overflow-hidden group-hover:max-h-max group-hover:max-w-xs group-hover:w-36 group-hover:opacity-100 group-hover:-translate-x-40 inset-x-0 transform transition-all duration-100 ease-linear">
                    Entre em contato!
                </span>
                <div className="w-4 h-4 absolute top-0 right-0 rounded-full bg-gray-150 animate-ping"></div>
                <div className="w-4 h-4 absolute top-0 right-0 rounded-full bg-gray-150"></div>
                <FaWhatsapp color={"#ffffff"} size={38} />
            </div>
        </Link>
    )
}