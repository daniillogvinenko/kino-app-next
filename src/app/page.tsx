import cls from "./page.module.scss";
import { MainPageHeroSection } from "@/components/MainPageHeroSection";
import Image from "next/image";
import Link from "next/link";
import { API } from "@/shared/consts/consts";
import { FavoritesButton } from "@/components/FavoritesButton/FavoritesButton";

export default async function HomePage() {
    const movies = await fetch(`${API}/api/movies`, { cache: "no-store" })
        .then((response) => response.json())
        .catch(() => undefined);

    return (
        <div className={cls.HomePage}>
            <MainPageHeroSection />
            <div className="container">
                {movies ? (
                    <>
                        <div className={cls.title}>В тренде</div>
                        <div className={cls.wrapper}>
                            {movies?.map((movie: any) => (
                                <div key={movie.id} className={cls.card}>
                                    <Link key={movie.id} href={`movies/${movie.id}`}>
                                        <Image
                                            src={`/static/images/movies/${movie.mainImage}`}
                                            alt="movieImage"
                                            width={190}
                                            height={287}
                                        />
                                    </Link>
                                    <FavoritesButton className={cls.favButton} key={movie.id} movieId={movie.id} />
                                    <div className={cls.movieTitle}>{movie.title}</div>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className={cls.errorWrapper}>
                        <span>Упс!</span> <p>Произошла ошибка при загрузке фильмов</p>
                    </div>
                )}
            </div>
        </div>
    );
}
