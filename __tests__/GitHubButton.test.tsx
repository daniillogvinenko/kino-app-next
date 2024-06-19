import { GitHubButton } from "@/components/GitHubButton";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

jest.mock("next/navigation", () => ({
    useSearchParams: () => {
        return {
            get: () => "",
        };
    },
}));

describe("GitHubButton", () => {
    it("renders button", () => {
        render(<GitHubButton />);

        const text = screen.getByText("Sign in with Github");

        expect(text).toBeInTheDocument();
    });
});
