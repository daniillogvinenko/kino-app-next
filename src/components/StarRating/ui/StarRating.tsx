import { cn } from "@/shared/helpers/classNames/classNames";
import StarIcon from "../../../../public/static/icons/starIcon.svg";
import cls from "./StarRating.module.scss";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

interface Star {
    rate: number;
    description: string;
}

const stars: Star[] = [
    {
        rate: 1,
        description: "Хуже некуда",
    },
    {
        rate: 2,
        description: "Ужасно",
    },
    {
        rate: 3,
        description: "Плохо",
    },
    {
        rate: 4,
        description: "Слабо",
    },
    {
        rate: 5,
        description: "Средне",
    },
    {
        rate: 6,
        description: "Выше среднего",
    },
    {
        rate: 7,
        description: "Хорошо",
    },
    {
        rate: 8,
        description: "Отлично",
    },
    {
        rate: 9,
        description: "Великолепно",
    },
    {
        rate: 10,
        description: "Шедевр",
    },
];

export const StarRating = () => {
    const [rate, setRate] = useState(0);
    const [currentStarsCount, setCurrentStarsCount] = useState<number>(0);

    const onHover = (starsCount: number) => () => {
        setCurrentStarsCount(starsCount);
    };

    const onLeave = () => {
        setCurrentStarsCount(0);
    };

    const className = (starNumber: number): string => {
        if (currentStarsCount >= starNumber && currentStarsCount < 5) {
            return cls.red;
        }

        if (currentStarsCount >= starNumber && currentStarsCount < 7) {
            return cls.white;
        }

        if (currentStarsCount >= starNumber) {
            return cls.green;
        }

        return cls.normal;
    };

    if (rate) {
        return (
            <div className={cls.rate}>
                <div className={className(rate)}>
                    {rate} <StarIcon className={cls.icon} width={48} height={48} />
                </div>
                <Button onClick={() => setRate(0)} variant={"borderless"}>
                    Удалить оценку
                </Button>
            </div>
        );
    }

    return (
        <>
            <div className={cls.top}>
                {currentStarsCount ? (
                    <div className={cls.hoveredTop}>
                        <p className={className(currentStarsCount)}>{currentStarsCount}</p>{" "}
                        <p>{stars.find((s) => s.rate === currentStarsCount)?.description}</p>
                    </div>
                ) : (
                    <p className={cls.title}>Оцените фильм</p>
                )}
            </div>

            <div className={cls.rateFlex}>
                {stars.map((star) => (
                    <StarIcon
                        key={star.rate}
                        onMouseEnter={onHover(star.rate)}
                        onMouseLeave={onLeave}
                        className={cn(cls.starIcon, {}, [className(star.rate)])}
                        width={72}
                        height={54}
                        onClick={() => setRate(star.rate)}
                    />
                ))}
            </div>
        </>
    );
};
