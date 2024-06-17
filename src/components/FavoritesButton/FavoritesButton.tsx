"use client";

import { Button } from "../ui/Button";
import Image from "next/image";
import { API } from "@/shared/consts/consts";
import cls from "./FavoritesButton.module.scss";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Movie } from "@prisma/client";

interface FavoritesButtonProps {
    movieId: string;
    addToFavorites?: () => void;
    removeFromFavorites?: () => void;
}

export const FavoritesButton = (props: FavoritesButtonProps) => {
    const { addToFavorites, movieId, removeFromFavorites } = props;
    const [user, setUser] = useState<any>();
    const sesstion = useSession();
    const username = sesstion.data?.user?.name;

    useEffect(() => {
        const fetchData = async () => {
            const data = await axios.get(`${API}/api/users/${username}`).then((response) => response.data);
            return data;
        };

        fetchData().then((user) => {
            setUser(user);
        });
    }, []);

    console.log(user);

    if (!user) {
        return null;
    }

    if (user?.favoriteMovies.some((movie: Movie) => movie.id === +movieId)) {
        return (
            <Button className={cls.favButton} variant={"white"}>
                <Image width={18} height={18} src={`${API}/static/icons/purpleHeartFilled.svg`} alt="" />
            </Button>
        );
    }

    return (
        <Button className={cls.favButton} variant={"white"}>
            <Image width={18} height={18} src={`${API}/static/icons/purpleHeart.svg`} alt="" />
        </Button>
    );
};
