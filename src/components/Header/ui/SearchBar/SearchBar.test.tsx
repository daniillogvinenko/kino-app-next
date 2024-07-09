import "@testing-library/jest-dom";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { SearchBar } from "./SearchBar";
import { Movie, Person } from "@prisma/client";

// jest.mock("next/navigation", () => ({
//     useSearchParams: () => {
//         return {
//             get: () => "",
//         };
//     },
// }));

const mockMovieData: Movie[] = [
    {
        id: 4,
        title: "Однажды в… Голливуде",
        directorId: 14,
        movieGenres: ["drama", "comedy"],
        mainImage: "4.webp",
        movieDescription:
            "1969 год, золотой век Голливуда уже закончился. Известный актёр Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии.",
        movieSrc: "4.mp4",
        duration: " 161 мин. / 02:41",
        year: 2019,
        country: "США",
        age: 18,
        rating: 77,
    },
    {
        id: 6,
        title: "Апокалипсис сегодня",
        directorId: 8,
        movieGenres: ["drama", "actionMovie"],
        mainImage: "6.webp",
        movieDescription:
            "Запах напалма, «Полет валькирий» и зловещий полковник Курц. Один из важнейших фильмов в истории",
        movieSrc: "6.mp4",
        duration: " 194 мин. / 03:14",
        year: 1979,
        country: "США",
        age: 18,
        rating: 81,
    },
];

const mockPeopleData: Person[] = [
    {
        id: 10,
        fullName: "Марлон Брандо",
        fullNameEnglish: "Marlon Brando",
        personGenres: ["drama", "melodrama", "thriller"],
        professions: ["Actor", "Director", "Screenwriter", "Operator"],
        mainImage: "10.webp",
        height: 175,
        dateOfBirth: " 3 апреля, 1924",
        placeOfBirth: " Омаха, Небраска, США",
    },
    {
        id: 12,
        fullName: "Джеймс Каан",
        fullNameEnglish: "James Caan",
        personGenres: ["drama", "crime", "comedy"],
        professions: ["Actor", "Director"],
        mainImage: "12.webp",
        height: 176,
        dateOfBirth: " 26 марта, 1940",
        placeOfBirth: " Нью-Йорк, США",
    },
    {
        id: 14,
        fullName: "Квентин Тарантино",
        fullNameEnglish: "Quentin Tarantino",
        personGenres: ["drama", "comedy", "crime"],
        professions: ["Actor", "Screenwriter", "Director", "Producer", "Editor", "Operator"],
        mainImage: "14.webp",
        height: 185,
        dateOfBirth: " 27 марта, 1963",
        placeOfBirth: " Ноксвилл, Теннесси, США",
    },
    {
        id: 17,
        fullName: "Ума Турман",
        fullNameEnglish: "Uma Thurman",
        personGenres: ["drama", "comedy", "melodrama"],
        professions: ["Actor", "Producer", "Screenwriter"],
        mainImage: "17.webp",
        height: 181,
        dateOfBirth: " 29 апреля, 1970",
        placeOfBirth: " Бостон, Массачусетс, США",
    },
];

describe("SearchBar", () => {
    it("рендерит, открывает поиск, вводит значение, рендерит список", () => {
        window.fetch = jest.fn().mockImplementation((query: string) => {
            if (query.includes("movies")) {
                return Promise.resolve({
                    ok: true,
                    json: () => {
                        console.log("here 1");
                        return mockMovieData;
                    },
                });
            }

            if (query.includes("persons")) {
                return Promise.resolve({
                    ok: true,
                    json: () => {
                        console.log("here 2");
                        return mockPeopleData;
                    },
                });
            }
        });

        act(() => {
            render(<SearchBar />);
        });

        const searchBar = screen.getByTestId("SearchBar.openButton");
        expect(searchBar).toBeInTheDocument();

        act(() => {
            fireEvent.click(searchBar);
        });

        const searchBarOpened = screen.getByTestId("SearchBar.opened");
        expect(searchBarOpened).toBeInTheDocument();

        act(() => {
            const input = screen.getByTestId<HTMLInputElement>("SearchBar.input");
            fireEvent.change(input, { target: { value: "12345" } });
            expect(input.value).toBe("12345");

            fireEvent.change(input, { target: { value: "1234567" } });
            expect(input.value).toBe("1234567");

            const results = screen.getByTestId("SearchBar.results");
            expect(results).toBeInTheDocument();

            expect(fetch).toHaveBeenCalledTimes(4);

            const movieResultsList = screen.getByTestId("SearchBar.movieResults");
            const personResultsList = screen.getByTestId("SearchBar.personResults");
            expect(movieResultsList).toBeVisible();
            expect(personResultsList).toBeVisible();
        });
    });
});
