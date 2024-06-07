import { Button } from "@/components/ui/Button";
import cls from "./page.module.scss";
import { Header } from "@/components/Header";
import axios from "axios";
import { prisma } from "../../lib/prisma";

export default async function Home() {
    const movies = await axios.get("http://localhost:3000/api/movies").then((response) => response.data);

    // await prisma.movie.update({
    //     where: {
    //         id: 3
    //     },
    //     data: {
    //         mainActors: {
    //             create: {
    //                 id: 23,
    //                 fullName: 'Майкл Мэдсен'
    //             }
    //         }
    //     }
    // })

    return (
        <>
            <Header />
            <div className="container">
                <div className={cls.wrapper}>
                    {movies.map((movie) => (
                        <div key={movie.id} className={cls.card}>
                            <p className={cls.title}>{movie.title}</p>
                            <Button href={`/movies/${movie.id}`}>Подбронее</Button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
