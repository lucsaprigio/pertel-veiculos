import { FaCar, FaCheckCircle } from 'react-icons/fa';
import { PiHandshakeDuotone } from "react-icons/pi";

type Props = {
    title: string;
    description: string;
    iconName: 'car' | 'quality' | 'service'
}

export function BuyCard({ title, description, iconName }: Props) {
    return (
        <div className="flex flex-col h-80 gap-3 items-center justify-center rounded-md px-3 py-3 bg-gradient-to-b from-red-500 to-red-800">
            {iconName === 'car' && <FaCar color="#FFFFFF" size={32} />}
            {iconName === 'quality' && <FaCheckCircle color="#FFFFFF" size={32} />}
            {iconName === 'service' && <PiHandshakeDuotone color="#FFFFFF" size={32} />}

            <strong className="text-gray-50 text-2xl text-justify font-inter">{title}</strong>
            <span className="text-gray-50 text-sm text-justify">{description}</span>
        </div>
    )
}