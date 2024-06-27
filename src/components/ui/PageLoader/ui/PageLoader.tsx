import { API } from "@/shared/consts/consts";
import Image from "next/image";
import cls from "./PageLoader.module.scss";
import { cn } from "@/shared/helpers/classNames/classNames";

interface PageLoaderProps {
    className?: string;
}

/**
 * The `PageLoader` component is used for creating loading animation while fetching data or pages.
 */
export const PageLoader = ({ className }: PageLoaderProps) => {
    return (
        <Image
            className={cn(cls.PageLoader, {}, [className])}
            src={`${API}/static/icons/appLogo.svg`}
            alt=""
            width={50}
            height={50}
        />
    );
};
