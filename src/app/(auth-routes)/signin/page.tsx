'use client'
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const router = useRouter()

    async function handleSubmit(event: SyntheticEvent) {
        event.preventDefault();

        const result = await signIn('credentials', {
            email,
            password,
            redirect: false
        });

        if (result.error) {
            console.log(result);
            return
        }

        router.replace('/painel')
    }

    return (
        <main className="w-full h-full">
            <form className="mt-32" onSubmit={handleSubmit}>
                <input
                    className="w-32 h-10"
                    type="text"
                    placeholder="E-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button type="submit">
                    Entrar
                </button>
            </form>
        </main>
    )
}