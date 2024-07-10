import { ChangeEvent, InputHTMLAttributes, forwardRef } from "react";
import cls from "./Input.module.scss";
import { cn } from "@/shared/helpers/classNames/classNames";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    fullWidth?: boolean;
    dataTestId?: string;
}

/**
 * The `Input` component is used for app input fields.
 */
const Input = forwardRef<HTMLInputElement, InputProps>((props: InputProps, ref) => {
    const { fullWidth, dataTestId, ...otherProps } = props;

    return (
        <input
            data-testid={dataTestId}
            ref={ref}
            className={cn(cls.Input, { [cls.fullWidth]: fullWidth }, [])}
            type="text"
            {...otherProps}
        />
    );
});

Input.displayName = "Input";
export default Input;
