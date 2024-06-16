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
                setValue("");
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
            {user ? (
                <div className={cls.newReview}>
                    <Input
                        placeholder="Введите свой отзыв"
                        fullWidth
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <Button onClick={handleSendReview}>Отправить</Button>
                </div>
            ) : null}
            <div className={cls.reviewsWrapper}>
                {isLoading ? (
                    <div>Loading...</div>
                ) : (
                    <>
                        {reviews?.map((r: any) => (
                            <div className={cls.reviewCard} key={r.id}>
                                <p className={cls.username}>{r.user.username}</p>
                                <p className={cls.text}>{r.text}</p>
                                <div className={cls.bottomFlex}>
                                    <p className={cls.dateTime}>{new Date(r.dateTime).toDateString()}</p>

                                    {user?.name === r.username ? (
                                        <p onClick={() => handleDeleteReview(r.id)} className={cls.dateTime}>
                                            Удалить комментарий
                                        </p>
                                    ) : null}
                                </div>
                            </div>
                        ))}
                    </>
                )}
            </div>
        </>
    );
};
