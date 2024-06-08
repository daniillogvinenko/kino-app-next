"use client";

import cls from "./Header.module.scss";
import { SearchBar } from "./SearchBar/SearchBar";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/Button";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/shared/helpers/classNames/classNames";

export const Header = () => {
    const session = useSession();
    const user = session.data?.user;
    const [headerIsVisible, setHeaderIsVisible] = useState(true);

    const handleListener = useCallback(() => {
        if (scrollY > 100) {
            setHeaderIsVisible(false);
        } else {
            setHeaderIsVisible(true);
        }
    }, []);

    useEffect(() => {
        document.addEventListener("scroll", handleListener);

        return () => removeEventListener("scroll", handleListener);
    }, [handleListener]);

    return (
        <div className={cn(cls.Header, { [cls.headerIsVisible]: headerIsVisible }, [])}>
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
                            <Button href="/api/auth/signin" variant={"outline"}>
                                Войти
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
