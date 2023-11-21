'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from 'react';

export function Header() {
    const pathname = usePathname();

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    function handleScroll() {
        const currentScrollPos = window.scrollY;

        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        console.log(pathname)
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos, visible]);

    return (
        <aside className={`flex w-full p-10 h-16 shadow-xl bg-gradient-to-b from-red-700 to-red-700 z-50 ${visible ? 'translate-y-0' : '-translate-y-full transform transition-all duration-200'}`}>
            <nav className="flex flex-row gap-28 justify-center items-center">
                <div className="flex w-32 h-20 justify-center ml-3">
                    <Link href="/">
                        <img className="hover:scale-105 duration-200 w-full h-full object-contain" src="/images/logo.svg" alt="Logo" />
                    </Link>
                </div>
                <div className="flex gap-20 ml-6" >
                    <Link className={`relative overflow-hidden group/link text-gray-100 text-lg hover:font-bold duration-300 ${pathname === '/' ? 'font-bold border-b-bottom border-b-2' : 'font-normal'}`} href="/">
                        Home
                        <span className="absolute -inset-x-12 h-0.5 bottom-0 w-full group-hover/link:border-b-0 group-hover/link:translate-x-full group-hover/link:bg-gray-150 transition-transform duration-700" />
                    </Link>
                    <Link className={`relative overflow-hidden group/link text-gray-100 text-lg hover:text-gray-150 hover:font-bold duration-300 border-gray-50 ${pathname === '/veiculos' ? 'font-bold border-b-bottom border-b-2' : 'font-normal'}`} href="/veiculos">
                        Veículos
                        <span className="absolute -inset-x-16 h-0.5 bottom-0 w-full group-hover/link:border-b-0 group-hover/link:translate-x-full group-hover/link:bg-gray-150 transition-transform duration-700" />
                    </Link>
                    <Link className={`relative overflow-hidden group/link text-gray-100 text-lg hover:text-gray-150 hover:font-bold duration-300 border-gray-50 ${pathname === '/sobre' ? 'font-bold border-b-bottom border-b-2' : 'font-normal'}`} href="/sobre">
                        Quem somos
                        <span className="absolute -inset-x-12 h-0.5 bottom-0 w-full group-hover/link:border-b-0 group-hover/link:translate-x-full group-hover/link:bg-gray-150 transition-transform duration-700" />
                    </Link>
                </div>
            </nav>
        </aside >
    )

}