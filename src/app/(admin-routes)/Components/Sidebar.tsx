'use client'
import { ButtonLogout } from "@/app/Components/ButtonLogout";
import { HomeIcon, Car, User } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface Props {
    user: string;
    email: string;
}

export function Sidebar({ user, email }: Props) {
    const pathname = usePathname();

    return (
        <aside className="flex flex-col gap-10 md:w-64 bg-red-800 p-6" >
            <div className="flex flex-col h-34 gap-1">
                <span className="text-lg text-zinc-200">
                    Bem-vindo, <br />
                    {user}
                </span>
                <span className="text-sm text-zinc-200">{email}</span>
            </div>
            <nav className="space-y-8 my-2">
                <Link href="/painel" className={`flex items-center gap-3 text-sm text-zinc-200 hover:scale-105 transition-all duration-150 ${pathname === '/painel' ? 'font-bold text-md' : 'font-normal'}`}>
                    <HomeIcon />
                    Painel
                </Link>
                <Link href="/painel/register-car" className={`flex items-center gap-3 text-sm text-zinc-200 hover:scale-105 transition-all duration-150 ${pathname === '/painel/register-car' ? 'font-bold text-md' : 'font-normal'}`}>
                    <Car />
                    Cadastrar Veículo
                </Link>
                <Link href="/painel/account" className={`flex items-center gap-3 text-sm text-zinc-200 hover:scale-105 transition-all duration-150 ${pathname === '/painel/account' ? 'font-bold text-md' : 'font-normal'}`}>
                    <User />
                    Minha conta
                </Link>
                <ButtonLogout />
            </nav>
        </aside>
    )
}