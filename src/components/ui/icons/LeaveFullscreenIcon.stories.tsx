import type { Meta, StoryObj } from "@storybook/react";
import "@/shared/styles/index.scss";
import { LeaveFullscreenIcon } from "./LeaveFullscreenIcon";
import { defaultDecorator } from "@/shared/storybook/defaultDecorator";

const meta: Meta<typeof LeaveFullscreenIcon> = {
    component: LeaveFullscreenIcon,
    decorators: [defaultDecorator],
};

export default meta;
type Story = StoryObj<typeof LeaveFullscreenIcon>;

export const Regular: Story = {
    args: {},
};
