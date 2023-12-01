'use client'
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";
import { UserCircle2, EyeIcon, EyeOffIcon } from 'lucide-react';
import { DialogConfirm } from "@/app/Components/DialogConfirm";

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [visible, setVisible] = useState(false);
    const [dialogIsOpen, setDialogIsOpen] = useState(false);

    const router = useRouter();

    function handleCloseModal() {
        return setDialogIsOpen(false);
    }

    async function handleSubmit(event: SyntheticEvent) {
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
    }

    return (
        <form className="flex flex-col items-center justify-center px-10 gap-6 my-32" onSubmit={handleSubmit}>
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
            <input className="w-full md:w-96 h-10 bg-transparent border-b-b-sm border-red-800 focus:outline-none focus:border-b-2"
                type="text"
                placeholder="E-mail"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <div className="w-full flex md:w-96 border-b-b-sm border-red-800 group">
                <input className="w-full md:w-96 h-10 bg-transparent focus:outline-none focus:border-red-800 focus:border-b-2"
                    type={visible ? 'text' : 'password'}
                    placeholder="Senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
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
            <span className="text-red-800 underline">Esqueci minha senha</span>
            <button
                className="w-full md:w-96  bg-red-800 text-gray-50 h-10 rounded-lg my-3 hover:brightness-90 transition-all duration-150"
                type="submit">
                Entrar
            </button>
        </form>
    )
}