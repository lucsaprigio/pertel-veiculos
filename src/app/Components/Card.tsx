interface Props {
    title: string;
    children: React.ReactNode;
    source: string;
    alt: string;
}

export function Card({ title, children, source, alt }: Props) {
    return (
        <div className="grid grid-rows-2 bg-gradient-to-b from-gray-100 to-blue-200 shadow-lg rounded-sm w-full h-96 p-6 hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-center w-full h-14">
                <img className="object-contain w-14 h-14" src={source} alt={alt} />
            </div>
            <div className="grid grid-rows-2 items-center justify-center w-full h-32 p-6">
                    <strong className="flex items-center justify-center mb-48">{title}</strong>
                    <span className="text-justify">{children}</span>
            </div>
        </div>
    )
}