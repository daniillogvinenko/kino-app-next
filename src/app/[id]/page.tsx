"use client";

import cls from "./page.module.scss";
import { useEffect, useState } from "react";
import { Movie, User } from "@/types/types";
import { Button } from "@/components/ui/Button";
import { MockApi } from "@/shared/mock-server/server";
import { useParams, useRouter } from "next/navigation";
import { LOCALSTORAGE_USER } from "@/shared/consts/consts";
import { Header } from "@/components/Header";

export default function ProfilePage() {
    const { id } = useParams<{ id: string }>();

    const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>();
    const router = useRouter();
    const [user, setUser] = useState<User>();

    useEffect(() => {
        const fetchData = async () => {
            const data = await MockApi.getUserById(id);
            return data;
        };

        fetchData().then((data) => setUser(data));
    }, []);

    useEffect(() => {
        if (id) {
            const fetchData = async () => {
                const data = await MockApi.getFavoriteMoviesByUserId(id);
                return data;
            };

            fetchData().then((data) => setFavoriteMovies(data));
        }
    }, [id]);

    if (!localStorage.getItem(LOCALSTORAGE_USER)) {
        router.push("/");
    }

    const handleSignOut = () => {
        localStorage.removeItem(LOCALSTORAGE_USER);
        setUser(undefined);
    };

    return (
        <>
            <Header user={user} />
            <div className={cls.ProfilePage}>
                <div className="container">
                    <div>
                        <p>Профиль</p>
                        <p>Имя пользователя: {user?.username}</p>
                        <p>Дата регистрации: {user?.username}</p>
                        <p>Оставлено комментариев: {user?.username}</p>
                        <Button>Изменить данные</Button>
                        <Button variant="secondary" onClick={handleSignOut}>
                            Выйти
                        </Button>
                    </div>
                    <div>
                        <p>Любимые фильмы</p>
                        <ul>
                            {favoriteMovies?.map((fav) => (
                                <div key={fav.id}>{fav.title}</div>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
