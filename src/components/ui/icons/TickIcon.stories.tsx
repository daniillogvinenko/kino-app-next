import type { Meta, StoryObj } from "@storybook/react";
import "@/shared/styles/index.scss";
import { TickIcon } from "./TickIcon";
import { defaultDecorator } from "@/shared/storybook/defaultDecorator";

const meta: Meta<typeof TickIcon> = {
    component: TickIcon,
    decorators: [defaultDecorator],
};

export default meta;
type Story = StoryObj<typeof TickIcon>;

export const Regular: Story = {
    args: {},
};
