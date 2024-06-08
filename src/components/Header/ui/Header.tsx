"use client";

import cls from "./Header.module.scss";
import { SearchBar } from "./SearchBar/SearchBar";
import Link from "next/link";
import { useSession } from "next-auth/react";

export const Header = () => {
    const session = useSession();
    const user = session.data?.user;

    return (
        <div className={cls.Header}>
            <div className="container">
                <div className={cls.flex}>
                    <Link href="/">
                        <div className={cls.logo}>Movies App</div>
                    </Link>
                    <div>
                        <SearchBar />
                    </div>
                    <div>
                        {session.data ? (
                            <Link className={cls.userLink} href={`/${session.data.user?.name}`}>
                                <div className={cls.userAvatar}></div>
                                <p>{user?.name}</p>
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
