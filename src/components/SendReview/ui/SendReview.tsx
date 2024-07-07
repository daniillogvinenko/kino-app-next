"use client";

import { Button } from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import cls from "./SendReview.module.scss";
import { useEffect, useState } from "react";
import { API } from "@/shared/consts/consts";
import { useSession } from "next-auth/react";
import { Review, User } from "@prisma/client";
import Image from "next/image";
import { cn } from "@/shared/helpers/classNames/classNames";
import { PageLoader } from "@/components/ui/PageLoader";
import { ReviewExpanded } from "@/shared/types/entities";
import { LikeIcon } from "@/components/ui/icons/LikeIcon";
import { DislikeIcon } from "@/components/ui/icons/DislikeIcon";

interface SendReviewProps {
    movieId: string;
}

/**
 * Send review form and list of reviews for a movie
 * @returns
 */
export const SendReview = ({ movieId }: SendReviewProps) => {
    const [value, setValue] = useState("");
    const [reviews, setReviews] = useState<ReviewExpanded[]>([]);
    const [commentIsDeleteing, setCommentIsDeleteing] = useState<number[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const session = useSession();
    const user = session.data?.user;

    // todo переписать на server actions
    const handleSendReview = () => {
        if (value && value.trim()) {
            setIsLoading(true);
            fetch(`${API}/api/reviews`, {
                method: "POST",
                body: JSON.stringify({ text: value, username: user?.name, movieId: movieId }),
                cache: "no-store",
            }).then(() => {
                setValue("");
                fetch(`${API}/api/reviews?movieId=${movieId}`, { cache: "no-store" })
                    .then((response) => response.json())
                    .then((data) => {
                        setIsLoading(false);
                        setReviews(data);
                    });
            });
        }
    };

    // todo доделать обработку неудачного запроса
    const handleDeleteReview = (reviewId: number) => {
        setCommentIsDeleteing((p) => [...p, reviewId]);
        fetch(`${API}/api/reviews`, {
            body: JSON.stringify({
                id: reviewId,
            }),
            cache: "no-store",
            method: "DELETE",
        }).then((response) => {
            if (response.ok) {
                setReviews((r) => {
                    const resArray = JSON.parse(JSON.stringify(r?.filter((item) => item.id !== reviewId)));
                    return resArray;
                });
                setCommentIsDeleteing((a) => {
                    const resArray = a.filter((item) => item !== +reviewId);
                    return resArray;
                });
            }
        });
    };

    useEffect(() => {
        const fetchData = async () => {
            const reviews = await fetch(`${API}/api/reviews?movieId=${movieId}`, { cache: "no-store" })
                .then((response) => response.json())
                .catch(() => undefined);

            return reviews;
        };

        setIsLoading(true);
        fetchData().then((data) => {
            setIsLoading(false);
            setReviews(data);
        });
    }, [movieId]);

    return (
        <>
            {user && reviews ? (
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
                {reviews ? (
                    isLoading ? (
                        <PageLoader className={cls.loader} />
                    ) : (
                        reviews?.map((r) => (
                            <div
                                className={cn(cls.reviewCard, {}, [
                                    commentIsDeleteing.includes(r.id) ? cls.isLoading : "",
                                ])}
                                key={r.id}
                            >
                                <PageLoader className={cls.cardLoader} />
                                <div className={cls.topFlex}>
                                    <div className={cls.userAvatar}></div>
                                    <p className={cls.username}>{r.user.username}</p>
                                </div>
                                <p className={cls.text}>{r.text}</p>
                                <div className={cls.bottomFlex}>
                                    <div className={cls.flexRight}>
                                        <p className={cls.dateTime}>{new Date(r.dateTime).toDateString()}</p>
                                        <div className={cls.reactionsWrapper}>
                                            <LikeIcon />
                                            <p>12</p>
                                            <DislikeIcon />
                                        </div>
                                    </div>
                                    {user?.name === r.username ? (
                                        <p onClick={() => handleDeleteReview(r.id)} className={cls.dateTime}>
                                            Удалить комментарий
                                        </p>
                                    ) : null}
                                </div>
                            </div>
                        ))
                    )
                ) : (
                    <div className={cls.errorWrapper}>
                        <span>Упс!</span> <p>Произошла ошибка при загрузке комментариев</p>
                    </div>
                )}
            </div>
        </>
    );
};
