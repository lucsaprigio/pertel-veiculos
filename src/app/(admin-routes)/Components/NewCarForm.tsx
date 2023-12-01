'use client'

import { DialogConfirm } from '@/app/Components/DialogConfirm';
import axios from 'axios';
import { ChangeEvent, SyntheticEvent, useCallback, useState } from 'react';
import Loading from 'react-loading';
import { FileInput } from './FileInput';

interface Props {
    token: string;
}

export default function NewCarForm({ token }: Props) {
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [km, setKm] = useState('');
    const [year, setYear] = useState('');
    const [fuelType, setFueltype] = useState('');
    const [exchange, setExchange] = useState('');
    const [doors, setDoors] = useState('4');
    const [loading, setLoading] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const [titleDialog, setTitleDialog] = useState('');
    const [descriptionDialog, setDescriptionDialog] = useState('');
    const [sourceDialog, setSourceDialog] = useState('');
    const [okButtonDialog, setOkButtonDialog] = useState('');

    const [file, setFile] = useState<File | null>(null);

    const [files, setFiles] = useState<File[] | null>(null);

    const removeFile = useCallback((index: number) => {
        const newFiles = [...(files || [])];
        newFiles.splice(index, 1);
        onDrop(newFiles);
    }, [files]);

    const onDrop = useCallback((files: File[]) => {
        setFiles(files);
    }, []);

    async function handleSubmit(event: SyntheticEvent) {
        try {
            event.preventDefault();

            setLoading(true);
            const formData = new FormData();
            const formDataFiles = new FormData();

            formData.append('description', description.toUpperCase());
            formData.append('price', price.replaceAll('.', ''));
            formData.append('km', km.replaceAll('.', ''));
            formData.append('year', year);
            formData.append('fuelType', fuelType.toUpperCase());
            formData.append('exchange', exchange.toUpperCase());
            formData.append('doors', doors);
            formData.append('file', file);

            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_NODE}/new-car`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`,
                }
            });

            if (files && files.length > 0) {
                files.forEach((file) => {
                    formDataFiles.append('file', file);
                });
            }

            await axios.post(`${process.env.NEXT_PUBLIC_API_NODE}/add-image-car/${response.data.newCar.id}`, formDataFiles, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`,
                }
            });

            setLoading(false);
            setDescription('');
            setPrice('');
            setKm('');
            setYear('');
            setFueltype('');
            setExchange('');
            setFiles(null);

            setIsDialogOpen(true);

            setTitleDialog('Cadastro feito com sucesso!');
            setDescriptionDialog('Deseja continuar cadastrando?');
            setSourceDialog('/images/checked.png');
            setOkButtonDialog('Sim');

        } catch (err) {
            setLoading(false);
            setIsDialogOpen(true);

            setTitleDialog('Ocorreu um erro!');
            setDescriptionDialog('Parece que houve um erro com o servidor, tente novamente.');
            setSourceDialog('/images/cancel.png');
            setOkButtonDialog('Ok');

            console.log(err);
        }
    }

    function test() {
        console.log(files);
    }

    function handleSetYear(value: string) {
        return value
            .replace(/\D/g, "")
            .replace(/(\d{4})(\d)/, "$1/$2")
            .replace(/(\d{4})(\d)/, "$1");
    }

    function handleSetKm(value: string) {
        const sanitizedValue = value.replace(/\D/g, "");

        if (sanitizedValue.length <= 3) {
            return sanitizedValue;
        }

        if (sanitizedValue.length === 4) {
            return `${sanitizedValue.slice(0, 1)}.${sanitizedValue.slice(1)}`;
        }

        if (sanitizedValue.length > 5) {
            return `${sanitizedValue.slice(0, -3)}.${sanitizedValue.slice(-3)}`;
        }

        return sanitizedValue;
    };

    function handleSetPrice(value: string) {
        return value.replace('', '')
    }

    function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
        const selectedFile = e.target.files[0];

        // Verifica se um arquivo foi selecionado
        if (selectedFile) {
            // Verifica se o tipo do arquivo é uma imagem
            if (selectedFile.type.startsWith('image/')) {
                // Faça o que você precisa com o arquivo de imagem
                console.log('Arquivo de imagem selecionado:', selectedFile);
                setFile(selectedFile);
            } else {
                alert('Por favor, selecione um arquivo de imagem.');
                // Limpe o input para evitar que o usuário envie um arquivo incorreto
                e.target.value = null;
            }
        }
    };

    function handleCloseDialog() {
        setIsDialogOpen(false);
    }

    return (
        <main className="flex flex-col items-center justify-center w-full h-full px-3 gap-6">
            <DialogConfirm
                title={titleDialog}
                description={descriptionDialog}
                okButton={okButtonDialog}
                cancelButton="Ir para o Painel"
                showDialog={isDialogOpen}
                source={sourceDialog}
                onClose={handleCloseDialog}
            />
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6 my-10 bg-gray-50 py-10 md:px-32 rounded-lg">
                <div className="w-full gap-1 col-span-2">
                    <span className="text-red-950 font-bold">Descrição*</span>
                    <input className={`w-full h-12 p-2 bg-white border rounded-lg border-red-800 focus:outline-none focus:border-2 ${description && 'border-2'}`}
                        type="text"
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value.toUpperCase())}
                    />
                </div>
                <div className="flex flex-col w-full gap-1">
                    <span className="text-red-950 font-bold">Valor*</span>
                    <input className={`w-full md:w-96 h-12 p-2 bg-transparent border rounded-lg border-red-800 focus:outline-none focus:border-2 ${price && 'border-2'}`}
                        type="text"
                        placeholder="Valor"
                        value={price}
                        onChange={e => setPrice(e.target.value)}

                    />
                </div>
                <div className="flex flex-col w-full gap-1">
                    <span className="text-red-950 font-bold">Quilometragem*</span>
                    <input className={`w-full md:w-96 h-12 p-2 bg-transparent border rounded-lg border-red-800 focus:outline-none focus:border-2 ${km && 'border-2'}`}
                        type="text"
                        placeholder="Quilometragem"
                        value={km}
                        maxLength={6}
                        onChange={e => setKm(handleSetKm(e.target.value))}
                    />
                </div>
                <div className="flex flex-col w-full gap-1">
                    <span className="text-red-950 font-bold">Ano/Modelo*</span>
                    <input className={`w-full md:w-96 h-12 p-2 bg-transparent border rounded-lg border-red-800 focus:outline-none focus:border-2 ${year && 'border-2'}`}
                        type="text"
                        placeholder="Ano/Modelo"
                        value={year}
                        onChange={e => setYear(handleSetYear(e.target.value))}
                    />
                </div>
                <div className="flex flex-col w-full gap-1">
                    <span className="text-red-950 font-bold">Combustível*</span>
                    <input className={`w-full md:w-96 h-12 p-2 bg-transparent border rounded-lg border-red-800 focus:outline-none focus:border-2 ${fuelType && 'border-2'}`}
                        type="text"
                        placeholder="Tipo de Combustível"
                        value={fuelType}
                        onChange={e => setFueltype(e.target.value.toUpperCase())}
                    />
                </div>
                <div className="flex flex-col w-full gap-1">

                    <span className="text-red-950 font-bold">Câmbio*</span>
                    <select className={`w-full md:w-96 h-12 p-2 bg-transparent border rounded-lg border-red-800 focus:outline-none focus:border-2 ${exchange && 'border-2'}`} placeholder="Tipo de Combustível"
                        value={exchange}
                        onChange={e => setExchange(e.target.value)}
                    >
                        <option value="" disabled hidden>Câmbio</option>
                        <option value="automatico" >AUTOMÁTICO</option>
                        <option value="manual">MANUAL</option>
                    </select>
                </div>
                <div className="flex flex-col w-full gap-1">
                    <span className="text-red-950 font-bold">Portas*</span>
                    <input className={`w-full md:w-96 h-12 p-2 bg-transparent border rounded-lg border-red-800 focus:outline-none focus:border-2 ${doors && 'border-2'}`}
                        type="text"
                        placeholder="Portas"
                        value={doors}
                        onChange={e => setDoors(e.target.value)}
                    />
                </div>
                <div className="flex flex-col w-full gap-1 col-span-2">
                    <span className="text-red-950 font-bold">Selecione uma imagem (Imagem principal)*</span>
                    <input className="w-full h-12 p-2 bg-transparent border rounded-lg border-red-800 focus:outline-none focus:border-2"
                        type="file"
                        placeholder="Selecione a imagem principal"
                        accept="image/*"
                        onChange={handleFileChange}
                    />
                </div>

                <div className="w-full h-80 col-span-2 flex items-center justify-center">
                    <FileInput
                        files={files}
                        onDrop={onDrop}
                        removeFile={removeFile}
                    />
                </div>

                <div className="flex flex-col w-full gap-1 col-span-2">
                    <button
                        className="flex items-center justify-center text-gray-50 bg-red-800 hover:brightness-90 transition-all duration-100 rounded-lg p-6"
                        type='submit'>
                        {
                            loading ? (
                                <Loading type='spin' width={32} height={32} />
                            ) : (
                                <span>Cadastrar</span>
                            )
                        }
                    </button>
                </div>
            </form >
        </main >
    )
} 