import type { Meta, StoryObj } from "@storybook/react";
import "@/shared/styles/index.scss";
import { StarRating } from "./StarRating";
import { defaultDecorator } from "@/shared/storybook/defaultDecorator";

const meta: Meta<typeof StarRating> = {
    component: StarRating,
    decorators: [defaultDecorator, (story) => <div style={{ display: "inline-block" }}>{story()}</div>],
};

export default meta;
type Story = StoryObj<typeof StarRating>;

export const Regular: Story = {
    args: {},
};
