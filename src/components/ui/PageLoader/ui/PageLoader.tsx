import { API } from "@/shared/consts/consts";
import Image from "next/image";
import cls from "./PageLoader.module.scss";
import { cn } from "@/shared/helpers/classNames/classNames";
import { AppLogoIcon } from "../../icons/AppLogoIcon";

interface PageLoaderProps {
    className?: string;
}

/**
 * The `PageLoader` component is used for creating loading animation while fetching data or pages.
 */
export const PageLoader = ({ className }: PageLoaderProps) => {
    return <AppLogoIcon className={cn(cls.PageLoader, {}, [className])} />;
};
