'use client'

import { DialogConfirm } from '@/app/Components/DialogConfirm';
import { ChangeEvent, useCallback, useState } from 'react';
import Loading from 'react-loading';
import { Trash2 } from 'lucide-react';
import { FileInput } from './FileInput';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { api } from '@/app/axios/api';

interface Props {
    id: string;
    token: string;
    description: string;
    price: string;
    source: string;
    km: string;
    year: string;
    fuelType: string;
    exchange: string;
    doors: string;
    imageCars: Array<any>
}

type UpdateCarFormData = z.infer<typeof createCarFormSchema>;

const createCarFormSchema = z.object({
    description: z.string().min(5, 'Preencha a descrição').transform(description => {
        return description.toLocaleUpperCase()
    }),
    price: z.string().min(1, 'Preço obrigatório').transform(price => { return price.replaceAll('R$', '').replaceAll('.', '').replaceAll(',', '.') }),
    km: z.string().min(1, 'Preencha a Quilometragem').transform(km => {
        const numericValue = parseFloat(km.replace(/\./g, '')) || 0;
        return numericValue.toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
    }),
    year: z.string().min(1, 'Preencha o Ano/modelo'),
    fuelType: z.string().min(1, 'Preencha o tipo de Combustível').toUpperCase(),
    exchange: z.string().min(1, 'Preencha o Câmbio').toUpperCase(),
    doors: z.string().min(1, 'Campo obrigatório').regex(/^\d+$/),
    file: z.instanceof(FileList).transform(list => list.item(0))
})

