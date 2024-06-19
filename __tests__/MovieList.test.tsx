import { MovieList } from "@/components/MovieList";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

const mockMovieItems = [
    {
        id: 1,
        title: "Назад в будущее",
        directorId: 4,
        movieGenres: ["fantastic", "comedy", "adventures"],
        mainImage: "1.webp",
        movieDescription:
            "Подросток Марти с помощью машины времени, сооружённой его другом-профессором доком Брауном, попадает из 80-х в далекие 50-е. Там он встречается со своими будущими родителями, ещё подростками, и другом-профессором, совсем молодым.",
        movieSrc: "1.mp4",
        duration: null,
        year: 1985,
        country: "США",
        age: null,
        director: {
            id: 4,
            fullName: "Роберт Земекис",
            fullNameEnglish: "Robert Zemeckis",
            personGenres: ["drama", "comedy", "thriller"],
            professions: [],
            mainImage: "4.webp",
        },
        mainActors: [
            {
                id: 2,
                fullName: "Майкл Дж. Фокс",
                fullNameEnglish: "Michael J. Fox",
                personGenres: ["drama", "comedy"],
                professions: [],
                mainImage: "2.webp",
            },
            {
                id: 3,
                fullName: "Кристофер Ллойд",
                fullNameEnglish: "Christopher Lloyd",
                personGenres: ["drama", "comedy"],
                professions: [],
                mainImage: "3.webp",
            },
            {
                id: 5,
                fullName: "Лиа Томпсон",
                fullNameEnglish: "Lea Thompson",
                personGenres: [],
                professions: [],
                mainImage: "5.webp",
            },
            {
                id: 6,
                fullName: "Криспин Гловер",
                fullNameEnglish: "Crispin Glover",
                personGenres: [],
                professions: [],
                mainImage: "6.webp",
            },
            {
                id: 7,
                fullName: "Томас Ф. Уилсон",
                fullNameEnglish: "Tom Wilson",
                personGenres: [],
                professions: [],
                mainImage: "7.webp",
            },
            {
                id: 9,
                fullName: "Клаудия Уэллс",
                fullNameEnglish: "Claudia Wells",
                personGenres: [],
                professions: [],
                mainImage: "9.webp",
            },
        ],
    },
    {
        id: 2,
        title: "Криминальное чтиво",
        directorId: 14,
        movieGenres: ["crime", "drama"],
        mainImage: "2.webp",
        movieDescription:
            "Двое бандитов Винсент Вега и Джулс Винфилд ведут философские беседы в перерывах между разборками и решением проблем с должниками криминального босса Марселласа Уоллеса.  В первой истории Винсент проводит незабываемый вечер с женой Марселласа Мией. Во второй Марселлас покупает боксёра Бутча Кулиджа, чтобы тот сдал бой. В третьей истории Винсент и Джулс по нелепой случайности попадают в неприятности.",
        movieSrc: "2.mp4",
        duration: null,
        year: 1994,
        country: "США",
        age: null,
        director: {
            id: 14,
            fullName: "Квентин Тарантино",
            fullNameEnglish: "Quentin Tarantino",
            personGenres: ["drama", "comedy", "crime"],
            professions: ["Actor", "Screenwriter", "Director", "Producer", "Editor", "Operator"],
            mainImage: "14.webp",
        },
        mainActors: [
            {
                id: 16,
                fullName: "Брюс Уиллис",
                fullNameEnglish: "Bruce Willis",
                personGenres: [],
                professions: [],
                mainImage: "16.webp",
            },
            {
                id: 17,
                fullName: "Ума Турман",
                fullNameEnglish: "Uma Thurman",
                personGenres: [],
                professions: [],
                mainImage: "17.webp",
            },
            {
                id: 18,
                fullName: "Винг Реймз",
                fullNameEnglish: "Ving Rhames",
                personGenres: [],
                professions: [],
                mainImage: "18.webp",
            },
            {
                id: 19,
                fullName: "Тим Рот",
                fullNameEnglish: "Tim Roth",
                personGenres: [],
                professions: [],
                mainImage: "19.webp",
            },
            {
                id: 27,
                fullName: "Харви Кейтель",
                fullNameEnglish: "Harvey Keitel",
                personGenres: [],
                professions: [],
                mainImage: "27.webp",
            },
            {
                id: 14,
                fullName: "Квентин Тарантино",
                fullNameEnglish: "Quentin Tarantino",
                personGenres: ["drama", "comedy", "crime"],
                professions: ["Actor", "Screenwriter", "Director", "Producer", "Editor", "Operator"],
                mainImage: "14.webp",
            },
            {
                id: 15,
                fullName: "Сэмюэл Л. Джексон",
                fullNameEnglish: "Samuel L. Jackson",
                personGenres: ["drama", "actionMovie", "thriller"],
                professions: ["Actor", "Producer"],
                mainImage: "15.webp",
            },
        ],
    },
];

describe("MovieList", () => {
    it("renders empty MovieList", () => {
        render(<MovieList movies={[]} />);

        const MovieListDiv = screen.getByTestId("MovieList");
        expect(MovieListDiv.children.length).toBe(0);
    });

    it("renders MovieList with 2 items", () => {
        render(<MovieList movies={mockMovieItems} />);

        const MovieListDiv = screen.getByTestId("MovieList");
        expect(MovieListDiv.children.length).toBe(2);
    });
});
