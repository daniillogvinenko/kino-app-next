import cls from "./page.module.scss";
import { Button } from "@/components/ui/Button";
import { Header } from "@/components/Header";
import Link from "next/link";
import { SignOutButton } from "@/components/SignOutButton/SignOutButton";
import axios from "axios";
import { FavMoviesList } from "@/components/FavMoviesList";

interface ProfilePageProps {
    params: {
        id: string;
    };
}

// todo - нужно сделать редирект, если пользователь не авторизован
export default async function ProfilePage({ params }: ProfilePageProps) {
    const user = await axios.get(`http://localhost:3000/api/users/${params.id}`).then((response) => response.data);

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
                    <FavMoviesList favMovies={user.favoriteMovies}/>
                </div>
            </div>
        </>
    );
}
