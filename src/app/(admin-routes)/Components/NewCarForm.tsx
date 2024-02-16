'use client'

import { DialogConfirm } from '@/app/Components/DialogConfirm';
import { useCallback, useState } from 'react';
import Loading from 'react-loading';
import { FileInput } from './FileInput';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { api } from '@/app/axios/api';
import { useRouter } from 'next/navigation';
import { Edit } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';
import { hash } from 'bcryptjs';

interface Props {
    token: string;
}

type CreateCarFormData = z.infer<typeof createCarFormSchema>;

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

)

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

export default function NewCarForm({ token }: Props) {
    const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm<CreateCarFormData>({
        resolver: zodResolver(createCarFormSchema),
        defaultValues: {
            fuelType: 'ÁLCOOL/GASOLINA',
            doors: '4'
        }
    });
    const router = useRouter();

    const [loading, setLoading] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const [titleDialog, setTitleDialog] = useState('');
    const [descriptionDialog, setDescriptionDialog] = useState('');
    const [sourceDialog, setSourceDialog] = useState('');
    const [okButtonDialog, setOkButtonDialog] = useState('');

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

    async function handleRegisterCar(data: CreateCarFormData) {
        try {
            setLoading(true);
            const dateCreated = new Date().toISOString();
            const dateUpdated = new Date().toISOString();

            const hashFile = await hash(data.file.name, 8);

            const dataForm = {
                description: data.description.toLocaleUpperCase(),
                price: data.price,
                km: data.km.replaceAll('.', ''),
                year: data.year,
                fuelType: data.fuelType.toUpperCase(),
                exchange: data.exchange.toUpperCase(),
                doors: data.doors,
                source: `${hashFile}_${data.file.name}`.replace(/[\/-\s]/g, ''),
                created_at: dateCreated,
                updated_at: dateUpdated
            }

            // Envia a imagem para o supabase
            const { error } = await supabase.storage
                .from('images')
                .upload(dataForm.source, data.file)

            if (error) {
                console.log(error);
            }

            const response = await api.post(`/new-car`, dataForm, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });

            const fileNamesArray = [];

            if (files && files.length > 0) {
                for (let i = 0; i < files.length; i++) {
                    const hashedFileName = await hash(files[i].name, 8);

                    const sanitizedHash = `${hashedFileName.replace(/[\/-\s]/g, '')}_${files[i].name.replace(/[\/-\s]/g, '')}`;
                    console.log(sanitizedHash);

                    fileNamesArray.push(sanitizedHash);

                    await supabase.storage.from('images').upload(sanitizedHash, files[i]);
                }
            }

            await api.post(`/add-image-car/${response.data.newCar.id}`, {
                source: fileNamesArray
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            });

            setIsDialogOpen(true);

            setTitleDialog('Cadastro feito com sucesso!');
            setDescriptionDialog('Deseja continuar cadastrando?');
            setSourceDialog('/images/checked.png');
            setOkButtonDialog('Ir para o painel');
            setLoading(false);

            reset();
            setFiles(null);
        } catch (err) {
            setLoading(false);
            setIsDialogOpen(true);

            setTitleDialog('Ocorreu um erro!');
            setDescriptionDialog('Parece que houve um erro com o servidor, tente novamente.');
            setSourceDialog('/images/cancel.png');
            setOkButtonDialog('Ok');
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

    function handleGoPainel() {
        router.push('/painel')
    }

    function handleSetDoors(value: string) {
        return value.replace(/\D/g, '');
    }


    return (
        <main className="flex flex-col items-center justify-center w-full h-full px-3 gap-6">
            <DialogConfirm
                title={titleDialog}
                description={descriptionDialog}
                okButton={okButtonDialog}
                cancelButton="Sim"
                showDialog={isDialogOpen}
                source={sourceDialog}
                onClose={handleCloseDialog}
                actionButton={handleGoPainel}
            />
            <form onSubmit={handleSubmit(handleRegisterCar)} className="grid grid-cols-2 gap-6 my-10 bg-gray-50 py-10 md:px-28 rounded-lg">
                <label htmlFor="inputFile" className="block">
                    <span className="text-red-950 font-bold">Imagem para vitrine*</span>
                    {imagePreview ? (
                        <div className="relative flex items-center justify-center w-32 h-32 rounded-full group cursor-pointer">
                            <img
                                className="object-cover w-32 h-32 group-hover:shadow-2xl group-hover:opacity-50 transition-all duration-200 rounded-full"
                                src={imagePreview}
                                alt="Preview"
                            />
                            <Edit className='absolute opacity-0 w-8 h-8 text-red-850 group-hover:opacity-100 transition-all duration-200' />
                        </div>
                    ) : (
                        <div className="relative flex items-center justify-center w-32 h-32 rounded-full group cursor-pointer">
                            <img className="object-contain opacity-70 group-hover:shadow-2xl group-hover:opacity-50 transition-all duration-200" src='/images/gallery.png' alt={`item.source`} />
                            <Edit className='absolute opacity-0 w-8 h-8 text-red-850 group-hover:opacity-100 transition-all duration-200' />
                        </div>
                    )}
                </label>
                <input id="inputFile" className="w-full h-12 p-2 bg-transparent border rounded-lg border-red-800 focus:outline-none focus:border-2 hidden"
                    type="file"
                    placeholder="Selecione a imagem principal"
                    accept="image/*"
                    {...register('file', {
                        onChange: (e) => {
                            handleImageChange(e)
                        }
                    })}
                />
                <div className="w-full gap-1 col-span-2">
                    <span className="text-red-950 font-bold">Descrição*</span>
                    <input className={`w-full h-12 p-2 bg-white border rounded-lg border-red-800 focus:outline-none focus:border-2 placeholder:opacity-50`}
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
                        className={`w-full xl:w-96 h-12 p-2 bg-transparent border rounded-lg border-red-800 focus:outline-none focus:border-2 placeholder:opacity-50`}
                        type="text"
                        placeholder="R$ 0,00"
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
                    <input className={`w-full xl:w-96 h-12 p-2 bg-transparent border rounded-lg border-red-800 focus:outline-none focus:border-2 placeholder:opacity-50`}
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
                    <input className={`w-full xl:w-96  h-12 p-2 bg-transparent border rounded-lg border-red-800 focus:outline-none focus:border-2 placeholder:opacity-50`}
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
                    <input className={`w-full h-12 p-2 bg-transparent border rounded-lg border-red-800 focus:outline-none focus:border-2 placeholder:opacity-50`}
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
                    <select className={`w-full xl:w-96  h-12 p-2 bg-transparent border rounded-lg border-red-800 focus:outline-none focus:border-2 placeholder:opacity-50`} placeholder="Tipo de Combustível"
                        {...register('exchange')}
                    >
                        <option value="" disabled hidden>Câmbio</option>
                        <option value="automatico" >AUTOMÁTICO</option>
                        <option value="manual">MANUAL</option>
                    </select>
                </div>
                <div className="flex flex-col w-full gap-1">
                    <span className="text-red-950 font-bold">Portas*</span>
                    <input className={`w-full xl:w-96 h-12 p-2 bg-transparent border rounded-lg border-red-800 focus:outline-none focus:border-2 placeholder:opacity-50`}
                        type="text"
                        maxLength={1}
                        placeholder="Portas"
                        {...register('doors', {
                            onChange: (e) => {
                                handleSetDoors(e.target.value)
                                setValue('doors', e.target.value)
                            }
                        })}
                    />
                </div>
                <div className="w-full overflow-y-auto max-h-96 col-span-2 flex items-center justify-center">
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
            </form>
        </main>
    )
} 