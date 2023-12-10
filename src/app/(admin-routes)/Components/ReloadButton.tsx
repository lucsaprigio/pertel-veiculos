'use client'
import { useRouter } from 'next/navigation';
import { RefreshCcw } from 'lucide-react';

export default function ReloadButton() {
    const router = useRouter();

    function handleReload() {
        router.refresh();
    }

    return (
        <button className="hover:scale-105 transition-all duration-150 my-10" onClick={handleReload}>
            <RefreshCcw className="text-red-700" />
        </button>
    )
}