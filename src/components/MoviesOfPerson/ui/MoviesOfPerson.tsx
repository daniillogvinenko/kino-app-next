"use client";

import { useState } from "react";
import cls from "./MoviesOfPerson.module.scss";
import Image from "next/image";
import { cn } from "@/shared/helpers/classNames/classNames";
import { Button } from "@/components/ui/Button";
import { MovieList } from "@/components/MovieList";

interface MoviesOfPersonProps {
    person: any;
    className?: string;
}

export const MoviesOfPerson = ({ person, className }: MoviesOfPersonProps) => {
    const [category, setCategory] = useState<"directed" | "acted">("acted");

    const handleSetCategoryDirected = () => {
        setCategory("directed");
    };

    const handleSetCategoryActed = () => {
        setCategory("acted");
    };

    return (
        <div className={cn(cls.MoviesOfPerson, {}, [className])}>
            <div className={cls.filmsTitle}>В главных ролях</div>
            <div className={cls.swithcerWrapper}>
                <div onClick={handleSetCategoryActed} className={cls.switcher}>
                    <div className={cls.switcherCategory}>Актер</div>
                    <div className={cls.switcherAmount}>{person?.actedInMovies.length} фильмов</div>
                    <div
                        style={{ display: category === "acted" ? "block" : "none" }}
                        className={cls.switcherIndicator}
                    ></div>
                </div>
                <div onClick={handleSetCategoryDirected} className={cls.switcher}>
                    <div className={cls.switcherCategory}>Режисер</div>
                    <div className={cls.switcherAmount}>{person?.directedMovies.length} фильмов</div>
                    <div
                        style={{ display: category === "directed" ? "block" : "none" }}
                        className={cls.switcherIndicator}
                    ></div>
                </div>
            </div>
            <div className={cls.separator}></div>
            {category === "acted" ? (
                <MovieList movies={person?.actedInMovies} />
            ) : (
                <MovieList movies={person?.directedMovies} />
            )}
        </div>
    );
};
