import { Footer } from "@/components/Footer";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Footer", () => {
    it("renders footer", () => {
        render(<Footer />);

        const text = screen.getByText("©Daniil Logvinenko");

        expect(text).toBeInTheDocument();
    });
});
