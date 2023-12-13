'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useEffect, useState } from 'react';
import { MenuDropddown } from "./MenuDropdown";
import { FaWhatsapp } from 'react-icons/fa'

export function Header() {
    const pathname = usePathname();

    const [prevScrollPos, setPrevScrollPos] = useState(50);
    const [visible, setVisible] = useState(true);
    const [color, setColor] = useState(true);

    function handleScroll() {
        const currentScrollPos = window.scrollY;

        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
        setColor(currentScrollPos <= 600);

        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos, visible]);

    return (
        <>
            <aside className={`relative flex justify-around w-full p-10 h-16 bg-gradient-to-b from-red-800 to-red-700 shadow-xl z-50 ${visible ? 'translate-y-0' : '-translate-y-full transform transition-all duration-200'}`}>
                <nav className="flex flex-row gap-28 justify-center items-center ">
                    <div className="flex w-32 h-20 justify-center ml-3">
                        <Link href="/">
                            <img className="hover:scale-105 duration-200 w-full h-full object-contain" src="/images/logo.svg" alt="Logo" />
                        </Link>
                    </div>
                    <div className="flex gap-20 ml-6 max-[868px]:hidden" >
                        <Link className={`relative overflow-hidden group/link text-gray-100 text-lg hover:font-bold duration-300 ${pathname === '/' ? 'font-bold border-b-bottom border-b-2' : 'font-normal'}`} href="/">
                            Home
                            <span className="absolute -inset-x-12 h-0.5 bottom-0 w-full group-hover/link:border-b-0 group-hover/link:translate-x-full group-hover/link:bg-gray-150 transition-transform duration-700" />
                        </Link>
                        <Link className={`relative overflow-hidden group/link text-gray-100 text-lg hover:text-gray-150 hover:font-bold duration-300 border-gray-50 ${pathname === '/veiculos' ? 'font-bold border-b-bottom border-b-2' : 'font-normal'}`} href={`/veiculos?page=1`}>
                            Veículos
                            <span className="absolute -inset-x-16 h-0.5 bottom-0 w-full group-hover/link:border-b-0 group-hover/link:translate-x-full group-hover/link:bg-gray-150 transition-transform duration-700" />
                        </Link>
                        <Link className={`relative overflow-hidden group/link text-gray-100 text-lg hover:text-gray-150 hover:font-bold duration-300 border-gray-50 ${pathname === '/sobre' ? 'font-bold border-b-bottom border-b-2' : 'font-normal'}`} href="/sobre">
                            Quem somos
                            <span className="absolute -inset-x-28 h-0.5 bottom-0 w-full group-hover/link:border-b-0 group-hover/link:translate-x-full group-hover/link:bg-gray-150 transition-transform duration-700" />
                        </Link>
                    </div>
                </nav>
                <div className="flex flex-row items-center gap-2 justify-center">
                    <FaWhatsapp size={32} className="md:opacity-100 opacity-0 text-gray-50" />
                    <div>
                        <span className="md:opacity-100 opacity-0 flex gap-3 text-gray-50 text-sm text-left">Felipe - (27) 99754-6411</span>
                        <span className="md:opacity-100 opacity-0 flex gap-3 text-gray-50 text-sm text-left">Michel - (27) 99836-6919</span>
                    </div>
                </div>
                <div className="absolute right-0 top-0 mt-5 mr-10 min-[868px]:hidden">
                    <MenuDropddown />
                </div>
            </aside>
            <aside className={`fixed ${color && 'hidden'} flex w-full p-10 h-16 shadow-xl z-50 ${!visible ? 'opacity-0' : '-translate-y-full opacity-100 transform transition-all duration-75'} ${color ? 'bg-transparent' : 'bg-gradient-to-b from-red-800 to-red-700'}`}>
                <nav className="flex flex-row gap-28 justify-center items-center ">
                    <div className="flex w-32 h-20 justify-center ml-3">
                        <Link href="/">
                            <img className="hover:scale-105 duration-200 w-full h-full object-contain" src="/images/logo.svg" alt="Logo" />
                        </Link>
                    </div>
                    <div className="flex gap-20 ml-6 max-[868px]:hidden" >
                        <Link className={`relative overflow-hidden group/link text-gray-100 text-lg hover:font-bold duration-300 ${pathname === '/' ? 'font-bold border-b-bottom border-b-2' : 'font-normal'}`} href="/">
                            Home
                            <span className="absolute -inset-x-12 h-0.5 bottom-0 w-full group-hover/link:border-b-0 group-hover/link:translate-x-full group-hover/link:bg-gray-150 transition-transform duration-700" />
                        </Link>
                        <Link className={`relative overflow-hidden group/link text-gray-100 text-lg hover:text-gray-150 hover:font-bold duration-300 border-gray-50 ${pathname === '/veiculos' ? 'font-bold border-b-bottom border-b-2' : 'font-normal'}`} href={`/veiculos?page=1`}>
                            Veículos
                            <span className="absolute -inset-x-16 h-0.5 bottom-0 w-full group-hover/link:border-b-0 group-hover/link:translate-x-full group-hover/link:bg-gray-150 transition-transform duration-700" />
                        </Link>
                        <Link className={`relative overflow-hidden group/link text-gray-100 text-lg hover:text-gray-150 hover:font-bold duration-300 border-gray-50 ${pathname === '/sobre' ? 'font-bold border-b-bottom border-b-2' : 'font-normal'}`} href="/sobre">
                            Quem somos
                            <span className="absolute -inset-x-28 h-0.5 bottom-0 w-full group-hover/link:border-b-0 group-hover/link:translate-x-full group-hover/link:bg-gray-150 transition-transform duration-700" />
                        </Link>
                    </div>
                </nav>
                <div className="absolute right-0 top-0 mt-5 mr-10 min-[868px]:hidden">
                    <MenuDropddown />
                </div>
            </aside>
        </>
    )

}