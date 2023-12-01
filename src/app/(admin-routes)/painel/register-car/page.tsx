import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route';
import { PlusCircle } from 'lucide-react';
import { getServerSession } from 'next-auth';
import NewCarForm from '../../Components/NewCarForm';

export default async function RegisterCar() {
    const session = await getServerSession(nextAuthOptions);

    return (
        <main className="flex flex-col items-center justify-center w-full h-full px-3 gap-6">
            <div className="w-full flex items-center justify-center my-10">
                <h2 className="flex flex-row items-center justify-center gap-6 text-4xl font-bold"><PlusCircle size={34} /> Cadastrar veículo</h2>
            </div>
            <NewCarForm token={session.user.token} />
        </main>
    )
} 