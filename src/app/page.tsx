import { Button } from "@/components/ui/Button";
import cls from "./page.module.scss";
import { Header } from "@/components/Header";
import { Movie } from "@/shared/types/types";

export default async function Home() {
    const user = await fetch(`http://localhost:3000/api/movies/${1}`).then((data) => data.json());
    const movies: Movie[] = await fetch("http://localhost:3000/api/movies").then((data) => data.json());

    return (
        <>
            <Header user={user} />
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
        </>
    );
}
