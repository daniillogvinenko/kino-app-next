import { Header } from "@/components/Header";
import cls from "./loading.module.scss";
import Image from "next/image";
import { API } from "@/shared/consts/consts";
import { PageLoader } from "@/components/PageLoader";
export default function Loading() {
    return (
        <>
            <Header />
            <div className={cls.loaderWrapper}>
                <PageLoader />
            </div>
        </>
    );
}
