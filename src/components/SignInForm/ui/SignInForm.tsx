"use client";

import { Button } from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import cls from "./SignInForm.module.scss";

export const SignInForm = () => {
    const router = useRouter();
    const [usernameInput, setUsernameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

    const handleSubmit = async () => {
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
        <div className={cls.SignInForm}>
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
    );
};
