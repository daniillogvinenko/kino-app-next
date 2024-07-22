"use client";

import { useSearchParams } from "next/navigation";
import cls from "./page.module.scss";
import { useEffect, useState } from "react";
import { API } from "@/shared/consts/consts";
import { Movie, Person } from "@prisma/client";
import { MovieList } from "@/components/MovieList";
import { PersonList } from "@/components/PersonList";
import { PageLoader } from "@/components/ui/PageLoader";

export default function SearchPage() {
    const params = useSearchParams();
    const searchValue = params.get("search");
    const [searchResultMovies, setSearchResultMovies] = useState<Movie[]>([]);
    const [searchResultPersons, setSearchResultPersons] = useState<Person[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // todo вынести в хук?
    useEffect(() => {
        if (searchValue) {
            setIsLoading(true);
            const p1 = fetch(`${API}/api/movies?search=${searchValue}`, { cache: "no-store" });
            const p2 = fetch(`${API}/api/persons?search=${searchValue}`, { cache: "no-store" });
            Promise.all([p1, p2]).then(async ([res1, res2]) => {
                const movies: Movie[] = await res1.json();
                const persons: Person[] = await res2.json();
                setSearchResultMovies(movies);
                setSearchResultPersons(persons);
                setIsLoading(false);
            });
        } else {
            setSearchResultMovies([]);
            setSearchResultPersons([]);
            setIsLoading(false);
        }
    }, [searchValue]);

    return (
        <div className={cls.SearchPage}>
            <div className="container">
                <h1>Все результаты по запросу &quot;{searchValue}&quot;</h1>
                {isLoading ? (
                    <PageLoader className={cls.loader} />
                ) : (
                    <>
                        <p className={cls.categoryTitle}>фильмы</p>
                        {searchResultMovies.length ? (
                            <MovieList movies={searchResultMovies} />
                        ) : (
                            <div>Фильмы не найдены</div>
                        )}
                        <p className={cls.categoryTitle}>персоны</p>
                        {searchResultPersons.length ? (
                            <PersonList persons={searchResultPersons} />
                        ) : (
                            <div>Персоны не найдены</div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
