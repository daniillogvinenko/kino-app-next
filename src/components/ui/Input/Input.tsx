import { ChangeEvent, InputHTMLAttributes, forwardRef } from "react";
import cls from "./Input.module.scss";
import { cn } from "@/shared/helpers/classNames/classNames";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    fullWidth?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props: InputProps, ref) => {
    const { fullWidth, ...otherProps } = props;

    return (
        <input ref={ref} className={cn(cls.Input, { [cls.fullWidth]: fullWidth }, [])} type="text" {...otherProps} />
    );
});

Input.displayName = "Input";
export default Input;
