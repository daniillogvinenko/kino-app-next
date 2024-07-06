import cls from "./page.module.scss";
import { MainPageHeroSection } from "@/components/MainPageHeroSection";
import Image from "next/image";
import Link from "next/link";
import { API } from "@/shared/consts/consts";
import { FavoritesButton } from "@/components/FavoritesButton/FavoritesButton";
import { Movie } from "@prisma/client";
import { cn } from "@/shared/helpers/classNames/classNames";

export default async function HomePage() {
    const movies: Movie[] = await fetch(`${API}/api/movies`, { cache: "no-store" })
        .then((response) => response.json())
        .catch(() => undefined);

    const classNameFromRating = (rating: number) => {
        if (rating < 5) return cls.red;
        if (rating < 7) return cls.white;
        return cls.green;
    };

    return (
        <div className={cls.HomePage}>
            <MainPageHeroSection />
            <div className="container">
                {movies ? (
                    <>
                        <div className={cls.title}>В тренде</div>
                        <div className={cls.wrapper}>
                            {movies?.map((movie) => (
                                <div key={movie.id} className={cls.card}>
                                    <Link key={movie.id} href={`movies/${movie.id}`}>
                                        <div className={cls.imgWrapper}>
                                            <Image
                                                src={`/static/images/movies/${movie.mainImage}`}
                                                alt="movieImage"
                                                width={190}
                                                height={287}
                                            />
                                        </div>
                                    </Link>
                                    <div className={cls.movieInfo}>
                                        <div className={cn(cls.rating, {}, [classNameFromRating(movie.rating!)])}>
                                            {movie.rating!.toString().split("").join(",")}
                                        </div>
                                        <FavoritesButton
                                            className={cls.favButton}
                                            key={movie.id}
                                            movieId={movie.id.toString()}
                                        />
                                    </div>
                                    <div className={cls.movieTitle}>{movie.title}</div>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className={cls.errorWrapper}>
                        <span>Упс!</span> <p>Произошла ошибка при загрузке фильмов</p>
                    </div>
                )}
            </div>
        </div>
    );
}
