import { Button } from "@/components/ui/Button";
import Image from "next/image";
import cls from "./MovieList.module.scss";
import { FavoritesButton } from "@/components/FavoritesButton/FavoritesButton";
import { Movie } from "@prisma/client";
import { cn } from "@/shared/helpers/classNames/classNames";

/**
 * renders list of movies
 * @returns
 */
export const MovieList = ({ movies, className }: { movies: Movie[]; className?: string }) => {
    return (
        <div className={cn(cls.listWrapper, {}, [className])}>
            {movies?.map((movie) => (
                <div key={movie?.id} className={cls.movieCard}>
                    <FavoritesButton className={cls.deleteMovieButton} movieId={movie.id.toString()} />
                    <Image width={85} height={130} src={`/static/images/movies/${movie?.mainImage}`} alt="movieImage" />
                    <div>
                        <div className={cls.movieYear}>{movie.year}</div>
                        <div className={cls.movieTitle}>{movie?.title}</div>
                        <div className={cls.movieRating}>Рейтинг: {movie.rating!.toString().split("").join(",")}</div>
                        <Button href={`/movies/${movie.id}`} variant={"outline"} size={"sm"}>
                            Подробнее
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    );
};
