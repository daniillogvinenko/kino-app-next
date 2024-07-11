import type { Meta, StoryObj } from "@storybook/react";
import "@/shared/styles/index.scss";
import { DislikeIcon } from "./DislikeIcon";
import { defaultDecorator } from "@/shared/storybook/defaultDecorator";

const meta: Meta<typeof DislikeIcon> = {
    component: DislikeIcon,
    decorators: [defaultDecorator],
};

export default meta;
type Story = StoryObj<typeof DislikeIcon>;

export const Regular: Story = {
    args: {},
};
