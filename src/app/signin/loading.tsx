import { Header } from "@/components/Header";
import cls from "./loading.module.scss";
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
