import "@/shared/styles/index.scss";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const defaultDecorator = (story: any) => <div className={inter.className}>{story()}</div>;
