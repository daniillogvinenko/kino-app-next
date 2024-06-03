"use client";

import cls from "./page.module.scss";
import { ChangeEvent, useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { MockApi } from "@/shared/mock-server/server";
import { LOCALSTORAGE_USER } from "@/shared/consts/consts";
import { useRouter } from "next/navigation";
import { Header } from "@/components/Header";
import { User } from "@/types/types";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const [user, setUser] = useState<User>();

    useEffect(() => {
        if (localStorage.getItem(LOCALSTORAGE_USER)) {
            router.push("/");
        }

        const fetchData = async () => {
            const data = await MockApi.getUserById(localStorage.getItem(LOCALSTORAGE_USER));
            return data;
        };

        fetchData().then((data) => setUser(data));
    }, []);

    const onChangeUsername = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
        const fetchData = async () => {
            const data = await MockApi.login(username, password);
            return data;
        };

        setIsLoading(true);
        fetchData()
            .then((user) => {
                setIsLoading(false);
                localStorage.setItem(LOCALSTORAGE_USER, user.id);
                router.push("/");
            })
            .catch((data) => {
                setError(data.message);
                setIsLoading(false);
            });
    };

    return (
        <>
            <Header user={user} />
            <div className={cls.LoginPage}>
                <div className="container">
                    {isLoading ? (
                        <div>Loading...</div>
                    ) : (
                        <>
                            <div>{error}</div>
                            <input placeholder="username" type="text" value={username} onChange={onChangeUsername} />
                            <br />
                            <input placeholder="password" type="text" value={password} onChange={onChangePassword} />
                            <br />
                            <Button onClick={handleLogin}>Продолжить</Button>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
