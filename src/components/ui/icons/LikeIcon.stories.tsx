import type { Meta, StoryObj } from "@storybook/react";
import "@/shared/styles/index.scss";
import { LikeIcon } from "./LikeIcon";
import { defaultDecorator } from "@/shared/storybook/defaultDecorator";

const meta: Meta<typeof LikeIcon> = {
    component: LikeIcon,
    decorators: [defaultDecorator],
};

export default meta;
type Story = StoryObj<typeof LikeIcon>;

export const Regular: Story = {
    args: {},
};
