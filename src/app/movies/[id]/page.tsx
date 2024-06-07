import Link from "next/link";
import cls from "./page.module.scss";
import { Button } from "@/components/ui/Button";

import { ReviewCard } from "@/components/ReviewCard/ReviewCard";
import { Header } from "@/components/Header";
import { FavoritesButton } from "@/components/FavoritesButton/FavoritesButton";
import { MoviePageCarousel } from "@/components/MoviePageCarousel/MoviePageCarousel";
import axios from "axios";

interface MoviePageProps {
    params: {
        id: string;
    };
}

export default async function MoviePage({ params }: MoviePageProps) {
    const movie = await axios.get(`http://localhost:3000/api/movies/${params.id}`).then((data) => data.data);
    // const reviews: Review[] = await axios
    //     .get(`http://localhost:3000/api/reviews?movieId=${params.id}`)
    //     .then((data) => data.data);
    const user = await axios.get(`http://localhost:3000/api/users/${1}`).then((data) => data.data);

    return (
        <>
            <Header  />

            <div className={cls.MoviePage}>
                <div className="container">
                    <Link href="/">Назад</Link>

                    <div className={cls.flex}>
                        <img src={movie?.mainImg!} alt="" />
                        <div>
                            <p>{movie?.title}</p>
                            <br />
                            <p>{movie?.description}</p>
                            <br />
                            <p>{movie?.year}</p>
                            <br />
                            <p>{movie?.genres?.join(", ")}</p>
                            <br />
                            <p>{movie?.country}</p>
                            <br />
                            <p>{movie?.duration}</p>
                            <br />
                            <p>{movie?.ageLimit}</p>
                            <Button size="lg">Смотреть</Button>
                            <FavoritesButton user={user} id={params.id} />
                            <p>Режисер</p>
                            <p>{movie?.director.fullName}</p>
                            <br />
                            <p>Актеры</p>
                            {movie?.mainActors?.map((actor) => (
                                <p key={actor.fullName}>{actor.fullName}</p>
                            ))}
                        </div>
                    </div>
                    <MoviePageCarousel movie={movie!} />

                    {/* <div className={cls.commentsSection}>
                        <div>Комментарии</div>
                        {user ? <div>SendReviews Button</div> : null}
                        {reviews.length ? (
                            <div>
                                {reviews?.map((review) => (
                                    <ReviewCard key={review.id} className={cls.reviewCard} review={review} />
                                ))}
                            </div>
                        ) : (
                            <div>Комментариев нету</div>
                        )}
                    </div> */}
                </div>
            </div>
        </>
    );
}
