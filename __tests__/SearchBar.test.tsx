import { SearchBar } from "@/components/Header/ui/SearchBar/SearchBar";
import { mockFetch } from "@/shared/helpers/tests/testsHelpers";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

jest.mock("next/navigation", () => ({
    useSearchParams: () => {
        return {
            get: () => "",
        };
    },
}));

describe("SearchBar", () => {
    it("renders SearchBar", () => {
        window.fetch = mockFetch([]);

        render(<SearchBar />);

        const openButton = screen.getByTestId("SearchBarClosed");
        expect(openButton).toBeInTheDocument();

        fireEvent.click(openButton);

        const search = screen.getByTestId("SearchBarOpened");
        expect(search).toBeInTheDocument();

        const input = search.getElementsByTagName("input")[0];
        fireEvent.change(input, { target: { value: "12345" } });
        expect(input.value).toBe("12345");

        const closeButton = search.getElementsByTagName("img")[0];
        fireEvent.click(closeButton);
        expect(search).not.toBeInTheDocument();
    });
});
