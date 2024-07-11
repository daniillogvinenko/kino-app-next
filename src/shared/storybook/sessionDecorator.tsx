import "@/shared/styles/index.scss";
import { SessionProvider } from "next-auth/react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const sessionDecorator = (story: any) => <SessionProvider>{story()}</SessionProvider>;
