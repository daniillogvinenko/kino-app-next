"use client";

import { useState } from "react";
import cls from "./MoviesOfPerson.module.scss";
import { cn } from "@/shared/helpers/classNames/classNames";
import { MovieList } from "@/components/MovieList";
import { Movie, Person } from "@prisma/client";

interface MoviesOfPersonProps {
    person: Person & { actedInMovies: Movie[]; directedMovies: Movie[] };
    className?: string;
}

/**
 * renders movies of a person
 * @returns
 */
export const MoviesOfPerson = ({ person, className }: MoviesOfPersonProps) => {
    const [category, setCategory] = useState<"directed" | "acted">(person.actedInMovies.length ? "acted" : "directed");

    const handleSetCategoryDirected = () => {
        setCategory("directed");
    };

    const handleSetCategoryActed = () => {
        setCategory("acted");
    };

    return (
        <div data-testid="MoviesOfPerson" className={cn(cls.MoviesOfPerson, {}, [className])}>
            <div className={cls.filmsTitle}>В главных ролях</div>
            <div className={cls.swithcerWrapper}>
                {!!person.actedInMovies.length && (
                    <div data-testid="actedSwitcher" onClick={handleSetCategoryActed} className={cls.switcher}>
                        <div className={cls.switcherCategory}>Актер</div>
                        <div className={cls.switcherAmount}>{person?.actedInMovies.length} фильмов</div>
                        <div
                            style={{ display: category === "acted" ? "block" : "none" }}
                            className={cls.switcherIndicator}
                        ></div>
                    </div>
                )}
                {!!person.directedMovies.length && (
                    <div data-testid="directedSwitcher" onClick={handleSetCategoryDirected} className={cls.switcher}>
                        <div className={cls.switcherCategory}>Режисер</div>
                        <div className={cls.switcherAmount}>{person?.directedMovies.length} фильмов</div>
                        <div
                            style={{ display: category === "directed" ? "block" : "none" }}
                            className={cls.switcherIndicator}
                        ></div>
                    </div>
                )}
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
