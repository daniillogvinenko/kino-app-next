import { VariantProps, cva } from "class-variance-authority";
import { ReactNode } from "react";
import cls from "./Button.module.scss";
import Link from "next/link";

const buttonVariants = cva(cls.Button, {
    variants: {
        variant: {
            regular: cls.regular,
            outline: cls.outline,
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
}

export const Button = ({ children, size, variant, href, onClick }: ButtonProps) => {
    if (href) {
        return (
            <Link href={href}>
                <button className={buttonVariants({ size, variant })}>{children}</button>
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={buttonVariants({ size, variant })}>
            {children}
        </button>
    );
};
