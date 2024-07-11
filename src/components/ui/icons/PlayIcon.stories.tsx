import type { Meta, StoryObj } from "@storybook/react";
import "@/shared/styles/index.scss";
import { PlayIcon } from "./PlayIcon";
import { defaultDecorator } from "@/shared/storybook/defaultDecorator";

const meta: Meta<typeof PlayIcon> = {
    component: PlayIcon,
    decorators: [defaultDecorator],
};

export default meta;
type Story = StoryObj<typeof PlayIcon>;

export const Regular: Story = {
    args: {},
};
