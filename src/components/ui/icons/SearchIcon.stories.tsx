import type { Meta, StoryObj } from "@storybook/react";
import "@/shared/styles/index.scss";
import { SearchIcon } from "./SearchIcon";
import { defaultDecorator } from "@/shared/storybook/defaultDecorator";

const meta: Meta<typeof SearchIcon> = {
    component: SearchIcon,
    decorators: [defaultDecorator],
};

export default meta;
type Story = StoryObj<typeof SearchIcon>;

export const Regular: Story = {
    args: {},
};
