"use client";

import { Layout } from "@/components/Layout";
import cls from "./page.module.scss";
import { useContext, useEffect, useState } from "react";
import { Movie, User } from "@/types/types";
import { Button } from "@/components/ui/Button";
import { MockApi } from "@/shared/mock-server/server";
import { useParams, useRouter } from "next/navigation";

export default function ProfilePage() {
    const { id } = useParams<{ id: string }>();

    const { userId } = useParams<{ userId: string }>();
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
        if (userId) {
            const fetchData = async () => {
                const data = await MockApi.getFavoriteMoviesByUserId(userId);
                return data;
            };

            fetchData().then((data) => setFavoriteMovies(data));
        }
    }, [userId]);

    if (user) {
        console.log("here");
        router.push("/");
    }

    return (
        <Layout>
            <div className={cls.ProfilePage}>
                <div className="container">
                    <div>
                        <p>Профиль</p>
                        <p>Имя пользователя: {user?.username}</p>
                        <p>Дата регистрации: {user?.username}</p>
                        <p>Оставлено комментариев: {user?.username}</p>
                        <Button>Изменить данные</Button>
                        {/* <Button variant="secondary" onClick={authData?.signOut}>
                            Выйти
                        </Button> */}
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
        </Layout>
    );
}
