import type { Meta, StoryObj } from "@storybook/react";
import "@/shared/styles/index.scss";
import { FavoritesButton } from "./FavoritesButton";
import { defaultDecorator } from "@/shared/storybook/defaultDecorator";
import { sessionDecorator } from "@/shared/storybook/sessionDecorator";

const meta: Meta<typeof FavoritesButton> = {
    component: FavoritesButton,
    decorators: [defaultDecorator, sessionDecorator],
};

export default meta;
type Story = StoryObj<typeof FavoritesButton>;

export const Regular: Story = {
    args: { movieId: "1" },
};
