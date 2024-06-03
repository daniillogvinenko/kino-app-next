import classes from "./Overlay.module.scss";
import { cn } from "@/shared/helpers/classNames/classNames";

interface OverlayProps {
    className?: string;
    onClick?: () => void;
}

export const Overlay = (props: OverlayProps) => {
    const { className, onClick } = props;

    return <div onClick={onClick} className={cn(classes.Overlay, {}, [className])} />;
};
