import { MoviesOfPerson } from "@/components/MoviesOfPerson";
import cls from "./page.module.scss";
import Image from "next/image";
import { API } from "@/shared/consts/consts";
import { Movie, Person } from "@prisma/client";
import { Metadata } from "next";
import { mapGenresArrayToRussian, mapProfessionArrayToRussian } from "@/shared/helpers/maps/maps";

interface PersonPageProps {
    params: {
        id: string;
    };
}

export async function generateMetadata({ params }: PersonPageProps): Promise<Metadata> {
    const person: Person & { actedInMovies: Movie[]; directedMovies: Movie[] } = await fetch(
        `${API}/api/persons/${params.id}`,
        { cache: "no-store" }
    ).then((response) => response.json());

    return {
        title: `${person.fullName} (${person.fullNameEnglish}) - Фильмы, биография`,
    };
}

export default async function PersonPage(props: PersonPageProps) {
    const { params } = props;

    const person: Person & { actedInMovies: Movie[]; directedMovies: Movie[] } = await fetch(
        `${API}/api/persons/${params.id}`,
        { cache: "no-store" }
    )
        .then((response) => response.json())
        .catch(() => undefined);

    const professionsString = mapProfessionArrayToRussian(person.professions).join(", ");
    const genresString = mapGenresArrayToRussian(person.personGenres).join(", ");

    return (
        <div className={cls.PersonPage}>
            <div className="container">
                {person ? (
                    <>
                        <div className={cls.flex1}>
                            <Image src={`/static/images/persons/${person.mainImage}`} alt="" width={302} height={450} />
                            <div>
                                <div className={cls.fullName}>{person.fullName}</div>
                                <div className={cls.englishFullname}>{person.fullNameEnglish}</div>
                                <div className={cls.aboutTitle}>О персоне</div>
                                <div className={cls.grid}>
                                    <span className={cls.gridLeftColumn}>Карьера</span>
                                    <span>{professionsString}</span>
                                    <span className={cls.gridLeftColumn}>Рост</span>
                                    <span>1,83м</span>
                                    <span className={cls.gridLeftColumn}>Дата рождения</span>
                                    <span>11 ноября, 1974 • 49 лет</span>
                                    <span className={cls.gridLeftColumn}>Место рождения</span>
                                    <span>Лос-Анджелес, Калифорния, США</span>
                                    <span className={cls.gridLeftColumn}>Жанры</span>
                                    <span>{genresString}</span>
                                </div>
                            </div>
                        </div>
                        <MoviesOfPerson person={person} />
                    </>
                ) : (
                    <div className={cls.errorWrapper}>
                        <span>Упс!</span> <p>Произошла ошибка при загрузке</p>
                    </div>
                )}
            </div>
        </div>
    );
}
