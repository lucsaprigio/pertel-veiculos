'use client';
import { LogOutIcon } from "lucide-react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { DialogConfirm } from "./DialogConfirm";
import { useState } from "react";

export function ButtonLogout() {
    const router = useRouter();

    const [isDialogOpen, setIsDialogOpen] = useState(false);

    async function logout() {
        await signOut({
            redirect: false
        })

        router.replace('/signin')
    }

    function handleCloseDialog() {
        setIsDialogOpen(false);
    }

    function handleOpenDialog() {
        setIsDialogOpen(true);
    }

    return (
        <>
            <DialogConfirm
                title="Sair"
                description="Tem certeza que quer sair?"
                okButton="Sair"
                cancelButton="Cancelar"
                onClose={handleCloseDialog}
                showDialog={isDialogOpen}
                source="/images/sair.png"
                actionButton={logout}
            />
            <button className="flex flex-row gap-2 text-zinc-200 hover:scale-105 transition-all duration-150"
                onClick={handleOpenDialog}>
                <LogOutIcon className="text-zinc-200" />
                Sair
            </button>
        </>
    )
}