import Link from "next/link";

export function Header() {
    return (
        <aside className="fixed bg-transparent shadow w-full h-20 items-center px-8">
            <div>
                <span>Logo</span>
            </div>
            <nav className="flex gap-10  w-full items-center justify-center ml-20">
                <Link href="/">Home</Link>
                <Link href="/vehicles">Veículos</Link>
                <a href="#">Home</a>
                <a href="#">Sobre</a>
            </nav>
        </aside>
    );
}