import { VariantProps, cva } from "class-variance-authority";
import { ReactNode } from "react";
import cls from "./Button.module.scss";
import Link from "next/link";
import { cn } from "@/shared/helpers/classNames/classNames";

const buttonVariants = cva(cls.Button, {
    variants: {
        variant: {
            regular: cls.regular,
            outline: cls.outline,
            white: cls.white,
        },
        size: {
            sm: cls.sm,
            md: cls.md,
            lg: cls.lg,
        },
    },
    defaultVariants: {
        variant: "regular",
        size: "md",
    },
});

interface ButtonProps extends VariantProps<typeof buttonVariants> {
    children: ReactNode;
    href?: string;
    onClick?: () => void;
    className?: string;
}

export const Button = ({ children, size, variant, href, onClick, className }: ButtonProps) => {
    const clsName = cn(buttonVariants({ size, variant }), {}, [className]);

    if (href) {
        return (
            <Link href={href}>
                <button className={clsName}>{children}</button>
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={clsName}>
            {children}
        </button>
    );
};
