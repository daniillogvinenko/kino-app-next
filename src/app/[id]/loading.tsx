import cls from "./loading.module.scss";
import { PageLoader } from "@/components/PageLoader";
export default function Loading() {
    return (
        <>
            <div className={cls.loaderWrapper}>
                <PageLoader />
            </div>
        </>
    );
}
