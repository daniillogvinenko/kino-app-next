"use client";

import { Button } from "../ui/Button";
import Image from "next/image";
import { API } from "@/shared/consts/consts";
import cls from "./FavoritesButton.module.scss";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Movie } from "@prisma/client";
import { cn } from "@/shared/helpers/classNames/classNames";
import { Heart } from "../ui/icons/Heart";
import { PurpleHeart } from "../ui/icons/PurpleHeart";

interface FavoritesButtonProps {
    movieId: string;
    className?: string;
}

/**
 * Button that allow user to add or remove a movie to/from his favorites list
 * @returns
 */
export const FavoritesButton = (props: FavoritesButtonProps) => {
    const { movieId, className } = props;
    const [user, setUser] = useState<any>();
    const [isFavorite, setIsFavorite] = useState<boolean>(false);
    const session = useSession();
    const username = session.data?.user?.name;

    const handleAddToFavorites = () => {
        setIsFavorite(true);
        fetch(`${API}/api/users/${username}`, {
            method: "PATCH",
            body: JSON.stringify({ movieId, operation: "add" }),
            cache: "no-store",
        });
    };

    const handleRemoveFromFavorites = () => {
        setIsFavorite(false);
        fetch(`${API}/api/users/${username}`, {
            method: "PATCH",
            body: JSON.stringify({ movieId, operation: "remove" }),
            cache: "no-store",
        });
    };

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(`${API}/api/users/${username}`, { cache: "no-store" }).then((response) =>
                response.json()
            );
            return data;
        };

        fetchData().then((user) => {
            setUser(user);
            if (user?.favoriteMovies.some((movie: Movie) => movie.id === +movieId)) {
                setIsFavorite(true);
            }
        });
    }, [username, movieId]);

    if (!user) {
        return null;
    }

    if (isFavorite) {
        return (
            <Button
                shadow="shadow"
                onClick={handleRemoveFromFavorites}
                className={cn(cls.favButton, {}, [className])}
                variant={"white"}
            >
                <PurpleHeart />
            </Button>
        );
    }

    return (
        <Button
            shadow="shadow"
            onClick={handleAddToFavorites}
            className={cn(cls.favButton, {}, [className])}
            variant={"white"}
        >
            <Heart />
        </Button>
    );
};
