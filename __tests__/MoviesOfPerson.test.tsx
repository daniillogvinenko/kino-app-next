import { MoviesOfPerson } from "@/components/MoviesOfPerson";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

const mockPerson = {
    id: 14,
    fullName: "Квентин Тарантино",
    fullNameEnglish: "Quentin Tarantino",
    personGenres: ["drama", "comedy", "crime"],
    professions: ["Actor", "Screenwriter", "Director", "Producer", "Editor", "Operator"],
    mainImage: "14.webp",
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
            duration: null,
            year: 1994,
            country: "США",
            age: null,
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
            duration: null,
            year: 1991,
            country: "США",
            age: null,
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
            duration: null,
            year: 1994,
            country: "США",
            age: null,
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
            duration: null,
            year: 2015,
            country: "США",
            age: null,
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
            duration: null,
            year: 2019,
            country: "США",
            age: null,
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
            duration: null,
            year: 1991,
            country: "США",
            age: null,
        },
    ],
};

describe("MainPageHeroSection", () => {
    it("renders MainPageHeroSection", () => {
        render(<MoviesOfPerson person={mockPerson} />);

        const wrapper = screen.getByTestId("MoviesOfPerson");
        expect(wrapper).toBeInTheDocument();

        const list = screen.getByTestId("MovieList");
        expect(list.children.length).toBe(2);

        const switchToDirectedBtn = screen.getByTestId("directedSwitcher");
        fireEvent.click(switchToDirectedBtn);
        expect(list.children.length).toBe(4);

        const switchToActedBtn = screen.getByTestId("actedSwitcher");
        fireEvent.click(switchToActedBtn);
        expect(list.children.length).toBe(2);
    });
});
