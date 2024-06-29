import cls from "./page.module.scss";
import { Button } from "@/components/ui/Button";
import { SignOutButton } from "@/components/SignOutButton/SignOutButton";
import { MovieList } from "@/components/MovieList";
import { API } from "@/shared/consts/consts";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { User } from "@prisma/client";
import { Metadata } from "next";
import { UserExpanded } from "@/shared/types/entities";
import { UnsubscribeButton } from "@/components/UnsubscribeButton";

interface ProfilePageProps {
    params: {
        id: string;
    };
}

export async function generateMetadata({ params }: ProfilePageProps): Promise<Metadata> {
    const user: User = await fetch(`${API}/api/users/${params.id}`, { cache: "no-store" }).then((response) =>
        response.json()
    );

    return {
        title: `Профиль: ${user.username}`,
    };
}

export default async function ProfilePage({ params }: ProfilePageProps) {
    const user: UserExpanded = await fetch(`${API}/api/users/${params.id}`, { cache: "no-store" })
        .then((response) => response.json())
        .catch(() => undefined);

    const session = await getServerSession();

    if (session?.user?.name !== params.id) {
        redirect("/");
    }

    const handleUnsubscribe = () => {
        fetch(`${API}/api/users/${user?.username}`, {
            method: "PATCH",
            body: JSON.stringify({ operation: "unsubscribe" }),
            cache: "no-store",
        });
    };

    return (
        <div className={cls.ProfilePage}>
            <div className="container">
                <div className={cls.contentWrapper}>
                    {user ? (
                        <>
                            <div className={cls.username}>{user?.username}</div>
                            <div className={cls.btnWrapper}>
                                <Button disabled variant={"outline"}>
                                    Редактировать профиль
                                </Button>
                                <SignOutButton />
                                {user.subscription ? <UnsubscribeButton username={user.username} /> : null}
                            </div>
                            <div className={cls.favTitle}>Избранное</div>
                            <MovieList className={cls.movieList} movies={user?.favoriteMovies} />
                        </>
                    ) : (
                        <div>
                            <div className={cls.errorWrapper}>
                                <span>Упс!</span> <p>Произошла ошибка при загрузке</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
