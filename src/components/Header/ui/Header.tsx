"use client";

import { User } from "@/types/types";
import cls from "./Header.module.scss";
import { SearchBar } from "./SearchBar/SearchBar";
import Link from "next/link";
import { useSession } from "next-auth/react";

export const Header = ({ user }: { user: User | undefined }) => {
    const session = useSession();
    const username = session.data?.user?.name;
    console.log(session.data);

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
                            <Link href={`/${user?.id}`}>
                                <p>Пользователь: {username}</p>
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
