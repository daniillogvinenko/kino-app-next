import { cn } from "@/shared/helpers/classNames/classNames";
import StarIcon from "../../../../public/static/icons/starIcon.svg";
import cls from "./StarRating.module.scss";
import { useState } from "react";

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
        description: "Великолеано",
    },
    {
        rate: 10,
        description: "Шедевр",
    },
];

interface StarRatingProps {
    onClick: (rate: number) => void;
}

export const StarRating = ({ onClick }: StarRatingProps) => {
    const [currentStarsCount, setCurrentStarsCount] = useState<number>(0);

    const onHover = (starsCount: number) => () => {
        setCurrentStarsCount(starsCount);
    };

    const onLeave = () => {
        setCurrentStarsCount(0);
    };

    const className = (starNumber: Star): string => {
        if (currentStarsCount >= starNumber.rate && currentStarsCount < 5) {
            return cls.hoveredRed;
        }

        if (currentStarsCount >= starNumber.rate && currentStarsCount < 7) {
            return cls.hoveredWhite;
        }

        if (currentStarsCount >= starNumber.rate) {
            return cls.hoveredGreen;
        }

        return cls.normal;
    };

    return (
        <>
            <div className={cls.top}>
                {currentStarsCount ? (
                    <div className={cls.hoveredTop}>
                        <p className={className(stars.find((s) => s.rate === currentStarsCount)!)}>
                            {currentStarsCount}
                        </p>{" "}
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
                        className={cn(cls.starIcon, {}, [className(star)])}
                        width={72}
                        height={54}
                        onClick={() => onClick(star.rate)}
                    />
                ))}
            </div>
        </>
    );
};
