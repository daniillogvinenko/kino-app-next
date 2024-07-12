import { Field, FieldAttributes } from "formik";
import cls from "./CustomField.module.scss";
import { cn } from "@/shared/helpers/classNames/classNames";

interface CustomFieldProps extends FieldAttributes<any> {
    fullWidth?: boolean;
}

export const CustomField = ({ className, fullWidth, ...otherProps }: CustomFieldProps) => {
    return <Field {...otherProps} className={cn(cls.CustomField, { [cls.fullWidth]: fullWidth }, [])} />;
};
