import Image from "next/image";

export function InfiniteLoop() {
    return (
        <div className="w-full my-8 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-28 [&_img]:max-w-none animate-looping-image">
                <li>
                    <Image id="img" width={100} height={100} objectFit="contain" src="/images/chevrolet.png" alt="Logo-parceiro" />
                </li>
                <li>
                    <Image id="img" width={100} height={100} objectFit="contain" src="/images/fiat.png" alt="Logo-parceiro" />
                </li>
                <li>
                    <Image id="img" width={100} height={100} objectFit="contain" src="/images/ford.svg" alt="Logo-parceiro" />
                </li>
                <li>
                    <Image id="img" width={100} height={100} objectFit="contain" src="/images/renault.png" alt="Logo-parceiro" />
                </li>
                <li>
                    <Image id="img" width={100} height={100} objectFit="contain" src="/images/volkswagen.png" alt="Logo-parceiro" />
                </li>
                <li>
                    <Image id="img" width={100} height={100} objectFit="contain" src="/images/nissan.png" alt="Logo-parceiro" />
                </li>
                <li>
                    <Image id="img" width={100} height={100} objectFit="contain" src="/images/hyundai.png" alt="Logo-parceiro" />
                </li>
            </ul>
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-28 [&_img]:max-w-none animate-looping-image">
                <li>
                    <Image id="img" width={100} height={100} objectFit="contain" src="/images/chevrolet.png" alt="Logo-parceiro" />
                </li>
                <li>
                    <Image id="img" width={100} height={100} objectFit="contain" src="/images/fiat.png" alt="Logo-parceiro" />
                </li>
                <li>
                    <Image id="img" width={100} height={100} objectFit="contain" src="/images/ford.svg" alt="Logo-parceiro" />
                </li>
                <li>
                    <Image id="img" width={100} height={100} objectFit="contain" src="/images/renault.png" alt="Logo-parceiro" />
                </li>
                <li>
                    <Image id="img" width={100} height={100} objectFit="contain" src="/images/volkswagen.png" alt="Logo-parceiro" />
                </li>
                <li>
                    <Image id="img" width={100} height={100} objectFit="contain" src="/images/nissan.png" alt="Logo-parceiro" />
                </li>
                <li>
                    <Image id="img" width={100} height={100} objectFit="contain" src="/images/hyundai.png" alt="Logo-parceiro" />
                </li>
            </ul>
        </div>
    )
}