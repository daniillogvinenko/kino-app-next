import classes from "./Overlay.module.scss";
import { cn } from "@/shared/helpers/classNames/classNames";

interface OverlayProps {
    className?: string;
    onClick?: () => void;
}

/**
 * The `Overlay` component is used for creating dark tint behind modals and for similar tasks.
 */
export const Overlay = (props: OverlayProps) => {
    const { className, onClick } = props;

    return <div onClick={onClick} className={cn(classes.Overlay, {}, [className])} />;
};
