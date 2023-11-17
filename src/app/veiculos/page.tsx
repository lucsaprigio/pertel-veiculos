import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Veículos | Pertel Veículos',
    description: 'Pertel',
}

export default function Softwares() {
    return (
        <div className="w-full">
            <input type="text" placeholder='Buscar veículos' />
        </div>
    )
}