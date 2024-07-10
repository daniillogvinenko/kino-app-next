import "@testing-library/jest-dom";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { SendReview } from "./SendReview";
import { PersonExpanded, ReviewExpanded, UserExpanded } from "@/shared/types/entities";
import { awaitTest } from "@/shared/helpers/tests/testsHelpers";

const mockReviewsData: ReviewExpanded[] = [
    {
        id: 21,
        // @ts-ignore
        dateTime: "2022-01-05T00:00:00.000Z",
        text: "+++",
        username: "user2",
        movieId: 4,
        user: {
            username: "user1",
            password: "user1",
            subscription: true,
        },
    },
    {
        id: 25,
        // @ts-ignore
        dateTime: "2024-06-16T17:55:11.342Z",
        text: "another one",
        username: "user2",
        movieId: 5,
        user: {
            username: "user1",
            password: "user1",
            subscription: true,
        },
    },
];

// mock fetch
window.fetch = jest.fn().mockImplementation((query: string, options: RequestInit) => {
    if (query.includes("/api/reviews?movieId=") && !options.method) {
        console.log("get reviews for movie");
        return Promise.resolve({
            ok: true,
            json: () => {
                console.log("fetch");
                return mockReviewsData;
            },
        });
    }

    if (options.method === "POST") {
        console.log("POST");
        return Promise.resolve({});
    }
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

describe("SendReview", () => {
    it("renders SendReview", async () => {
        act(() => {
            render(<SendReview movieId="1" />);
        });

        const sendReview = screen.getByTestId("SendReview");
        expect(sendReview).toBeInTheDocument();

        await awaitTest(500);

        const reviewsWrapper = screen.getByTestId("reviewsWrapper");
        expect(reviewsWrapper.childNodes.length).toBe(2);

        expect(fetch).toHaveBeenCalledTimes(1);

        const input = screen.getByTestId<HTMLInputElement>("SendReview.input");
        act(() => {
            fireEvent.change(input, { target: { value: "12345" } });
            expect(input.value).toBe("12345");
            expect(input.value).not.toBe("123456");
        });

        const sendButton = screen.getByTestId("SendReview.sendButton");
        fireEvent.click(sendButton);

        await awaitTest(500);

        // при удалении фетч отработал еще 2 раза
        expect(fetch).toHaveBeenCalledTimes(3);

        expect(reviewsWrapper.childNodes.length).toBe(2);

        // todo - дописать тест, проверить удаление комментария
        // const firstCommentDeleteButton = screen.getByTestId("SendReview.deleteButton");
        // act(() => {
        //     fireEvent.click(firstCommentDeleteButton);
        //     expect(firstCommentDeleteButton).not.toBeVisible();
        // });
    });
});
