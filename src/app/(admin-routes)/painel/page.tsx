import { ButtonLogout } from "@/app/Components/ButtonLogout";
import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth"

export default async function Painel() {
    const session = await getServerSession(nextAuthOptions);


    return (
        <div className="flex flex-col">
            <h2>{session.user.id}</h2>
            <h2>{session.user.name}</h2>
            <h2>{session.user.userEmail}</h2>
            <h2>{session.user.token}</h2>   
            <ButtonLogout />
        </div>
    )
}