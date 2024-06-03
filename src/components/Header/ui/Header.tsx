"use client";

import { User } from "@/types/types";
import cls from "./Header.module.scss";
import { SearchBar } from "./SearchBar/SearchBar";
import Link from "next/link";

export const Header = ({ user }: { user: User | undefined }) => {
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
