"use client";

import { Button } from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import cls from "./SignInForm.module.scss";
import { GitHubButton } from "@/components/GitHubButton";
import { PageLoader } from "@/components/ui/PageLoader";
import Link from "next/link";
import Image from "next/image";

export const SignInForm = () => {
    const router = useRouter();
    const [usernameInput, setUsernameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async () => {
        setIsLoading(true);
        const res = await signIn("credentials", {
            username: usernameInput,
            password: passwordInput,
            redirect: false,
        });

        if (res && !res.error) {
            router.push("/");
        } else {
            console.log(res);
        }
    };

    return (
        <>
            {isLoading ? (
                <PageLoader className={cls.loader} />
            ) : (
                <div className={cls.SignInForm}>
                    {/* <GitHubButton />
                    <div className={cls.separator}></div> */}
                    <Link href="/">
                        <Image src="/static/icons/header-logo.svg" alt="logo" width={240} height={32} />
                    </Link>
                    <Input
                        placeholder="Введите имя пользователя"
                        value={usernameInput}
                        onChange={(e) => setUsernameInput(e.target.value)}
                    />
                    <Input
                        placeholder="Введите пароль"
                        value={passwordInput}
                        onChange={(e) => setPasswordInput(e.target.value)}
                        type="password"
                    />
                    <Button className={cls.btn} variant={"white"} onClick={handleSubmit}>
                        Продолжить
                    </Button>
                </div>
            )}
        </>
    );
};
