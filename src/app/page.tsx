import { Button } from "@/components/ui/Button";
import cls from "./page.module.scss";
import { Header } from "@/components/Header";
import axios from "axios";
import { prisma } from "../../lib/prisma";

export default async function Home() {
    const user = await axios.get(`http://localhost:3000/api/movies/${1}`).then((response) => response.data);
    const movies = await axios.get("http://localhost:3000/api/movies").then((response) => response.data);

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
