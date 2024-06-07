"use client";

import cls from "./Header.module.scss";
import { SearchBar } from "./SearchBar/SearchBar";
import Link from "next/link";
import { useSession } from "next-auth/react";

export const Header = () => {
    const session = useSession();
    const user = session.data?.user

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
                        {session.data ? (
                            <Link href={`/${session.data.user?.name}`}>
                                <p>Пользователь: {user?.name}</p>
                            </Link>
                        ) : (
                            <Link href="/api/auth/signin">
                                <div>Войти</div>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
