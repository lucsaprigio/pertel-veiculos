'use client';
import { Rocket, Star, Eye } from 'lucide-react';

interface Props {
    mission: string;
    vision: string;
    values: string;
}

export function SomePoints({ mission, vision, values }: Props) {
    return (
        <div className="flex flex-col items-center justify-center gap-12">
            <div className="flex flex-col items-center justify-center mt-8 lg:mt-0 lg:grid lg:grid-cols-2">
                <Rocket className="text-red-700 border-4 rounded-full mx-44 md:ml-36 p-2 border-red-700" size={120} />
                <span className="text-center md:text-justify text-lg"><strong>Missão:</strong> {mission}</span>
            </div>
            <div className="flex flex-col items-center justify-center mt-8 lg:mt-0 lg:grid lg:grid-cols-2">
                <Eye className="text-red-700 border-4 rounded-full mx-44 md:ml-36 p-2 border-red-700" size={120} />
                <span className="text-center md:text-justify text-lg"><strong>Visão:</strong> {vision}</span>
            </div>
            <div className="flex flex-col items-center justify-center mt-8 lg:mt-0 lg:grid lg:grid-cols-2">
                <Star className="text-red-700 border-4 rounded-full mx-44 md:ml-36 p-2 border-red-700" size={120} />
                <span className="text-center md:text-justify text-lg"><strong>Valores:</strong> {values}</span>
            </div>
        </div>
    )
}