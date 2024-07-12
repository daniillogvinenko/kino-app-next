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
            borderless: cls.borderless,
            gradient: cls.gradient,
        },
        size: {
            sm: cls.sm,
            md: cls.md,
            lg: cls.lg,
        },
        shadow: {
            noShadow: "",
            shadow: cls.shadow,
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
    disabled?: boolean;
    dataTestId?: string;
    type?: "button" | "submit" | "reset";
}

/**
 * The `Button` component is used for app buttons.
 */
export const Button = ({
    children,
    size,
    variant,
    disabled = false,
    shadow = "noShadow",
    type = "button",
    href,
    onClick,
    dataTestId,
    className,
}: ButtonProps) => {
    const clsName = cn(buttonVariants({ size, variant, shadow }), {}, [className]);

    if (href) {
        return (
            <Link onClick={onClick} href={href}>
                <button data-testid={dataTestId} disabled={disabled} className={clsName}>
                    {children}
                </button>
            </Link>
        );
    }

    return (
        <button type={type} data-testid={dataTestId} disabled={disabled} onClick={onClick} className={clsName}>
            {children}
        </button>
    );
};
