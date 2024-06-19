import { ChangeEvent, useEffect, useState, useRef } from "react";
import cls from "./SearchBar.module.scss";
import Link from "next/link";
import Image from "next/image";
import Input from "@/components/ui/Input";
import { Overlay } from "@/components/ui/Overlay";
import { API } from "@/shared/consts/consts";
import { PageLoader } from "@/components/PageLoader";

export const SearchBar = () => {
    const [isSearchOpened, setIsSearchOpened] = useState<boolean>(false);
    const [searchValue, setSearchValue] = useState("");
    const [searchResultItems, setSearchResultItems] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (searchValue) {
            const fetchData = async () => {
                const data = await fetch(`${API}/api/movies?search=${searchValue}`, { cache: "no-store" })
                    .then((response) => {
                        return response.json();
                    })
                    .catch(() => {
                        setError(true);
                    });
                return data;
            };

            setIsLoading(true);
            fetchData().then((data) => {
                setSearchResultItems(data);
                setIsLoading(false);
            });
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
                            <>
                                {searchResultItems.length ? (
                                    <ul className={cls.searchResults}>
                                        {searchResultItems?.map((movie) => (
                                            <Link key={movie.id} href={`/movies/${movie.id}`}>
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
                                                            <span>8,5</span>Lorem, ipsum dolor
                                                        </p>
                                                    </div>
                                                </li>
                                            </Link>
                                        ))}
                                    </ul>
                                ) : null}
                            </>
                        )}
                    </>
                )}
            </div>
        </>
    );
};
