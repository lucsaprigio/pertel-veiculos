'use client'
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ReactNode, SyntheticEvent, useState } from "react";
import { useForm } from 'react-hook-form';

import { UserCircle2, EyeIcon, EyeOffIcon } from 'lucide-react';
import { DialogConfirm } from "@/app/Components/DialogConfirm";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Loading from "react-loading";

const handleSigninFormSchema = z.object({
    email: z.string().min(1, 'Email obrigatório').email('Digite um e-mail válido'),
    password: z.string().min(1, 'Digite sua senha')
});

export default function SignIn() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(handleSigninFormSchema)
    });

    const [visible, setVisible] = useState(false);
    const [dialogIsOpen, setDialogIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    function handleCloseModal() {
        return setDialogIsOpen(false);
    }

    async function handleSignin(data: any) {
        try {
            setLoading(true);
            const result = await signIn('credentials', {
                email: data.email,
                password: data.password,
                redirect: false
            });

            if (result.error) {
                setLoading(false);
                return setDialogIsOpen(true);
            }
            setLoading(false);
            router.replace('/painel')
        } catch (error) {
            setLoading(false);
        }
    }

    return (
        <form
            onSubmit={handleSubmit(handleSignin)}
            className="h-screen flex flex-col items-center justify-center px-10 gap-6" >
            <DialogConfirm
                title="Ocorreu um erro"
                description="Usuário ou senha incorretas!"
                okButton="Fechar"
                onClose={handleCloseModal}
                showDialog={dialogIsOpen}
                source="/images/cancel.png"
            />
            <UserCircle2 size={48} className="text-red-800" />
            <h2 className="text-2xl font-bold">Bem-vindo!</h2>
            <h2 className="text-lg">Login</h2>
            <div className="flex flex-col">
                <input className={`w-full md:w-96 h-10 bg-transparent p-1 ${errors.email?.message ? 'border-red-700 border-2 rounded-md' : 'border-red-800 border-b-b-sm  focus:border-b-2'} focus:outline-none`}
                    type="text"
                    placeholder="E-mail"
                    {...register('email')}
                />
                {errors.email && (
                    <span className="text-red-700">
                        {errors.email?.message as ReactNode}*
                    </span>
                )}
            </div>
            <div className="flex flex-col">
                <div className={`w-full relative flex md:w-96 ${errors.password?.message ? 'border-red-700 border-2 rounded-md' : 'border-b-b-sm border-red-800'} group`}>
                    <input className={`w-full md:w-96 h-10 bg-transparent p-1 border-red-800 border-b-b-sm  focus:border-b-2 focus:outline-none`}
                        type={visible ? 'text' : 'password'}
                        placeholder="Senha"
                        {...register('password')}
                    />
                    {
                        visible ? (
                            <button
                                className="absolute right-2 top-2 bg-transparent"
                                onClick={() => setVisible(!visible)}
                                type="button"
                            >
                                <EyeIcon />
                            </button>
                        ) : (
                            <button
                                className="absolute right-2 top-2 bg-transparent"
                                onClick={() => setVisible(!visible)}
                                type="button">
                                <EyeOffIcon />
                            </button>
                        )
                    }
                </div>
                {
                    errors.password && (
                        <span className="text-red-700">
                            {errors.password?.message as ReactNode}*
                        </span>)
                }
            </div>
            <span className="text-red-800 underline">Esqueci minha senha</span>
            <button
                className="flex items-center justify-center w-full md:w-96  bg-red-800 text-gray-50 h-10 rounded-lg my-3 hover:brightness-90 transition-all duration-150"
                type="submit">
                {
                    loading ? (
                        <Loading type='spin' width={32} height={32} />
                    ) : (
                        <span>Entrar</span>
                    )
                }
            </button>
        </form >
    )
}