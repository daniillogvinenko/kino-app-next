import { Movie } from "@/types/types";
import { NextRequest, NextResponse } from "next/server";
import { users } from "../db";

const movies: Movie[] = [
    {
        id: "1",
        title: "Godfather",
        description:
            "The Godfather is a 1972 American epic gangster film[2] directed by Francis Ford Coppola, who co-wrote the screenplay with Mario Puzo, based on Puzo's best-selling 1969 novel of the same title. The film stars an ensemble cast including Marlon Brando, Al Pacino, James Caan, Richard Castellano, Robert Duvall, Sterling Hayden, John Marley, Richard Conte, and Diane Keaton.",
        mainImg: "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
        otherImages: [
            "https://entertainment.time.com/wp-content/uploads/sites/3/2012/03/vito-is-shot.jpg?w=720&h=480&crop=1",
            "https://i0.wp.com/www.animatedspirit.com/wp-content/uploads/2015/05/Godfather_lastscene.jpg",
            "https://s.studiobinder.com/wp-content/uploads/2021/01/Character-Driven-Editing-in-The-Godfather-Shot-8-StudioBinder-Shotlisting-Software.jpg.webp?resolution=2560,1",
            "https://i0.wp.com/cilovers.com/wp-content/uploads/2023/02/4ZBHVZG2.jpg?resize=800%2C447&ssl=1",
        ],
        ageLimit: "18+",
        country: "США",
        genres: ["драма", "криминал"],
        duration: "2 ч 49 мин",
        year: "1972",
        director: "1",
        mainActors: ["2", "3"],
    },
    {
        id: "2",
        title: "Back to the Future",
        description:
            "Back to the Future is a 1985 American science fiction film directed by Robert Zemeckis and written by Zemeckis and Bob Gale. It stars Michael J. Fox, Christopher Lloyd, Lea Thompson, Crispin Glover, and Thomas F. Wilson. Set in 1985, it follows Marty McFly (Fox), a teenager accidentally sent back to 1955 in a time-traveling DeLorean automobile built by his eccentric scientist friend Emmett 'Doc' Brown (Lloyd), where he inadvertently prevents his future parents from falling in love – threatening his own existence – and is forced to reconcile them and somehow get back to the future.",
        mainImg:
            "https://s3.amazonaws.com/static.rogerebert.com/uploads/movie/movie_poster/back-to-the-future-1985/large_pTpxQB1N0waaSc3OSn0e9oc8kx9.jpg",
        otherImages: [
            "https://neiloseman.com/wp-content/uploads/2022/06/back-to-the-future-1985.jpg",
            "https://cdn.theasc.com/BTTF-2-Doc-Brown.jpeg",
            "https://www.hollywoodreporter.com/wp-content/uploads/2023/08/MSDBATO_EC083-H-2023.jpg",
        ],
        ageLimit: "12+",
        country: "США",
        genres: ["фантастика", "приключения", "комедия"],
        duration: "1 ч 56 мин",
        year: "1985",
        director: "1",
        mainActors: ["2", "3"],
    },
    {
        id: "3",
        title: "Pulp Fiction",
        description:
            "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        mainImg:
            "https://m.media-amazon.com/images/M/MV5BMTE5ZmIwNjEtZmZjYS00NmM0LTgyNDUtNjFjMzM3MDc1NWM2XkEyXkFqcGdeQXVyNTE1MDE2MzY@._V1_FMjpg_UX600_.jpg",
        otherImages: [
            "https://m.media-amazon.com/images/M/MV5BNTY1MzgzOTYxNV5BMl5BanBnXkFtZTgwMDI4OTEwMjE@._V1_FMjpg_UX1600_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMTQ2MDk3ODAwMV5BMl5BanBnXkFtZTgwNzE4OTEwMjE@._V1_FMjpg_UX1600_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMjE1ODYxOTkxOF5BMl5BanBnXkFtZTgwNTE4OTEwMjE@._V1_FMjpg_UX1600_.jpg",
            "https://m.media-amazon.com/images/M/MV5BMjI2OTk4OTg0NV5BMl5BanBnXkFtZTgwNTAwMzg5MTE@._V1_FMjpg_UX2160_.jpg",
        ],
        ageLimit: "18+",
        country: "США",
        genres: ["драма", "криминал"],
        duration: "2 ч 34 мин",
        year: "1994",
        director: "1",
        mainActors: ["2", "3"],
    },
];

export async function GET(req: NextRequest) {
    const userId = req.nextUrl.searchParams.get("userId");

    if (userId) {
        const user = users.find((u) => u.id === userId);

        const moviesOfUser = movies.filter((m) => user?.favorites.includes(m.id));
        return NextResponse.json(moviesOfUser);
    }

    const searchValue = req.nextUrl.searchParams.get("search");
    if (searchValue) {
        const filteredMovies = movies.filter(
            (m) =>
                m.title.toLowerCase().includes(searchValue.toLowerCase()) ||
                m.description.toLowerCase().includes(searchValue.toLowerCase())
        );
        return NextResponse.json(filteredMovies);
    }

    return NextResponse.json(movies);
}
