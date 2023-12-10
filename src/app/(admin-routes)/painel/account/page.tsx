import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/auth";
import { getServerSession } from "next-auth";
import UpdateUserForm from "../../Components/UpdateUserForm";

export default async function Account() {
    const session = await getServerSession(nextAuthOptions);

    return (
        <main className="h-screen w-full">
            <div className="mx-20 my-6">
                <UpdateUserForm
                    email={session.user.userEmail}
                    name={session.user.name}
                    token={session.user.token}
                    id={session.user.id}
                />
            </div>
        </main>
    )
}