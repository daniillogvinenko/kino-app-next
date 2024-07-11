import type { Meta, StoryObj } from "@storybook/react";
import "@/shared/styles/index.scss";
import { Replay10sIcon } from "./Replay10sIcon";
import { defaultDecorator } from "@/shared/storybook/defaultDecorator";

const meta: Meta<typeof Replay10sIcon> = {
    component: Replay10sIcon,
    decorators: [defaultDecorator],
};

export default meta;
type Story = StoryObj<typeof Replay10sIcon>;

export const Regular: Story = {
    args: {},
};
