import { ChangeEvent, forwardRef } from "react";
import cls from "./Input.module.scss";

interface InputProps {
    value: string | number;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props: InputProps, ref) => {
    const { onChange, value } = props;

    return <input ref={ref} value={value} onChange={onChange} className={cls.Input} type="text" />;
});

Input.displayName = "Input";
export default Input;
