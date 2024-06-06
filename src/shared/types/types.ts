type MovieId = string;
type ReviewId = string;
type UserId = string;
type PersonId = string;

type Genre =
    | "драма"
    | "криминал"
    | "фантастика"
    | "комедия"
    | "приключения"
    | "ужасы"
    | "боевик"
    | "вестерн"
    | "приключения"
    | "военный"
    | "детектив"
    | "мелодрама"
    | "документальный"
    | "триллер"
    | "приключения";

export interface Movie {
    id: MovieId;
    title: string;
    description: string;
    mainImg: string;
    otherImages: string[];
    genres: Genre[];
    year: string;
    country: string;
    duration: string;
    ageLimit: string;
    director: PersonId;
    mainActors: PersonId[];
}

export interface Review {
    id: ReviewId;
    userId: string;
    movieId: string;
    text: string;
}

export interface User {
    id: UserId;
    username: string;
    password: string;
    // массив id фильмов
    favorites: MovieId[];
}

type Profession = "Продюсер" | "Режисер" | "Актер" | "Сценарист" | "Монтажер" | "Оператор" | "Композитор";

export interface Person {
    id: PersonId;
    fullName: string;
    professions: Profession[];
    height: string;
    dateOfBirth: string;
    placeOfBirth: string;
    genres: Genre[];
    mainImg: string;
    otherImages: string[];
}
