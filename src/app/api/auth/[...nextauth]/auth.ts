import { api } from "@/app/axios/api";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const nextAuthOptions: AuthOptions = {
    session: {
        maxAge: 24 * 60 * 60
    },
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: 'email', type: 'text' },
                password: { label: 'password', type: 'text' }
            },

            async authorize(credentials) {
                try {
                    const response = await api.post('/signin', {
                        email: credentials.email,
                        password: credentials.password
                    })

                    const user = response.data;

                    if (!response.data.error) {
                        return { ...user }
                    }

                    return null
                } catch (err) {
                    return null
                }
            },
        })
    ],

    pages: {
        signIn: '/signin'
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.user = user;
            }

            return token
        },
        async session({ session, token }) {
            session = token.user as any
            return session
        }
    }
}
