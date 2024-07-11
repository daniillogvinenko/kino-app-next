import type { Meta, StoryObj } from "@storybook/react";
import "@/shared/styles/index.scss";
import { Skip10sIcon } from "./Skip10sIcon";
import { defaultDecorator } from "@/shared/storybook/defaultDecorator";

const meta: Meta<typeof Skip10sIcon> = {
    component: Skip10sIcon,
    decorators: [defaultDecorator],
};

export default meta;
type Story = StoryObj<typeof Skip10sIcon>;

export const Regular: Story = {
    args: {},
};
