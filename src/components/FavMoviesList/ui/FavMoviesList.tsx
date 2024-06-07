import cls from './FavMoviesList.module.scss'
import Link from 'next/link'

interface FavMoviesListProps {
    // todo - any!!!
    favMovies: any[]
}

export const FavMoviesList = ({favMovies}: FavMoviesListProps) => {
    return <div className={cls.favList}>
    <p>Любимые фильмы</p>
    <ul>
        {favMovies?.map((fav) => (
            <Link key={fav.id} href={`/movies/${fav.id}`}>
                <li>
                    <div>
                        <p>{fav.title}</p>
                    </div>
                </li>
            </Link>
        ))}
    </ul>
</div>
}