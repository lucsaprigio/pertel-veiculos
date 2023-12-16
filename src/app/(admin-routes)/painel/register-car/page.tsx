import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/auth';
import { PlusCircle } from 'lucide-react';
import { getServerSession } from 'next-auth';
import NewCarForm from '../../Components/NewCarForm';

export default async function RegisterCar() {
    const session = await getServerSession(nextAuthOptions);

    return (
        <main className="flex flex-col items-center justify-center w-full h-full px-3 gap-1">
            <div className="w-full flex items-center justify-center my-4">
                <h2 className="flex flex-row items-center justify-center gap-6 text-2xl font-bold"><PlusCircle size={34} /> Novo veículo</h2>
            </div>
            <NewCarForm token={session.user.token} />
        </main>
    )
} 