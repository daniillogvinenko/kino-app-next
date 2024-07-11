import type { Meta, StoryObj } from "@storybook/react";
import "@/shared/styles/index.scss";
import { MovieList } from "./MovieList";
import { defaultDecorator } from "@/shared/storybook/defaultDecorator";
import { Movie } from "@prisma/client";
import { sessionDecorator } from "@/shared/storybook/sessionDecorator";

const meta: Meta<typeof MovieList> = {
    component: MovieList,
    decorators: [defaultDecorator, sessionDecorator(true)],
};

export default meta;
type Story = StoryObj<typeof MovieList>;

const movieData: Movie[] = [
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
];

export const Regular: Story = {
    args: { movies: movieData },
};
