"use client";

import { Button } from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import cls from "./SendReview.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { API } from "@/shared/consts/consts";
import { useSession } from "next-auth/react";
import { Review } from "@prisma/client";
import Image from "next/image";
import { cn } from "@/shared/helpers/classNames/classNames";
import { PageLoader } from "@/components/PageLoader";

interface SendReviewProps {
    movieId: string;
}

export const SendReview = ({ movieId }: SendReviewProps) => {
    const [value, setValue] = useState("");
    const [reviews, setReviews] = useState<Review[]>();
    const [commentIsDeleteing, setCommentIsDeleteing] = useState<string[]>([]);
    const session = useSession();
    const user = session.data?.user;

    const handleSendReview = () => {
        fetch(`${API}/api/reviews`, {
            method: "POST",
            body: JSON.stringify({ text: value, username: user?.name, movieId: movieId }),
            cache: "no-store",
        })
            .then(() => {
                setValue("");
                fetch(`${API}/api/reviews?movieId=${movieId}`, { cache: "no-store" })
                    .then((response) => response.json())
                    .then((data) => setReviews(data));
            })
            .catch((e) => console.log(e));
    };

    const handleDeleteReview = (reviewId: string) => {
        setCommentIsDeleteing((p) => {
            const originalArray = p;
            originalArray.push(reviewId);
            return JSON.parse(JSON.stringify(originalArray));
        });
        fetch(`${API}/api/reviews`, {
            body: JSON.stringify({
                id: reviewId,
            }),
            cache: "no-store",
            method: "DELETE",
        }).then(() => {
            fetch(`${API}/api/reviews?movieId=${movieId}`, { cache: "no-store" })
                .then((response) => response.json())
                .then((data) => setReviews(data));
        });
    };

    useEffect(() => {
        const fetchData = async () => {
            const reviews = await fetch(`${API}/api/reviews?movieId=${movieId}`, { cache: "no-store" })
                .then((response) => response.json())
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
                {reviews?.map((r: any) => (
                    <div
                        className={cn(cls.reviewCard, {}, [commentIsDeleteing.includes(r.id) ? cls.isLoading : ""])}
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
                                    <Image src={`${API}/static/icons/like.svg`} alt="" height={18} width={18} />
                                    <p>12</p>
                                    <Image src={`${API}/static/icons/dislike.svg`} alt="" height={18} width={18} />
                                </div>
                            </div>
                            {user?.name === r.username ? (
                                <p onClick={() => handleDeleteReview(r.id)} className={cls.dateTime}>
                                    Удалить комментарий
                                </p>
                            ) : null}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};
