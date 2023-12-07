'use client'
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ReactNode, SyntheticEvent, useState } from "react";
import { useForm } from 'react-hook-form';

import { UserCircle2, EyeIcon, EyeOffIcon } from 'lucide-react';
import { DialogConfirm } from "@/app/Components/DialogConfirm";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const handleSigninFormSchema = z.object({
    email: z.string().min(1, 'Email obrigatório').email('Digite um e-mail válido'),
    password: z.string().min(1, 'Digite sua senha')
});

export default function SignIn() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(handleSigninFormSchema)
    });

    console.log(errors.email);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [visible, setVisible] = useState(false);
    const [dialogIsOpen, setDialogIsOpen] = useState(false);

    const router = useRouter();

    function handleCloseModal() {
        return setDialogIsOpen(false);
    }

    function createUser(data: any) {
        console.log('caiu aqui')
    }

    async function handleSignin(event: SyntheticEvent) {
        try {
            event.preventDefault();

            const result = await signIn('credentials', {
                email,
                password,
                redirect: false
            });

            if (result.error) {
                console.log(result.error);
                return setDialogIsOpen(true);
            }

            router.replace('/painel')
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form
            onSubmit={handleSubmit(createUser)}
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
            <input className={`w-full md:w-96 h-10 bg-transparent p-1 ${errors.email?.message ? 'border-red-700 border-2 rounded-md' : 'border-red-800 border-b-b-sm  focus:border-b-2'} focus:outline-none`}
                type="text"
                placeholder="E-mail"
                {...register('email')}
            />
            {errors.email && (
                <span className="text-red-700">
                    {errors.email?.message as ReactNode}*
                </span>)}
            <div className="w-full flex md:w-96 border-b-b-sm border-red-800 group">
                <input className={`w-full md:w-96 h-10 bg-transparent p-1 ${errors.password?.message ? 'border-red-700 border-2 rounded-md' : 'border-red-800 border-b-b-sm  focus:border-b-2'} focus:outline-none`}
                    type={visible ? 'text' : 'password'}
                    placeholder="Senha"
                    {...register('password')}
                />
                {
                    visible ? (
                        <button
                            className="bg-transparent"
                            onClick={() => setVisible(!visible)}
                            type="button"
                        >
                            <EyeIcon />
                        </button>
                    ) : (
                        <button
                            className="bg-transparent"
                            onClick={() => setVisible(!visible)}
                            type="button">
                            <EyeOffIcon />
                        </button>
                    )
                }
            </div>
            {errors.password && (
                <span className="text-red-700">
                    {errors.password?.message as ReactNode}*
                </span>)}
            <span className="text-red-800 underline">Esqueci minha senha</span>
            <button
                className="w-full md:w-96  bg-red-800 text-gray-50 h-10 rounded-lg my-3 hover:brightness-90 transition-all duration-150"
                type="submit">
                Entrar
            </button>
        </form>
    )
}