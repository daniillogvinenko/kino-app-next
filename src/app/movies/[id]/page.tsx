"use client";

import Link from "next/link";
import cls from "./page.module.scss";
import { Button } from "@/components/ui/Button";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Movie, Review, User } from "@/types/types";
import { ChangeEvent, useEffect, useState } from "react";
import { MockApi } from "@/shared/mock-server/server";
import { useParams } from "next/navigation";
import { ReviewCard } from "@/components/ReviewCard/ReviewCard";
import { Header } from "@/components/Header";
import { LOCALSTORAGE_USER } from "@/shared/consts/consts";
import { Modal } from "@/components/ui/Modal";

export default function MoviePage() {
    const { id } = useParams<{ id: string }>();

    const [movie, setMovie] = useState<Movie | undefined>(undefined);
    const [reviews, setReviews] = useState<Review[]>([]);
    const [newReviewValue, setNewReviewValue] = useState("");
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [user, setUser] = useState<User>();

    useEffect(() => {
        const fetchData = async () => {
            // @ts-ignore
            const data = await MockApi.getUserById(localStorage.getItem(LOCALSTORAGE_USER));
            return data;
        };

        fetchData().then((data) => setUser(data));
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const data = MockApi.getMovieById(id);
            return data;
        };

        fetchData().then((data) => setMovie(data));
    }, [id]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await MockApi.getReviewsByMovieId(id!);
            return data;
        };

        fetchData().then((data) => setReviews(data));
    }, [id]);

    const handleNewReviewChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewReviewValue(e.target.value);
    };

    const handleCloseModal = () => {
        setModalIsOpen(false);
    };

    const handleOpenModal = () => {
        setModalIsOpen(true);
    };

    const handleSendReview = () => {
        if (user) {
            const fetchData = async () => {
                const data = await MockApi.postReview(user?.id, id, newReviewValue);
                return data;
            };

            // todo
            // надо чтобы с сервера приходили только комментарии к конкретному фильму
            fetchData().then((data) => setReviews(data));
        }
    };

    return (
        <>
            <Header user={user} />
            <Modal isOpen={modalIsOpen} onClose={handleCloseModal}>
                <div className={cls.modalContent}></div>
            </Modal>
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
                            <p>{movie?.genres.join(", ")}</p>
                            <br />
                            <p>{movie?.country}</p>
                            <br />
                            <p>{movie?.duration}</p>
                            <br />
                            <p>{movie?.ageLimit}</p>
                            <Button onClick={handleOpenModal} size="lg">
                                Смотреть
                            </Button>
                        </div>
                    </div>
                    <Carousel>
                        {movie?.otherImages.map((img) => (
                            <img style={{ aspectRatio: "16 / 9", objectFit: "cover" }} key={img} src={img} alt="" />
                        ))}
                    </Carousel>

                    <div className={cls.commentsSection}>
                        <div>Комментарии</div>
                        {user ? (
                            <div className={cls.newCommentForm}>
                                <input
                                    type="text"
                                    placeholder="Введите комментарий"
                                    value={newReviewValue}
                                    onChange={handleNewReviewChange}
                                />
                                <Button onClick={handleSendReview}>Отправить</Button>
                            </div>
                        ) : null}
                        {reviews.length ? (
                            <div>
                                {reviews?.map((review) => (
                                    <ReviewCard key={review.id} className={cls.reviewCard} review={review} />
                                ))}
                            </div>
                        ) : (
                            <div>Комментариев нету</div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
