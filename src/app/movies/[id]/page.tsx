import Link from "next/link";
import cls from "./page.module.scss";

import { Header } from "@/components/Header";
import axios from "axios";
import Image from "next/image";
import { API } from "@/shared/consts/consts";
import { WatchMovieButton } from "@/components/WatchMovieButton";
import { SendReview } from "@/components/SendReview";
import { FavoritesButton } from "@/components/FavoritesButton/FavoritesButton";

interface MoviePageProps {
    params: {
        id: string;
    };
}

export default async function MoviePage({ params }: MoviePageProps) {
    const movie: any = await axios
        .get(`${API}/api/movies/${params.id}`)
        .then((data) => data.data)
        .catch(() => undefined);

    const reviews = await axios
        .get(`${API}/api/reviews?movieId=${params.id}`)
        .then((response) => response.data)
        .catch(() => undefined);

    return (
        <>
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
                                    <div className={cls.shortInfo}>2022 | {movie?.movieGenres.join(", ")} | 18+</div>
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
                                        <span>{movie?.movieGenres.join(", ")}</span>
                                        <span className={cls.gridLeftColumn}>Режисер</span>
                                        <Link href={`/person/${movie?.directorId}`}>
                                            <span className={cls.directorFullName}>{movie?.director.fullName}</span>
                                        </Link>
                                        <span className={cls.gridLeftColumn}>Длительность</span>
                                        <span>138 мин. / 2:18</span>
                                        <span className={cls.gridLeftColumn}>Возраст</span>
                                        <span>18+</span>
                                    </div>
                                </div>
                            </div>
                            <div className={cls.actorsTitle}>В главных ролях</div>
                            <div className={cls.actorsWrapper}>
                                {movie?.mainActors.map((actor: any) => (
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
                            <div className={cls.actorsTitle}>Отзывы</div>
                            <SendReview movieId={params.id} />
                        </>
                    ) : (
                        <div style={{ transform: "translateY(200px)" }}>Произошла ошибка при загрузке фильма</div>
                    )}
                </div>
            </div>
        </>
    );
}
