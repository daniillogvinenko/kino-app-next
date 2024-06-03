import { memo, useContext } from "react";
import cls from "./Header.module.scss";
import { UserContext } from "@/components/userContext/userContext";
import { SearchBar } from "./SearchBar/SearchBar";
import Link from "next/link";

export const Header = () => {
    const authData = useContext(UserContext);

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
                        {authData?.user ? (
                            <Link href={`/${authData?.user?.id}`}>
                                <p>{authData?.user?.username}</p>
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
