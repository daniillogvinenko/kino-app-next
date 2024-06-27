import { ChangeEvent, forwardRef } from "react";
import cls from "./InputRange.module.scss";
import { cn } from "@/shared/helpers/classNames/classNames";

interface InputRangeProps {
    className?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

/**
 * The `InputRange` component is used for app inputs with range type (aka sliders).
 */
export const InputRange = forwardRef<HTMLInputElement, InputRangeProps>(
    ({ className, onChange }: InputRangeProps, ref) => {
        return <input ref={ref} onChange={onChange} type="range" className={cn(cls.RangeInput, {}, [className])} />;
    }
);

InputRange.displayName = "InputRange";
export default InputRange;
