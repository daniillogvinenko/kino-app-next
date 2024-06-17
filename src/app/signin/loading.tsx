import { Header } from "@/components/Header";
import cls from "./loading.module.scss";
export default function Loading() {
    return (
        <>
            <Header />
            <div className={cls.loaderWrapper}>
                <span className={cls.loader}></span>
            </div>
        </>
    );
}
