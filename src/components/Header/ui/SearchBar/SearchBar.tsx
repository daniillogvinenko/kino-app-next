import { ChangeEvent, useEffect, useState, useRef } from "react";
import cls from "./SearchBar.module.scss";
import Link from "next/link";
import Image from "next/image";
import Input from "@/components/ui/Input";
import { Overlay } from "@/components/ui/Overlay";
import { API } from "@/shared/consts/consts";
import { PageLoader } from "@/components/ui/PageLoader";
import { Movie, Person } from "@prisma/client";
import { Button } from "@/components/ui/Button";

export const SearchBar = () => {
    const [isSearchOpened, setIsSearchOpened] = useState<boolean>(false);
    const [searchValue, setSearchValue] = useState("");
    const [searchResultMovies, setSearchResultMovies] = useState<Movie[]>([]);
    const [searchResultPersons, setSearchResultPersons] = useState<Person[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

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
        }
    }, [searchValue]);

    useEffect(() => {
        if (isSearchOpened) {
            inputRef.current?.focus();
        }
    }, [isSearchOpened]);

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    const handleOpenSearch = () => {
        setIsSearchOpened(true);
    };

    const handleCloseSearch = () => {
        setIsSearchOpened(false);
        setSearchResultMovies([]);
        setSearchResultPersons([]);
        setSearchValue("");
    };

    if (!isSearchOpened) {
        return (
            <div data-testid="SearchBarClosed" className={cls.SearchBarOpen} onClick={handleOpenSearch}>
                <Image width={24} height={24} src="/static/icons/search.svg" alt="searchIcon" />
                <span>Поиск</span>
            </div>
        );
    }

    return (
        <>
            <Overlay onClick={handleCloseSearch} className={cls.overlay} />

            <div data-testid="SearchBarOpened" className={cls.SearchBar}>
                <div className={cls.inputWrapper}>
                    <Input ref={inputRef} value={searchValue} onChange={handleSearchChange} />
                    <Image
                        onClick={handleCloseSearch}
                        src="/static/icons/close.svg"
                        alt="closeIcon"
                        width={14}
                        height={14}
                    />
                </div>
                {isLoading ? (
                    <PageLoader className={cls.loader} />
                ) : (
                    <>
                        {error ? (
                            <div>Произошла ошибка при загрузке</div>
                        ) : (
                            <div className={cls.searchResults}>
                                <ul>
                                    {!!searchResultMovies.length && <p className={cls.category}>Фильмы</p>}
                                    {searchResultMovies?.slice(0, 3).map((movie) => (
                                        <Link onClick={handleCloseSearch} key={movie.id} href={`/movies/${movie.id}`}>
                                            <li>
                                                <Image
                                                    src={`/static/images/movies/${movie.mainImage}`}
                                                    alt=""
                                                    width={43}
                                                    height={65}
                                                />
                                                <div className={cls.movieInfoWrapper}>
                                                    <p>{movie.title}</p>
                                                    <p className={cls.movieInfo}>
                                                        <span>{movie.rating!.toString().split("").join(",")}</span>
                                                        {movie.country}
                                                    </p>
                                                </div>
                                            </li>
                                        </Link>
                                    ))}
                                </ul>
                                <ul>
                                    {!!searchResultPersons.length && <p className={cls.category}>Персоны</p>}
                                    {searchResultPersons?.slice(0, 3).map((person) => (
                                        <Link onClick={handleCloseSearch} key={person.id} href={`/person/${person.id}`}>
                                            <li>
                                                <Image
                                                    src={`/static/images/persons/${person.mainImage}`}
                                                    alt=""
                                                    width={43}
                                                    height={65}
                                                />
                                                <div className={cls.movieInfoWrapper}>
                                                    <p>{person.fullName}</p>
                                                    <p className={cls.movieInfo}>{person.fullNameEnglish}</p>
                                                </div>
                                            </li>
                                        </Link>
                                    ))}
                                </ul>
                                <Button href={`/search?search=${searchValue}`} variant={"borderless"}>
                                    Показать все результаты
                                </Button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </>
    );
};
