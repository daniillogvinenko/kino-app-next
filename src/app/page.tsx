import cls from "./page.module.scss";
import axios from "axios";
import { MainPageHeroSection } from "@/components/MainPageHeroSection";
import Image from "next/image";
import Link from "next/link";
import { API } from "@/shared/consts/consts";

export default async function Home() {
    const movies = await axios
        .get(`${API}/api/movies`)
        .then((response) => response.data)
        .catch(() => undefined);

    return (
        <>
            <MainPageHeroSection />
            <div className="container">
                <div className={cls.title}>В тренде</div>
                <div className={cls.wrapper}>
                    {movies ? (
                        <>
                            {movies?.map((movie: any) => (
                                <Link key={movie.id} href={`movies/${movie.id}`}>
                                    <div key={movie.id} className={cls.card}>
                                        <Image
                                            src={`/static/images/movies/${movie.mainImage}`}
                                            alt="movieImage"
                                            width={190}
                                            height={287}
                                        />
                                        <div className={cls.movieTitle}>{movie.title}</div>
                                    </div>
                                </Link>
                            ))}
                        </>
                    ) : (
                        <div>Ошибка загрузки</div>
                    )}
                </div>
            </div>
        </>
    );
}
