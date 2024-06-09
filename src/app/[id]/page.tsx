import cls from "./page.module.scss";
import { Button } from "@/components/ui/Button";
import { Header } from "@/components/Header";
import Link from "next/link";
import { SignOutButton } from "@/components/SignOutButton/SignOutButton";
import axios from "axios";
import { MovieList } from "@/components/MovieList";
import { API } from "@/shared/consts/consts";

interface ProfilePageProps {
    params: {
        id: string;
    };
}

// todo - нужно сделать редирект, если пользователь не авторизован
export default async function ProfilePage({ params }: ProfilePageProps) {
    const user = await axios
        .get(`${API}/api/users/${params.id}`)
        .then((response) => response.data)
        .catch(() => undefined);

    return (
        <>
            <Header />
            <div className={cls.ProfilePage}>
                <div className="container">
                    <div className={cls.contentWrapper}>
                        {user ? (
                            <>
                                <div className={cls.username}>{user?.username}</div>
                                <div className={cls.btnWrapper}>
                                    <Button variant={"outline"}>Редактировать профиль</Button>
                                    <SignOutButton />
                                </div>
                                <div className={cls.favTitle}>Избранное</div>
                                <MovieList movies={user?.favoriteMovies} />
                            </>
                        ) : (
                            <div>Произошла ошибка при загрузке пользователя</div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
