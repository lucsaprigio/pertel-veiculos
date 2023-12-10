'use client'

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Eye, EyeOff, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import Loading from 'react-loading';
import axios from 'axios';

type UpdateFormData = z.infer<typeof updateUserSchema>;

type UpdateFormProps = {
    id: string;
    email: string;
    name: string;
    token: string;
}

const updateUserSchema = z.object({
    email: z.string().min(6, 'Campo obrigatório').email('Digite um E-mail válido'),
    name: z.string().min(1, 'Campo obrigatório'),
    password: z.string().min(6, 'Sua senha deve ter pelo menos 6 dígitos'),
    confirmPassword: z.string().min(6, 'Confirme sua senha')
}).refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ["confirmPassword"]
})

export default function UpdateUserForm({ email, name, token, id }: UpdateFormProps) {

    const { register, formState: { errors }, handleSubmit, reset } = useForm<UpdateFormData>({
        resolver: zodResolver(updateUserSchema),
        defaultValues: {
            email: email,
            name: name
        }
    });

    const [isShow, setIsShow] = useState(false);
    const [loading, setLoading] = useState(false);

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    async function handleUpdateUser(data: UpdateFormData) {
        try {
            setLoading(true);

            await axios.put(`${process.env.NEXT_PUBLIC_API_NODE}/update-user/${id}`, {
                email: data.email,
                name: data.name,
                password: data.password
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            })
                .then(() => {
                    setErrorMessage('');
                    setSuccessMessage('Atualizado com sucesso!');
                    setIsShow(false);
                    reset();
                })
                .catch((response) => {
                    setSuccessMessage('');
                    setErrorMessage(response.response.data);
                });

            setLoading(false);
        } catch (err) {
            setLoading(false);
            console.log(err);
        }
    }

    function handleSetShowPassword() {
        setIsShow(!isShow);
    }

    return (
        <form onSubmit={handleSubmit(handleUpdateUser)} className="flex flex-col w-1/3 justify-center gap-1">
            <h2 className="flex text-3xl font-bold mb-6">Configurações da Conta</h2>

            <label htmlFor="">E-mail</label>
            <input
                className="p-2 border-red-900 rounded-lg placeholder:opacity-40 border-border-1 focus:border-2 focus:bg-gray-50 focus:outline-none"
                type="text"
                placeholder='Digite seu E-mail'
                {...register('email')}
            />
            {errors.email && (<span className="text-red-700 text-sm mb-2">{errors.email.message}</span>)}
            <label htmlFor="">Nome</label>
            <input
                className="p-2 border-red-900 rounded-lg placeholder:opacity-40 border-border-1 focus:border-2 focus:bg-gray-50 focus:outline-none"
                type="text"
                placeholder='Nome'
                {...register('name')}
            />
            {errors.name && (<span className="text-red-700 text-sm mb-2">{errors.name.message}</span>)}

            <div className="relative flex flex-col">
                <label htmlFor="">Senha</label>
                <input
                    className="p-2 border-red-900 rounded-lg placeholder:opacity-40 border-border-1 focus:border-2 focus:bg-gray-50 focus:outline-none"
                    type={`${isShow ? 'text' : 'password'}`}
                    placeholder='Digite sua senha'
                    {...register('password')}
                />
                {errors.password && (<span className="text-red-700 text-sm mb-2">{errors.password.message}</span>)}
                <button className="absolute right-3 top-8 transition-all duration-100" type="button" onClick={handleSetShowPassword}>
                    {
                        isShow ? (
                            <Eye />
                        ) :
                            <EyeOff />
                    }
                </button>
            </div>
            <div className="relative flex flex-col">
                <label htmlFor="">Confirmar senha</label>
                <input
                    className="p-2 border-red-900 rounded-lg placeholder:opacity-40 border-border-1 focus:border-2 focus:bg-gray-50 focus:outline-none"
                    type={`${isShow ? 'text' : 'password'}`}
                    placeholder='Digite sua senha'
                    {...register('confirmPassword')}
                />
                {errors.confirmPassword && (<span className="text-red-700 text-sm mb-2">{errors.confirmPassword.message}</span>)}

                <button className="absolute right-3 top-8 transition-all duration-100" type="button" onClick={handleSetShowPassword}>
                    {
                        isShow ? (
                            <Eye />
                        ) :
                            <EyeOff />
                    }
                </button>
            </div>

            <div className="flex items-center justify-center my-6">
                <button type="submit" className="flex items-center justify-center w-1/2 bg-red-700 text-gray-50 p-2 rounded-lg  hover:brightness-90 transition-all duration-150">
                    {
                        loading ? (
                            <Loading type='spin' width={32} height={32} />
                        ) : (
                            <span>Atualizar dados</span>
                        )
                    }
                </button>
            </div>
            <strong className={`flex flex-row items-center justify-center text-1xl mt-4 gap-2 text-red-850 ${errorMessage === '' && 'hidden'}`}><AlertCircle />{errorMessage}</strong>
            <strong className={`flex flex-row items-center justify-center text-1xl mt-4 gap-2 text-green-500 ${successMessage === '' && 'hidden'}`}><CheckCircle2 />{successMessage}</strong>
        </form >
    )
}