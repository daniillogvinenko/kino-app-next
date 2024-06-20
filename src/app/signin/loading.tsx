import { Header } from "@/components/Header";
import cls from "./loading.module.scss";
import { PageLoader } from "@/components/ui/PageLoader";
export default function Loading() {
    return (
        <>
            <div className={cls.loaderWrapper}>
                <PageLoader />
            </div>
        </>
    );
}
