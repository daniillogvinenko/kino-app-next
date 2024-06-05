import cls from "./page.module.scss";
import { Button } from "@/components/ui/Button";
import { Header } from "@/components/Header";
import Link from "next/link";
import { SignOutButton } from "@/components/SignOutButton/SignOutButton";
import { Movie, User } from "@/types/types";

interface ProfilePageProps {
    params: {
        id: string;
    };
}

export default async function ProfilePage({ params }: ProfilePageProps) {
    const user: User = await fetch(`http://localhost:3000/api/users/${1}`).then((data) => data.json());

    const favoriteMovies: Movie[] = await fetch(`http://localhost:3000/api/movies?userId=${1}`).then((data) =>
        data.json()
    );

    // if (!localStorage.getItem(LOCALSTORAGE_USER)) {
    //     redirect("/");
    // }

    return (
        <>
            <Header user={user} />
            <div className={cls.ProfilePage}>
                <div className="container">
                    <div>
                        <p>Профиль</p>
                        <p>Имя пользователя: {user?.username}</p>
                        <p>Дата регистрации: {user?.username}</p>
                        <p>Оставлено комментариев: {user?.username}</p>
                        <Button>Изменить данные</Button>
                        <SignOutButton />
                    </div>
                    <div className={cls.favList}>
                        <p>Любимые фильмы</p>
                        <ul>
                            {favoriteMovies?.map((fav) => (
                                <Link key={fav.id} href={`/movies/${fav.id}`}>
                                    <li>
                                        <img src={fav.mainImg} alt="" />
                                        <div>
                                            <p>{fav.title}</p>
                                            <p>{fav.description}</p>
                                            <p>{fav.year}</p>
                                            <p>{fav.genres.join(", ")}</p>
                                            <p>{fav.country}</p>
                                            <p>{fav.duration}</p>
                                            <p>{fav.ageLimit}</p>
                                        </div>
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
