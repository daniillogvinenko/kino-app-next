import NextAuth, { User } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "../../../../../lib/prisma";

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        }),
        // ...add more providers here
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
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
