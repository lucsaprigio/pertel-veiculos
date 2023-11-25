'use client';
import { Menu, Transition } from '@headlessui/react';
import { MenuIcon } from 'lucide-react';
import Link from 'next/link';
import { Fragment } from 'react';

export function MenuDropddown() {
    return (
        <Menu>
            <Menu.Button><MenuIcon className='text-gray-50 aria-hidden:true' size={42} /></Menu.Button>
            <div className="absolute top-0 right-0 mt-14 w-screen rounded-lg px-3 py-3">
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="flex flex-col items-center justify-center bg-red-800 gap-10 p-10">
                        <Menu.Item>
                            {({ active }) => (
                                <div className="flex items-center justify-center rounded-lg bg-red-900 w-full h-10">
                                    <Link href="/" className={`w-full h-full flex items-center justify-center text-center text-gray-50 text-1xl ${active && 'bg-red-850 '}`}>
                                        Home
                                    </Link>
                                </div>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <div className="flex items-center justify-center rounded-lg bg-red-900 w-full h-10">
                                    <Link href="/veiculos" className={`w-full h-full flex items-center justify-center text-center text-gray-50 text-1xl ${active && 'bg-red-850 '}`}>
                                        Veículos
                                    </Link>
                                </div>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <div className="flex items-center justify-center rounded-lg bg-red-900 w-full h-10">
                                    <Link href="/sobre" className={`w-full h-full flex items-center justify-center text-center text-gray-50 text-1xl ${active && 'bg-red-850 '}`}>
                                        Sobre nós
                                    </Link>
                                </div>
                            )}
                        </Menu.Item>
                    </Menu.Items>
                </Transition>
            </div>

        </Menu>
    )
}