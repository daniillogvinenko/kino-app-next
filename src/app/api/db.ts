import { Movie, Person, Review, User } from "@/shared/types/types";

export const movies: Movie[] = [
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
export const reviews: Review[] = [
    {
        id: "1",
        movieId: "1",
        userId: "1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum assumenda at nostrum voluptatum iusto quas hic? Nostrum accusamus numquam eum.",
    },
    {
        id: "2",
        movieId: "1",
        userId: "1",
        text: "klg kl ap Lorem ipsum dolor sit amet consect etur adip s isi cing el it. Earum ass umen da at nost sg srum voluptatum iusto quas hic? Nostrum accusamus numquam eum.",
    },
];
export const users: User[] = [
    {
        id: "1",
        username: "daniillogvinenko",
        password: "test",
        favorites: ["2"],
    },
];
export const persons: Person[] = [
    {
        id: "1",
        fullName: "Фрэнсис Форд Коппола",
        professions: ["Продюсер", "Режисер", "Сценарист", "Актер", "Монтажер", "Композитор"],
        height: "1,82 м",
        dateOfBirth: "7 апреля, 1939",
        placeOfBirth: "Детройт, Мичиган, США",
        genres: ["драма", "комедия", "мелодрама"],
        mainImg: "https://alpinabook.ru/upload/resize_cache/iblock/cf3/550_800_1/cf3fbde5207ac2c280d355281804608b.jpg",
        otherImages: [
            "https://alpinabook.ru/upload/resize_cache/iblock/cf3/550_800_1/cf3fbde5207ac2c280d355281804608b.jpg",
            "https://alpinabook.ru/upload/resize_cache/iblock/cf3/550_800_1/cf3fbde5207ac2c280d355281804608b.jpg",
            "https://alpinabook.ru/upload/resize_cache/iblock/cf3/550_800_1/cf3fbde5207ac2c280d355281804608b.jpg",
        ],
    },
    {
        id: "2",
        fullName: "Леонардо ДиКаприо",
        professions: ["Актер", "Продюсер", "Сценарист"],
        height: "1,83 м",
        dateOfBirth: "11 ноября, 1974",
        placeOfBirth: "Лос-Анджелес, Калифорния, США",
        genres: ["драма", "документальный", "триллер"],
        mainImg: "https://cdn-media.tass.ru/width/1020_b9261fa1/tass/m2/uploads/i/20160303/4198271.jpg",
        otherImages: [
            "https://cdn-media.tass.ru/width/1020_b9261fa1/tass/m2/uploads/i/20160303/4198271.jpg",
            "https://cdn-media.tass.ru/width/1020_b9261fa1/tass/m2/uploads/i/20160303/4198271.jpg",
            "https://cdn-media.tass.ru/width/1020_b9261fa1/tass/m2/uploads/i/20160303/4198271.jpg",
        ],
    },
    {
        id: "3",
        fullName: "Роберт Де Ниро",
        professions: ["Актер", "Продюсер", "Режисер"],
        height: "1,77 м",
        dateOfBirth: "17 августа, 1943",
        placeOfBirth: "Нью-Йорк, США",
        genres: ["драма", "криминал", "комедия"],
        mainImg:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Robert_De_Niro_Cannes_2016.jpg/274px-Robert_De_Niro_Cannes_2016.jpg",
        otherImages: [
            "https://www.kino-teatr.ru/news/15865/143634.jpg",
            "https://cdnn21.img.ria.ru/images/07e5/01/1a/1594609741_0:161:3072:1889_1920x0_80_0_0_3eec4dc6cf8cd724e9ceb08a2f26933f.jpg",
        ],
    },
];
