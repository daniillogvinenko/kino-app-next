import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "../../../lib/prisma";
import { AuthOptions } from "next-auth";

export const authOptions: AuthOptions = {
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            credentials: {
                username: { label: "username", type: "text", placeholder: "Enter username" },
                password: { label: "password", type: "password", placeholder: "Enter password" },
            },
            async authorize(credentials) {
                if (!credentials?.username || !credentials.password) return null;

                const currentUser = await prisma.user.findUnique({
                    where: {
                        username: credentials.username,
                    },
                });

                if (currentUser && currentUser.password === credentials.password) {
                    return { id: currentUser.username, name: currentUser.username };
                }

                return null;
            },
        }),
    ],
    pages: {
        signIn: "/signin",
    },
};
