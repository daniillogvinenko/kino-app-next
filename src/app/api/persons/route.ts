import { Person } from "@/types/types";
import { NextResponse } from "next/server";

const persons: Person[] = [
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

export async function GET() {
    return NextResponse.json(persons);
}
