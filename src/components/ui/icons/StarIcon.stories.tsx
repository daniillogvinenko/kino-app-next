import type { Meta, StoryObj } from "@storybook/react";
import "@/shared/styles/index.scss";
import { StarIcon } from "./StarIcon";
import { defaultDecorator } from "@/shared/storybook/defaultDecorator";

const meta: Meta<typeof StarIcon> = {
    component: StarIcon,
    decorators: [defaultDecorator],
};

export default meta;
type Story = StoryObj<typeof StarIcon>;

export const Regular: Story = {
    args: {},
};
