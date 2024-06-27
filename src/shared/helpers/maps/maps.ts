import { Genre, Profession } from "@prisma/client";

export const mapGenresToRussian: Record<Genre, string> = {
    drama: "драма",
    crime: "криминал",
    fantastic: "фантастика",
    comedy: "комедия",
    adventures: "приключение",
    horror: "ужас",
    actionMovie: "боевик",
    Western: "вестерн",
    military: "военный",
    detective: "детектив",
    melodrama: "мелодрама",
    documentary: "документальный",
    thriller: "триллер",
};

export const mapGenresArrayToRussian = (arr: Genre[]) => {
    return arr.map((genre) => mapGenresToRussian[genre]);
};

export const mapProfessiosToRussian: Record<Profession, string> = {
    Producer: "продюсер",
    Director: "режисер",
    Actor: "актер",
    Screenwriter: "сценарист",
    Editor: "монтажер",
    Operator: "оператор",
    Composer: "композитор",
};

export const mapProfessionArrayToRussian = (arr: Profession[]) => {
    return arr.map((profession) => mapProfessiosToRussian[profession]);
};
