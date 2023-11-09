import { ReactNode } from 'react';

interface VehicleLayoutProps {
    children: ReactNode
}

export default function VehicleLayout({ children }: VehicleLayoutProps) {
    return (
        <div >
            <h1>Vehicle Layout</h1>
            {children}
        </div>
    )
}