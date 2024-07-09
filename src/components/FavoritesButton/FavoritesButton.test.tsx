import "@testing-library/jest-dom";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { FavoritesButton } from "./FavoritesButton";
import { UserExpanded } from "@/shared/types/entities";
import { componentRender, awaitTest } from "@/shared/helpers/tests/testsHelpers";

const mockUserData: UserExpanded = {
    username: "user1",
    password: "user1",
    favoriteMovies: [],
    Reviews: [],
    subscription: true,
};

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

window.fetch = jest.fn().mockImplementation((query: string) => {
    return Promise.resolve({
        ok: true,
        json: () => {
            console.log("fetch");
            return mockUserData;
        },
    });
});

describe("FavoritesButton", () => {
    it("рендерит", async () => {
        act(() => {
            componentRender(<FavoritesButton movieId="1" />);
        });

        await awaitTest(500);

        console.log("test");
        // user пустой, поэтому в компоненте возвращается нулл и тест падает
        const favoritesButton = screen.getByTestId("FavoritesButton.notFavorite");
        expect(favoritesButton).toBeInTheDocument();

        act(() => {
            fireEvent.click(favoritesButton);
        });

        const favoritesButtonIsFav = screen.getByTestId("FavoritesButton.isFavorite");
        expect(favoritesButtonIsFav).toBeInTheDocument();
    });
});
