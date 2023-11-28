import { api } from "@/app/axios/api";
import axios from "axios";
import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

const nextAuthOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: 'email', type: 'text' },
                password: { label: 'password', type: 'text' }
            },

            async authorize(credentials, req) {
                try {
                    const response = await api.post('/signin', {
                        email: credentials.email,
                        password: credentials.password
                    })

                    const user = response.data;
                    console.log(user);

                    if (!response.data.error) {
                        return user
                    }

                    return null
                } catch (err) {
                    console.log(err);
                }
            },
        })
    ],

    pages: {
        signIn: '/signin'
    },
    callbacks: {
        async jwt({ token, user }) {
            user && (token.user = user)
            return token
        },
        async session({ session, token }) {
            session = token.user as any
            return session
        }
    }
}

const handler = NextAuth(nextAuthOptions)

export { handler as GET, handler as POST, nextAuthOptions };