import type { Meta, StoryObj } from "@storybook/react";
import "@/shared/styles/index.scss";
import { PurpleHeart } from "./PurpleHeart";
import { defaultDecorator } from "@/shared/storybook/defaultDecorator";

const meta: Meta<typeof PurpleHeart> = {
    component: PurpleHeart,
    decorators: [defaultDecorator],
};

export default meta;
type Story = StoryObj<typeof PurpleHeart>;

export const Regular: Story = {
    args: {},
};
