import { Button } from "@/components/ui/Button";
import Image from "next/image";
import cls from "./MovieList.module.scss";

export const MovieList = ({ movies }: { movies: any[] }) => {
    return (
        <div className={cls.listWrapper}>
            {movies.map((movie) => (
                <div key={movie.id} className={cls.movieCard}>
                    <Image width={85} height={130} src={`/static/images/movies/${movie.mainImage}`} alt="movieImage" />
                    <div>
                        <div className={cls.movieYear}>2019</div>
                        <div className={cls.movieTitle}>{movie.title}</div>
                        <div className={cls.movieRating}>Рейтинг: 7,3</div>
                        <Button href={`/movies/${movie.id}`} variant={"outline"} size={"sm"}>
                            Подробнее
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    );
};
