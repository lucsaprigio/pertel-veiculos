import { ButtonLogout } from "@/app/Components/ButtonLogout";
import { HomeIcon, Car, User } from "lucide-react";
import Link from "next/link";

interface Props {
    user: string;
    email: string;
}

export function Sidebar({ user, email }: Props) {
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
                <Link href="/painel" className='flex items-center gap-3 text-sm font-semibold text-zinc-200 hover:scale-105 transition-all duration-150'>
                    <HomeIcon />
                    Painel
                </Link>
                <Link href="/painel/register-car" className='flex items-center gap-3 text-sm font-semibold text-zinc-200 hover:scale-105 transition-all duration-150'>
                    <Car />
                    Cadastrar Veículo
                </Link>
                <Link href="/account" className='flex items-center gap-3 text-sm font-semibold text-zinc-200 hover:scale-105 transition-all duration-150'>
                    <User />
                    Minha conta
                </Link>
                <ButtonLogout />
            </nav>
        </aside>
    )
}