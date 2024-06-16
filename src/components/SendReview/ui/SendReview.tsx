"use client";

import { Button } from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import cls from "./SendReview.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { API } from "@/shared/consts/consts";
import { useSession } from "next-auth/react";
import { Review } from "@prisma/client";

interface SendReviewProps {
    movieId: string;
}

export const SendReview = ({ movieId }: SendReviewProps) => {
    const [value, setValue] = useState("");
    const [reviews, setReviews] = useState<Review[]>();
    const [isLoading, setIsLoading] = useState(false);
    const session = useSession();
    const user = session.data?.user;

    const handleSendReview = () => {
        setIsLoading(true);
        axios
            .post(`${API}/api/reviews`, {
                text: value,
                username: user?.name,
                movieId: movieId,
            })
            .then(() => {
                axios
                    .get(`${API}/api/reviews?movieId=${movieId}`)
                    .then((response) => {
                        setReviews(response.data);
                    })
                    .finally(() => setIsLoading(false));
            })
            .catch((e) => console.log(e));
    };

    const handleDeleteReview = (reviewId: string) => {
        setIsLoading(true);
        axios
            .delete(`${API}/api/reviews`, {
                data: {
                    id: reviewId,
                },
            })
            .then(() => {
                axios
                    .get(`${API}/api/reviews?movieId=${movieId}`)
                    .then((response) => {
                        setReviews(response.data);
                    })
                    .finally(() => setIsLoading(false));
            });
    };

    useEffect(() => {
        const fetchData = async () => {
            const reviews = await axios
                .get(`${API}/api/reviews?movieId=${movieId}`)
                .then((response) => response.data)
                .catch(() => undefined);

            return reviews;
        };

        fetchData().then((data) => setReviews(data));
    }, [movieId]);

    return (
        <>
            <div className={cls.newReview}>
                <Input
                    placeholder="Введите свой отзыв"
                    fullWidth
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <Button onClick={handleSendReview}>Отправить</Button>
            </div>
            <div className={cls.reviewsWrapper}>
                {isLoading ? (
                    <div>Loading...</div>
                ) : (
                    <>
                        {reviews?.map((r: any) => (
                            <div className={cls.reviewCard} key={r.id}>
                                {user?.name === r.username ? (
                                    <Button onClick={() => handleDeleteReview(r.id)}>X</Button>
                                ) : null}
                                <p className={cls.username}>{r.user.username}</p>
                                <p className={cls.text}>{r.text}</p>
                                <p className={cls.dateTime}>{r.dateTime}</p>
                            </div>
                        ))}
                    </>
                )}
            </div>
        </>
    );
};
