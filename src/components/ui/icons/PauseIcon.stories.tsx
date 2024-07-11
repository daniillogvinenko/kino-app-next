import type { Meta, StoryObj } from "@storybook/react";
import "@/shared/styles/index.scss";
import { PauseIcon } from "./PauseIcon";
import { defaultDecorator } from "@/shared/storybook/defaultDecorator";

const meta: Meta<typeof PauseIcon> = {
    component: PauseIcon,
    decorators: [defaultDecorator],
};

export default meta;
type Story = StoryObj<typeof PauseIcon>;

export const Regular: Story = {
    args: {},
};
