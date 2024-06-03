"use client";

import { User } from "@/types/types";
import cls from "./Header.module.scss";
import { SearchBar } from "./SearchBar/SearchBar";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MockApi } from "@/shared/mock-server/server";

export const Header = () => {
    const [user, setUser] = useState<User>();

    useEffect(() => {
        const fetchData = async () => {
            const data = await MockApi.getUserById("1");
            return data;
        };

        fetchData().then((data) => setUser(data));
    }, []);

    return (
        <div className={cls.Header}>
            <div className="container">
                <div className={cls.flex}>
                    <Link href="/">
                        <div className={cls.logo}>Home</div>
                    </Link>
                    <div>
                        <SearchBar />
                    </div>
                    <div>
                        {user ? (
                            <Link href={`/${user?.id}`}>
                                <p>{user?.username}</p>
                            </Link>
                        ) : (
                            <Link href="/login">
                                <div>Войти</div>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
