import Link from "next/link";
import cls from "./page.module.scss";

import Image from "next/image";
import { API } from "@/shared/consts/consts";
import { WatchMovieButton } from "@/components/WatchMovieButton";
import { SendReview } from "@/components/SendReview";
import { FavoritesButton } from "@/components/FavoritesButton/FavoritesButton";
import { Metadata } from "next";
import { Movie, Person } from "@prisma/client";
import { mapGenresArrayToRussian } from "@/shared/helpers/maps/maps";

interface MoviePageProps {
    params: {
        id: string;
    };
}

export async function generateMetadata({ params }: MoviePageProps): Promise<Metadata> {
    const movie: Movie = await fetch(`${API}/api/movies/${params.id}`, { cache: "no-store" }).then((response) =>
        response.json()
    );

    return {
        title: `${movie.title}, ${movie.year} - Смотреть фильм онлайн в хорошем качестве`,
    };
}

export default async function MoviePage({ params }: MoviePageProps) {
    const movie: Movie & { director: Person; mainActors: Person[] } = await fetch(`${API}/api/movies/${params.id}`, {
        cache: "no-store",
    })
        .then((response) => response.json())
        .catch(() => undefined);

    const genresString = mapGenresArrayToRussian(movie?.movieGenres).join(", ");

    return (
        <div className={cls.MoviePage}>
            <div className="container">
                {movie ? (
                    <>
                        <div className={cls.flex1}>
                            <Image
                                src={`/static/images/movies/${movie?.mainImage}`}
                                alt="movieImage"
                                width={295}
                                height={443}
                            />
                            <div>
                                <div className={cls.title}>{movie?.title}</div>
                                <div className={cls.shortInfo}>
                                    {movie?.year} | {genresString} | {movie?.age}+
                                </div>
                                <p>{movie?.movieDescription}</p>
                                <div className={cls.btnWrapper}>
                                    <WatchMovieButton src={movie.movieSrc} />
                                    <FavoritesButton movieId={params.id} />
                                </div>
                                <div className={cls.aboutTitle}>О фильме</div>
                                <div className={cls.aboutGrid}>
                                    <span className={cls.gridLeftColumn}>Год производства</span>
                                    <span>{movie.year}</span>
                                    <span className={cls.gridLeftColumn}>Страна производства</span>
                                    <span>{movie.country}</span>
                                    <span className={cls.gridLeftColumn}>Жанр</span>
                                    <span>{genresString}</span>
                                    <span className={cls.gridLeftColumn}>Режисер</span>
                                    <Link href={`/person/${movie?.directorId}`}>
                                        <span className={cls.directorFullName}>{movie?.director.fullName}</span>
                                    </Link>
                                    <span className={cls.gridLeftColumn}>Длительность</span>
                                    <span>{movie?.duration}</span>
                                    <span className={cls.gridLeftColumn}>Возраст</span>
                                    <span>{movie?.age}+</span>
                                </div>
                            </div>
                        </div>
                        <div className={cls.actorsTitle}>В главных ролях</div>
                        <div className={cls.actorsWrapper}>
                            {movie?.mainActors.map((actor: Person) => (
                                <Link href={`/person/${actor.id}`} key={actor.id}>
                                    <div className={cls.actorCard}>
                                        <Image
                                            src={`/static/images/persons/${actor.mainImage}`}
                                            alt="actorImage"
                                            width={88}
                                            height={88}
                                        />
                                        <div>{actor.fullName}</div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <div className={cls.actorsTitle}>Комментарии</div>
                        <SendReview movieId={params.id} />
                    </>
                ) : (
                    <div className={cls.errorWrapper}>
                        <span>Упс!</span> <p>Произошла ошибка при загрузке страницы</p>
                    </div>
                )}
            </div>
        </div>
    );
}
