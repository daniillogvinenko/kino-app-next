import cls from "./page.module.scss";
import { Button } from "@/components/ui/Button";
import { Header } from "@/components/Header";
import Link from "next/link";
import { SignOutButton } from "@/components/SignOutButton/SignOutButton";
import axios from "axios";
import { LOCALSTORAGE_USER } from "@/shared/consts/consts";
import {redirect} from 'next/navigation'

interface ProfilePageProps {
    params: {
        id: string;
    };
}

// todo - нужно сделать редирект, если пользователь не авторизован
export default async function ProfilePage({ params }: ProfilePageProps) {
    const user = await axios.get(`http://localhost:3000/api/users/user1`).then((response) => response.data);

    const favMovies = user?.favoriteMovies

    return (
        <>
            <Header />
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
                            {favMovies?.map((fav) => (
                                <Link key={fav.id} href={`/movies/${fav.id}`}>
                                    <li>
                                        <img src={fav.mainImg} alt="" />
                                        <div>
                                            <p>{fav.title}</p>
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
