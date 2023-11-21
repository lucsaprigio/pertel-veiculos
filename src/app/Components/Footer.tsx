import Link from "next/link";
import { PhoneIcon, Instagram, Facebook, MapPin, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa'

export function Footer() {
    return (
        <footer className="bg-red-700 w-full h-full py-4 px-10">
            <div className="flex flex-col gap-2 items-center justify-center mt-4 border-b-white border-b-bottom border-opacity-80">
                <img src="/images/logo.png" alt="Logo" className="w-40 h-24 bg-cover" />
                <nav className="flex gap-8 text-gray-150 my-3">
                    <Link className="hover:scale-105 transition-all duration-200" href="#">Home</Link>
                    <Link className="hover:scale-105 transition-all duration-200" href="#">Veículos</Link>
                    <Link className="hover:scale-105 transition-all duration-200" href="#">Sobre</Link>
                </nav>
            </div>
            <div className="grid grid-cols-3 items-center justify-center place-content-between py-10 px-32 border-b-white border-b-bottom border-opacity-80">
                <div className="flex flex-row gap-2 items-center justify-center">
                    <Mail color="#FFFFFF" size={20} />
                    <span className="text-gray-150">pertelveiculos@hotmail.com</span>
                </div>
                <div className="flex flex-row gap-2 items-center justify-center">
                    <PhoneIcon color="#FFFFFF" size={20} />
                    <span className="text-gray-150">(27) 99754-6411 </span>
                </div>
                <div className="flex flex-row gap-2 items-center justify-center">
                    <MapPin color="#FFFFFF" size={20} />
                    <span className="text-gray-150">Av. Silvio Avidos, 3025 - São Silvano, Colatina - ES, 29703-100
                    </span>
                </div>
            </div>

            <div className="flex flex-row place-content-between mt-4 h-14 w-full bg-red-700 rounded-lg">
                <div className="flex flex-rows items-center  px-2 gap-4 w-full">
                    <Link className="hover:scale-110 transition-all duration-300" href="https://wa.me/5527997546411" target="blank">
                        <FaWhatsapp color={'#FFFFFF'} size={28} />
                    </Link>
                    <Link className="hover:scale-110 transition-all duration-300" href="https://www.instagram.com/pertelveiculos/" target="blank">
                        <Instagram color={'#FFFFFF'} size={28} />
                    </Link>
                    <Link className="hover:scale-110 transition-all duration-300" href="https://www.facebook.com/pertelveiculos/" target="blank">
                        <Facebook color={'#FFFFFF'} size={28} />
                    </Link>
                </div>
                <div className="flex w-full items-center justify-end px-2">
                    <span className="text-gray-150 text-sm">© 2023 Powered by <Link href="https://www.linkedin.com/in/lucas-aprigio-3b17521a5/" target="blank">Lucas Aprigio </Link></span>
                </div>
            </div>
        </footer >
    )
}