export default function UpdateCarForm({ description, doors, exchange, fuelType, km, price, year, token, id, imageCars, source }: Props) {
    const route = useRouter();
    const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm<UpdateCarFormData>({
        resolver: zodResolver(createCarFormSchema),
        defaultValues: {
            description: description,
            price: price,
            exchange: exchange,
            fuelType: fuelType,
            year: year,
            km: km,
            doors: doors
        }
    });

    const [loading, setLoading] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const [titleDialog, setTitleDialog] = useState('');
    const [descriptionDialog, setDescriptionDialog] = useState('');
    const [sourceDialog, setSourceDialog] = useState('');
    const [okButtonDialog, setOkButtonDialog] = useState('');

    const [file, setFile] = useState<File | null>(null);

    const [files, setFiles] = useState<File[] | null>(null);
    const [imagePreview, setImagePreview] = useState(null);

    const removeFile = useCallback((index: number) => {
        const newFiles = [...(files || [])];
        newFiles.splice(index, 1);
        onDrop(newFiles);
    }, [files]);

    const onDrop = useCallback((files: File[]) => {
        setFiles(files);
    }, []);

    async function handleUpdateCar(data: UpdateCarFormData) {
        try {
            setLoading(true);
            const formData = new FormData();
            const formDataFiles = new FormData();

            formData.append('description', data.description.toLocaleUpperCase());
            formData.append('price', data.price);
            formData.append('km', data.km.replaceAll('.', ''));
            formData.append('year', data.year);
            formData.append('fuelType', data.fuelType.toUpperCase());
            formData.append('exchange', data.exchange.toUpperCase());
            formData.append('doors', data.doors);
            formData.append('file', data.file);

            console.log(data)

            const response = await api.put(`${process.env.NEXT_PUBLIC_API_NODE}/update-car/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`,
                }
            });

            if (files && files.length > 0) {
                files.forEach((file) => {
                    formDataFiles.append('file', file);
                });

                await api.post(`${process.env.NEXT_PUBLIC_API_NODE}/add-image-car/${response.data.id}`, formDataFiles, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${token}`,
                    }
                });
            }

            setIsDialogOpen(true);

            setTitleDialog('Veículo atualizado com sucesso!');
            setDescriptionDialog('');
            setSourceDialog('/images/checked.png');
            setOkButtonDialog('Voltar para o painel');
            setLoading(false);
            setFiles(null);
            reset();
        } catch (err) {
            setLoading(false);
            setIsDialogOpen(true);

            console.log(err)
            setTitleDialog('Ocorreu um erro!');
            setDescriptionDialog('Parece que houve um erro com o servidor, tente novamente.');
            setSourceDialog('/images/cancel.png');
            setOkButtonDialog('Fechar');

        }
    }

    function handlePushPainel() {
        route.push('/painel');
    }

    async function handheDeleteImageCar(carId: string) {
        try {
            api.delete(`/del-image-car/${carId}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            })
                .then(() => {
                    route.refresh();
                })
                .catch((response) => {
                    if (response.response.status === 401) {
                        setIsDialogOpen(true);

                        setTitleDialog('Sessão expirada');
                        setDescriptionDialog('Inicie uma nova sessão');
                        setSourceDialog('/images/cancel.png');
                        setOkButtonDialog('Ok');
                        setLoading(false);
                    }
                });
        } catch (err) {
            return null
        }
    };

    async function handleDeleteCar() {
        try {
            setLoading(true);

            await axios.delete(`${process.env.NEXT_PUBLIC_API_NODE}/delete-car/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            })
                .then(() => {
                    setIsDialogOpen(true);

                    setTitleDialog('Veículo excluído!');
                    setDescriptionDialog('');
                    setSourceDialog('/images/checked.png');
                    setOkButtonDialog('Voltar para o painel');
                    setLoading(false);
                    reset();
                    setTimeout(() => {
                        route.push('/painel')
                    }, 3000);
                }).catch((response) => {
                    setIsDialogOpen(true);
                    setTitleDialog('Ocorreu um erro ao excluir.');
                    setDescriptionDialog('');
                    setSourceDialog('/images/cancel.png');
                    setOkButtonDialog('Fechar');
                    setLoading(false);
                })
        } catch (err) {
            setIsDialogOpen(true);
            setTitleDialog('Ocorreu um erro interno!');
            setDescriptionDialog('Entre em contato conosco para mais informações');
            setSourceDialog('/images/cancel.png');
            setOkButtonDialog('Sim');
            setLoading(false);
        }
    };

    function handleImageChange(e: any) {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                setImagePreview(reader.result);
            };

            reader.readAsDataURL(file);
        }
    }

    function handleSetYear(value: any) {
        return value
            .replace(/\D/g, "")
            .replace(/(\d{4})(\d)/, "$1/$2")
            .replace(/(\d{4})(\d)/, "$1");
    };

    function handleSetKm(value: any) {
        const numericValue = parseFloat(value.replace(/[^\d]/g, '')) || 0;
        const formattedValue = numericValue.toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
        return formattedValue;
    };

    function handleInputChange(e: any) {
        e.target.value = e.target.value.toUpperCase()
    }

    function handleSetPrice(value: any) {
        // Remove não números e formata como dinheiro
        value = parseFloat(value.replace(/\D/g, ''));
        const formattedValue = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(value / 100); // Divida por 100 para considerar os centavos

        value = formattedValue

        return formattedValue
    }

    function handleCloseDialog() {
        setIsDialogOpen(false);
    }

    return (
        <main className="flex flex-col items-center justify-center w-full h-full px-3 gap-6">
            <DialogConfirm
                title={titleDialog}
                description={descriptionDialog}
                okButton={okButtonDialog}
                showDialog={isDialogOpen}
                source={sourceDialog}
                actionButton={handlePushPainel}
            />
            <form onSubmit={handleSubmit(handleUpdateCar)} className="grid grid-cols-2 gap-6 my-10 bg-gradient-to-b from-gray-100 to-gray-50 py-10 md:px-32 rounded-lg">
                <div className="w-full max-h-28">
                    <img className="object-cover w-32 h-32 rounded-full" src={`${process.env.NEXT_PUBLIC_S3_URL}/${source}`} alt="Imagem Principal" />
                </div>
                <div className="w-full gap-1 col-span-2">
                    <span className="text-red-950 font-bold">Descrição*</span>
                    <input className={`w-full h-12 bg-transparent p-2 border rounded-lg border-red-800 focus:outline-none focus:border-2 placeholder:opacity-50`}
                        type="text"
                        placeholder="Descrição"
                        {...register('description', {
                            onChange: handleInputChange
                        })}
                    />
                    {errors.description && (<span className="text-red-700 text-sm">{errors.description.message}</span>)}
                </div>
                <div className="flex flex-col w-full gap-1">
                    <span className="text-red-950 font-bold">Valor*</span>
                    <input
                        className={`w-full md:w-96 h-12 p-2 bg-transparent border rounded-lg border-red-800 focus:outline-none focus:border-2 placeholder:opacity-50`}
                        type="text"
                        placeholder="Valor"
                        {...register('price', {
                            onChange: (e) => {
                                const formattedValue = handleSetPrice(e.target.value);
                                setValue('price', formattedValue, { shouldValidate: false })
                            }
                        })}
                    />
                    {errors.price && (<span className="text-red-700 text-sm">{errors.price.message}</span>)}
                </div>
                <div className="flex flex-col w-full gap-1">
                    <span className="text-red-950 font-bold">Quilometragem*</span>
                    <input className={`w-full md:w-96 h-12 p-2 bg-transparent border rounded-lg border-red-800 focus:outline-none focus:border-2 placeholder:opacity-50`}
                        type="text"
                        placeholder="Quilometragem"
                        maxLength={7}
                        {...register('km', {
                            onChange: (e: any) => {
                                const formattedValue = handleSetKm(e.target.value);
                                setValue('km', formattedValue, { shouldValidate: true });
                            }
                        })}
                    />
                    {errors.km && (<span className="text-red-700 text-sm">{errors.km.message}</span>)}
                </div>
                <div className="flex flex-col w-full gap-1">
                    <span className="text-red-950 font-bold">Ano/Modelo*</span>
                    <input className={`w-full md:w-96 h-12 p-2 bg-transparent border rounded-lg border-red-800 focus:outline-none focus:border-2 placeholder:opacity-50`}
                        type="text"
                        placeholder="Ano/Modelo"
                        {...register('year', {
                            onChange: (e: any) => {
                                const formattedValue = handleSetYear(e.target.value);
                                setValue('year', formattedValue, { shouldValidate: true });
                            }
                        })}
                    />
                    {errors.year && (<span className="text-red-700 text-sm">{errors.year.message}</span>)}
                </div>
                <div className="flex flex-col w-full gap-1">
                    <span className="text-red-950 font-bold">Combustível*</span>
                    <input className={`w-full md:w-96 h-12 p-2 bg-transparent border rounded-lg border-red-800 focus:outline-none focus:border-2 placeholder:opacity-50`}
                        type="text"
                        placeholder="Tipo de Combustível"
                        {...register('fuelType', {
                            onChange: handleInputChange
                        })}
                    />
                    {errors.fuelType && (<span className="text-red-700 text-sm">{errors.fuelType.message}</span>)}
                </div>
                <div className="flex flex-col w-full gap-1">
                    <span className="text-red-950 font-bold">Câmbio*</span>
                    <select className={`w-full md:w-96 h-12 p-2 bg-transparent border rounded-lg border-red-800 focus:outline-none focus:border-2 placeholder:opacity-50`} placeholder="Tipo de Combustível"
                        {...register('exchange')}
                    >
                        <option value="" disabled hidden>Câmbio</option>
                        <option value="automatico" >AUTOMÁTICO</option>
                        <option value="manual">MANUAL</option>
                    </select>
                </div>
                <div className="flex flex-col w-full gap-1">
                    <span className="text-red-950 font-bold">Portas*</span>
                    <input className={`w-full md:w-96 h-12 p-2 bg-transparent border rounded-lg border-red-800 focus:outline-none focus:border-2 placeholder:opacity-50`}
                        type="text"
                        maxLength={1}
                        placeholder="Portas"
                        {...register('doors', {
                            onChange: (e) => {
                                setValue('doors', e.target.value)
                            }
                        })}
                    />
                </div>

                <div className="flex flex-row w-full h-32 gap-2">
                    {
                        imageCars && imageCars.map((item, index) => (
                            <button key={index} onClick={() => handheDeleteImageCar(item.id)} type="button" className="relative flex items-center justify-center w-20 h-20 group">
                                <img className="w-full h-full object-cover group-hover:shadow-2xl group-hover:opacity-50 transition-all duration-200 rounded-lg" src={`${process.env.NEXT_PUBLIC_S3_URL}/${item.source}`} alt={`item.source`} />
                                <Trash2 className='absolute opacity-0 w-10 h-10 text-red-600 group-hover:opacity-100 transition-all duration-200' />
                            </button>
                        ))
                    }
                </div>
                <div className="flex flex-col w-full gap-1 col-span-2">
                    <span className="text-red-950 font-bold">Selecione uma Imagem para vitrine*</span>
                    <input className="w-full h-12 p-2 bg-transparent border rounded-lg border-red-800 focus:outline-none focus:border-2"
                        type="file"
                        placeholder="Selecione a imagem principal"
                        accept="image/*"
                        {...register('file', {
                            onChange: (e) => {
                                handleImageChange(e)
                            }
                        })}
                    />
                    {
                        imagePreview && (
                            <div className="flex flex-col items-center justify-center  mt-4 bg-gray-100 rounded-lg p-4">
                                <span className='text-sm text-blue-700 '>Imagem selecionada para Vitrine!</span>
                                <img
                                    src={imagePreview}
                                    alt="Preview"
                                    className="mt-2 w-36 h-36 object-cover rounded-lg"
                                />
                            </div>
                        )
                    }
                </div>
                <div className="w-full h-80 col-span-2 flex items-center justify-center">
                    <FileInput
                        files={files}
                        onDrop={onDrop}
                        removeFile={removeFile}
                    />
                </div>

                <div className="flex flex-col items-center justify-center w-full gap-2 col-span-2">
                    <button
                        className="flex w-full items-center justify-center text-gray-50 bg-red-800 hover:brightness-90 transition-all duration-100 rounded-lg p-6"
                        type='submit'>
                        {
                            loading ? (
                                <Loading type='spin' width={32} height={32} />
                            ) : (
                                <span>Atualizar</span>
                            )
                        }
                    </button>
                    <button
                        className="flex w-full items-center justify-center text-gray-50 bg-red-700 hover:brightness-90 transition-all duration-100 rounded-lg p-6"
                        type='button'
                        onClick={handleDeleteCar}
                    >
                        {
                            loading ? (
                                <Loading type='spin' width={32} height={32} />
                            ) : (
                                <span>Excluir</span>
                            )
                        }
                    </button>
                </div>
            </form>
        </main>
    )
} 