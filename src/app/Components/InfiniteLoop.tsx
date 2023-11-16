export function InfiniteLoop() {
    return (
        <div className="w-full my-3 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-28 [&_img]:max-w-none animate-looping-image">
                <li>
                    <img src="/images/amigao.jpg" alt="Logo-parceiro" className="w-40 object-contain" />
                </li>
                <li>
                    <img src="/images/armazem.jpg" alt="Logo-parceiro" className="w-40 object-contain" />
                </li>
                <li>
                    <img src="/images/fatto.jpg" alt="Logo-parceiro" className="w-40 object-contain" />
                </li>
                <li>
                    <img src="/images/faitanin.jpg" alt="Logo-parceiro" className="w-40 object-contain" />
                </li>
                <li>
                    <img src="/images/face-brasil.jpg" alt="Logo-parceiro" className="w-40 object-contain" />
                </li>
            </ul>
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-28 [&_img]:max-w-none animate-looping-image">
                <li>
                    <img src="/images/amigao.jpg" alt="Logo-parceiro" className="w-40 object-contain" />
                </li>
                <li>
                    <img src="/images/armazem.jpg" alt="Logo-parceiro" className="w-40 object-contain" />
                </li>
                <li>
                    <img src="/images/fatto.jpg" alt="Logo-parceiro" className="w-40 object-contain" />
                </li>
                <li>
                    <img src="/images/faitanin.jpg" alt="Logo-parceiro" className="w-40 object-contain" />
                </li>
                <li>
                    <img src="/images/face-brasil.jpg" alt="Logo-parceiro" className="w-40 object-contain" />
                </li>
            </ul>
        </div>
    )
}