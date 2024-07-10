import { Movie } from "@prisma/client";
import { MovieList } from "./MovieList";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { UserExpanded } from "@/shared/types/entities";

const mockMovieData: Movie[] = [
    {
        id: 7,
        title: "Крестный отец",
        directorId: 8,
        movieGenres: ["drama", "crime"],
        mainImage: "7.webp",
        movieDescription:
            "В семье крупного нью-йоркского мафиози наметился кризис. Революция в гангстерском кино и начало большого эпоса",
        movieSrc: "7.mp4",
        duration: " 175 мин. / 02:55",
        year: 1972,
        country: "США",
        age: 18,
        rating: 87,
    },
    {
        id: 1,
        title: "Назад в будущее",
        directorId: 4,
        movieGenres: ["fantastic", "comedy", "adventures"],
        mainImage: "1.webp",
        movieDescription:
            "Подросток Марти с помощью машины времени, сооружённой его другом-профессором доком Брауном, попадает из 80-х в далекие 50-е. Там он встречается со своими будущими родителями, ещё подростками, и другом-профессором, совсем молодым.",
        movieSrc: "1.mp4",
        duration: " 116 мин. / 01:56",
        year: 1985,
        country: "США",
        age: 12,
        rating: 86,
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
    {
        id: 123,
        title: "Убийцы цветочной луны",
        directorId: 28,
        movieGenres: ["drama", "crime"],
        mainImage: "123.webp",
        movieDescription:
            "Вскоре после Первой мировой Эрнест Беркхарт, отслуживший во Франции поваром, приезжает в Оклахому, где находится крупная резервация индейцев племени осейдж, внезапно разбогатевших из-за обнаруженной на их земле нефти. Там живёт его дядя Уильям Хейл по прозвищу Король — друг индейцев и большой человек. Король убеждает Эрнеста посвататься к Молли Кайл, молодой женщине из зажиточной индейской семьи. Идея состоит в том, чтобы земельные права этой семьи со временем перешли к Беркхарту (читай к Хейлу), а для этого всего лишь должны умереть мама Молли, её сёстры и она сама.",
        movieSrc: "123.mp4",
        duration: " 206 мин. / 03:26",
        year: 2023,
        country: "США",
        age: 18,
        rating: 72,
    },
];

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

describe("MovieList", () => {
    it("renders MovieList", () => {
        render(<MovieList movies={mockMovieData} />);

        const movieList = screen.getByTestId("MovieList");
        expect(movieList).toBeInTheDocument();

        expect(movieList.childNodes.length).toBe(8);
    });
});
