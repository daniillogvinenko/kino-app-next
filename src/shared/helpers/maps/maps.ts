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

/**
 * [someFunction description]
 * @param arr Array of genres in English. For example: ['thriller', 'drama', 'comedy']
 * @return Array of genres in Russian. For example: ['триллер', 'драма', 'комедия']
 */
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

/**
 * [someFunction description]
 * @param arr Array of professions in English. For example: ['producer', 'actor']
 * @return Array of professions in Russian. For example: ['продюсер', 'актер']
 */
export const mapProfessionArrayToRussian = (arr: Profession[]) => {
    return arr.map((profession) => mapProfessiosToRussian[profession]);
};
