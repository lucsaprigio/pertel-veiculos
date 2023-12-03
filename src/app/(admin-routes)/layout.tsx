import { getServerSession } from "next-auth";
import { ReactNode } from "react";
import { nextAuthOptions } from "../api/auth/[...nextauth]/auth";
import { redirect } from "next/navigation";
import { Sidebar } from "./Components/Sidebar";

interface PrivateLayoutProps {
    children: ReactNode
}

export default async function PrivateLayout({ children }: PrivateLayoutProps) {
    const session = await getServerSession(nextAuthOptions);

    if (!session) {
        redirect('/signin')
    }

    return (
        <main className="flex flex-row h-full">
            <Sidebar user={session.user.name} email={session.user.userEmail} />
            {children}
        </main>
    )
}