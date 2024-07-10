import "@testing-library/jest-dom";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { MoviesOfPerson } from "./MoviesOfPerson";
import { PersonExpanded, UserExpanded } from "@/shared/types/entities";

const mockPerson: PersonExpanded = {
    id: 14,
    fullName: "Квентин Тарантино",
    fullNameEnglish: "Quentin Tarantino",
    personGenres: ["drama", "comedy", "crime"],
    professions: ["Actor", "Screenwriter", "Director", "Producer", "Editor", "Operator"],
    mainImage: "14.webp",
    height: 185,
    dateOfBirth: " 27 марта, 1963",
    placeOfBirth: " Ноксвилл, Теннесси, США",
    actedInMovies: [
        {
            id: 2,
            title: "Криминальное чтиво",
            directorId: 14,
            movieGenres: ["crime", "drama"],
            mainImage: "2.webp",
            movieDescription:
                "Двое бандитов Винсент Вега и Джулс Винфилд ведут философские беседы в перерывах между разборками и решением проблем с должниками криминального босса Марселласа Уоллеса.  В первой истории Винсент проводит незабываемый вечер с женой Марселласа Мией. Во второй Марселлас покупает боксёра Бутча Кулиджа, чтобы тот сдал бой. В третьей истории Винсент и Джулс по нелепой случайности попадают в неприятности.",
            movieSrc: "2.mp4",
            duration: "154 мин. / 02:34",
            year: 1994,
            country: "США",
            age: 18,
            rating: 87,
        },
        {
            id: 5,
            title: "Бешеные псы",
            directorId: 14,
            movieGenres: ["crime", "drama", "thriller"],
            mainImage: "5.webp",
            movieDescription:
                "Это должно было стать идеальным преступлением. Задумав ограбить ювелирный магазин, криминальный босс Джо Кэбот собрал вместе шестерых опытных и совершенно незнакомых друг с другом преступников. Но с самого начала все пошло не так, и обычный грабеж превратился в кровавую бойню.",
            movieSrc: "5.mp4",
            duration: " 100 мин. / 01:40",
            year: 1991,
            country: "США",
            age: 18,
            rating: 81,
        },
    ],
    directedMovies: [
        {
            id: 2,
            title: "Криминальное чтиво",
            directorId: 14,
            movieGenres: ["crime", "drama"],
            mainImage: "2.webp",
            movieDescription:
                "Двое бандитов Винсент Вега и Джулс Винфилд ведут философские беседы в перерывах между разборками и решением проблем с должниками криминального босса Марселласа Уоллеса.  В первой истории Винсент проводит незабываемый вечер с женой Марселласа Мией. Во второй Марселлас покупает боксёра Бутча Кулиджа, чтобы тот сдал бой. В третьей истории Винсент и Джулс по нелепой случайности попадают в неприятности.",
            movieSrc: "2.mp4",
            duration: "154 мин. / 02:34",
            year: 1994,
            country: "США",
            age: 18,
            rating: 87,
        },
        {
            id: 3,
            title: "Омерзительная восьмерка",
            directorId: 14,
            movieGenres: ["Western", "crime", "drama", "thriller", "detective"],
            mainImage: "3.webp",
            movieDescription:
                "США после Гражданской войны. Легендарный охотник за головами Джон Рут по кличке Вешатель конвоирует заключенную. По пути к ним прибиваются еще несколько путешественников. Снежная буря вынуждает компанию искать укрытие в лавке на отшибе, где уже расположилось весьма пёстрое общество: генерал конфедератов, мексиканец, ковбой… И один из них — не тот, за кого себя выдает.",
            movieSrc: "3.mp4",
            duration: " 168 мин. / 02:48",
            year: 2015,
            country: "США",
            age: 18,
            rating: 80,
        },
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
            id: 5,
            title: "Бешеные псы",
            directorId: 14,
            movieGenres: ["crime", "drama", "thriller"],
            mainImage: "5.webp",
            movieDescription:
                "Это должно было стать идеальным преступлением. Задумав ограбить ювелирный магазин, криминальный босс Джо Кэбот собрал вместе шестерых опытных и совершенно незнакомых друг с другом преступников. Но с самого начала все пошло не так, и обычный грабеж превратился в кровавую бойню.",
            movieSrc: "5.mp4",
            duration: " 100 мин. / 01:40",
            year: 1991,
            country: "США",
            age: 18,
            rating: 81,
        },
    ],
};

const mockUserData: UserExpanded = {
    username: "user1",
    password: "user1",
    favoriteMovies: [],
    Reviews: [],
    subscription: true,
};

// mock fetch
window.fetch = jest.fn().mockImplementation((query: string) => {
    return Promise.resolve({
        ok: true,
        json: () => {
            console.log("fetch");
            return mockUserData;
        },
    });
});

// mock useSession
jest.mock("next-auth/react", () => {
    const originalModule = jest.requireActual("next-auth/react");
    const mockSession = {
        expires: new Date(Date.now() + 2 * 86400).toISOString(),
        user: { name: "admin" },
    };
    return {
        __esModule: true,
        ...originalModule,
        useSession: jest.fn(() => {
            return { data: mockSession, status: "authenticated" }; // return type is [] in v3 but changed to {} in v4
        }),
    };
});

describe("MoviesOfPerson", () => {
    it("renders MoviesOfPerson, switches", () => {
        render(<MoviesOfPerson person={mockPerson} />);

        const moviesOfPerson = screen.getByTestId("MoviesOfPerson");
        expect(moviesOfPerson).toBeInTheDocument();

        const movieList = screen.getByTestId("MovieList");
        expect(movieList).toBeInTheDocument();

        expect(movieList.childNodes.length).toBe(2);

        const switchToDirected = screen.getByTestId("MoviesOfPerson.switchDirected");
        act(() => {
            fireEvent.click(switchToDirected);
        });

        expect(movieList.childNodes.length).toBe(4);

        const switchToActed = screen.getByTestId("MoviesOfPerson.switchActed");
        act(() => {
            fireEvent.click(switchToActed);
        });

        expect(movieList.childNodes.length).toBe(2);
    });
});
