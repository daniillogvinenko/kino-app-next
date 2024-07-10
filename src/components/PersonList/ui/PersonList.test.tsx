import "@testing-library/jest-dom";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { PersonList } from "./PersonList";
import { Person } from "@prisma/client";

const mockPeopleData: Person[] = [
    {
        id: 8,
        fullName: "Фрэнсис Форд Коппола",
        fullNameEnglish: "Francis Ford Coppola",
        personGenres: ["drama", "melodrama", "comedy"],
        professions: ["Producer", "Director", "Composer", "Screenwriter", "Actor", "Editor"],
        mainImage: "8.webp",
        height: 182,
        dateOfBirth: " 7 апреля, 1939",
        placeOfBirth: " Детройт, Мичиган, США",
    },
    {
        id: 9,
        fullName: "Клаудия Уэллс",
        fullNameEnglish: "Claudia Wells",
        personGenres: ["drama", "comedy", "actionMovie"],
        professions: ["Actor"],
        mainImage: "9.webp",
        height: 163,
        dateOfBirth: " 5 июля, 1966",
        placeOfBirth: " Куала-Лумпур, Малайзия",
    },
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
];

describe("MoviesOfPerson", () => {
    it("renders MoviesOfPerson, switches", () => {
        render(<PersonList persons={mockPeopleData} />);

        const personList = screen.getByTestId("PersonList");
        expect(personList).toBeInTheDocument();

        expect(personList.childNodes.length).toBe(3);
    });
});
