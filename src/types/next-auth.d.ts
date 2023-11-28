import NextAuth from 'next-auth';

declare module 'next-auth' {
    interface Session {
        user: {
            id: string
            userEmail: string
            name: string
            token: string
        }
    }
}