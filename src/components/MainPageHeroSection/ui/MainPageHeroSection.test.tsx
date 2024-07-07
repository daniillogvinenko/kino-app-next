import { MainPageHeroSection } from "@/components/MainPageHeroSection";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import "@/shared/helpers/tests/emblaMocks";

describe("MainPageHeroSection", () => {
    it("renders MainPageHeroSection", () => {
        render(<MainPageHeroSection />);

        const h1 = screen.getByText("Однажды в… Голливуде");
        expect(h1).toBeInTheDocument();
    });
});
