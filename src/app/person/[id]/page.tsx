import { MoviesOfPerson } from "@/components/MoviesOfPerson";
import cls from "./page.module.scss";
import { Header } from "@/components/Header";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

interface PersonPageProps {
    params: {
        id: string;
    };
}

export default async function PersonPage(props: PersonPageProps) {
    const { params } = props;

    const person = await axios.get(`http://localhost:3000/api/persons/${params.id}`).then((response) => response.data);

    return (
        <>
            <Header />
            <div className="container">
                <div className={cls.flex1}>
                    <Image src={`/static/images/persons/${person.mainImage}`} alt="" width={302} height={450} />
                    <div>
                        <div className={cls.fullName}>{person.fullName}</div>
                        <div className={cls.englishFullname}>{person.fullNameEnglish}</div>
                        <div className={cls.aboutTitle}>О персоне</div>
                        <div className={cls.grid}>
                            <span className={cls.gridLeftColumn}>Карьера</span>
                            <span>{person.personGenres.join(", ")}</span>
                            <span className={cls.gridLeftColumn}>Рост</span>
                            <span>1,83м</span>
                            <span className={cls.gridLeftColumn}>Дата рождения</span>
                            <span>11 ноября, 1974 • 49 лет</span>
                            <span className={cls.gridLeftColumn}>Место рождения</span>
                            <span>Лос-Анджелес, Калифорния, США</span>
                            <span className={cls.gridLeftColumn}>Жанры</span>
                            <span>{person.professions.join(", ")}</span>
                        </div>
                    </div>
                </div>
                <MoviesOfPerson person={person} />
            </div>
        </>
    );
}
