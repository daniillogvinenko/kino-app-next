import type { Meta, StoryObj } from "@storybook/react";
import "@/shared/styles/index.scss";
import { FullScreenIcon } from "./FullScreenIcon";
import { defaultDecorator } from "@/shared/storybook/defaultDecorator";

const meta: Meta<typeof FullScreenIcon> = {
    component: FullScreenIcon,
    decorators: [defaultDecorator],
};

export default meta;
type Story = StoryObj<typeof FullScreenIcon>;

export const Regular: Story = {
    args: {},
};
