import type { Meta, StoryObj } from "@storybook/react";
import "@/shared/styles/index.scss";
import { MainPageHeroSection } from "./MainPageHeroSection";
import { defaultDecorator } from "@/shared/storybook/defaultDecorator";
import { sessionDecorator } from "@/shared/storybook/sessionDecorator";

const meta: Meta<typeof MainPageHeroSection> = {
    component: MainPageHeroSection,
    decorators: [defaultDecorator, sessionDecorator(true)],
};

export default meta;
type Story = StoryObj<typeof MainPageHeroSection>;

export const Regular: Story = {
    args: {},
};
