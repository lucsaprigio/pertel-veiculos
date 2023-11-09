import { ReactNode } from 'react';
import { Header } from '../Components/Header';

interface RouteLayout {
    children: ReactNode
}

export default function RouteLayout({ children }: RouteLayout) {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}