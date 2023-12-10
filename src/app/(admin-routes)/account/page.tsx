import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/auth";
import { getServerSession } from "next-auth";

export default async function Account() {
    const session = await getServerSession(nextAuthOptions);

    return (
        <main className="h-full w-full">
            <div className="flex flex-col items-center justify-center my-6 gap-3">
                <h2 className="flex text-3xl font-bold">Configurações da Conta</h2>
                <span>{session.user.name}</span>
                <span>{session.user.userEmail}</span>
            </div>
        </main>
    )
}