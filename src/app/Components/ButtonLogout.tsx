'use client';
import { LogOutIcon } from "lucide-react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export function ButtonLogout() {
    const router = useRouter();

    async function logout() {
        await signOut({
            redirect: false
        })

        router.replace('/signin')
    }
    return (
        <button className="flex flex-row gap-2 text-zinc-200"
            onClick={logout}>
            <LogOutIcon className="text-zinc-200" />
            Sair
        </button>
    )
}