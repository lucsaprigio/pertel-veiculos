'use client'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

interface Props {
    title: string;
    description: string;
    okButton: string;
    cancelButton?: string;
    onClose: () => void;
    source: string;
    showDialog: boolean;
}

export function DialogConfirm({ description, source, okButton, cancelButton, title, onClose, showDialog = false }: Props) {
    const [isOpen, setIsOpen] = useState(true);

    function handleClose() {
        setIsOpen(false);
        showDialog = false;
        onClose();
    }

    return (
        <Dialog open={showDialog} onClose={handleClose} className="relative z-50">
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                <Dialog.Panel>
                    <div className="flex flex-col items-center justify-center bg-gray-50 rounded-lg p-16 gap-6">

                        <img className="object-contain w-20 h-20" src={source} alt="Checked" />
                        <Dialog.Title className="text-2xl font-bold">{title}</Dialog.Title>
                        <Dialog.Description>
                            {description}
                        </Dialog.Description>

                        <div className="grid grid-cols-2 items-center justify-center gap-3">
                            <div className="w-full">
                                <button className="w-full bg-red-800 text-gray-50 p-1 rounded-lg hover:brightness-90 transition-all duration-150" onClick={() => handleClose()}>{okButton}</button>
                            </div>
                            <div className="w-full">
                                <button className="w-full bg-red-800 text-gray-50 p-1 rounded-lg hover:brightness-90 transition-all duration-150" onClick={() => handleClose()}>{cancelButton}</button>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </div>
        </Dialog>
    )
}