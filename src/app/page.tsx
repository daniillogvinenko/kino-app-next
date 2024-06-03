"use client";

import { Button } from "@/components/ui/Button";
import cls from "./page.module.scss";
import { MockApi } from "@/shared/mock-server/server";
import { Header } from "@/components/Header";
import { Movie, User } from "@/types/types";
import { useEffect, useState } from "react";
import { LOCALSTORAGE_USER } from "@/shared/consts/consts";

export default function Home() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [user, setUser] = useState<User>();

    useEffect(() => {
        const fetchData = async () => {
            const data = await MockApi.getUserById(localStorage.getItem(LOCALSTORAGE_USER));
            return data;
        };

        fetchData().then((data) => setUser(data));
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const data = await MockApi.getAllMovies();
            return data;
        };

        fetchData().then((data) => setMovies(data));
    }, []);

    return (
        <>
            <Header user={user} />
            <div className="container">
                <div className={cls.wrapper}>
                    {movies.map((movie) => (
                        <div key={movie.id} className={cls.card}>
                            <div className={cls.imgWrapper}>
                                <img className={cls.img} src={movie.mainImg} alt="" />
                            </div>
                            <p className={cls.title}>{movie.title}</p>
                            <p className={cls.description}>{movie.description}</p>
                            <Button href={`/movies/${movie.id}`}>Подбронее</Button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
