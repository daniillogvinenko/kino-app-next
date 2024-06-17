import { API } from "@/shared/consts/consts";
import Image from "next/image";
import cls from "./PageLoader.module.scss";

export const PageLoader = () => {
    return <Image className={cls.PageLoader} src={`${API}/static/icons/appLogo.svg`} alt="" width={50} height={50} />;
};
