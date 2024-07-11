import type { Meta, StoryObj } from "@storybook/react";
import "@/shared/styles/index.scss";
import { SendReview } from "./SendReview";
import { defaultDecorator } from "@/shared/storybook/defaultDecorator";
import { sessionDecorator } from "@/shared/storybook/sessionDecorator";

const meta: Meta<typeof SendReview> = {
    component: SendReview,
    decorators: [defaultDecorator],
};

export default meta;
type Story = StoryObj<typeof SendReview>;

export const Regular: Story = {
    args: { movieId: "1" },
    decorators: [sessionDecorator(true)],
};
