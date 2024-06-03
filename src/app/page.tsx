import { Button } from "@/components/ui/Button";
import cls from "./page.module.scss";
import { MockApi } from "@/shared/mock-server/server";

export default async function Home() {
    const movies = await MockApi.getAllMovies();

    return (
        <div className="container">
            <div className={cls.wrapper}>
                {movies.map((movie) => (
                    <div key={movie.id} className={cls.card}>
                        <div className={cls.imgWrapper}>
                            <img className={cls.img} src={movie.mainImg} alt="" />
                        </div>
                        <p className={cls.title}>{movie.title}</p>
                        <p className={cls.description}>{movie.description}</p>
                        <Button href={`/movies/${movie.id}`}>Подбронее</Button>
                    </div>
                ))}
            </div>
        </div>
    );
}
