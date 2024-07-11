import type { Meta, StoryObj } from "@storybook/react";
import "@/shared/styles/index.scss";
import { CloseIcon } from "./CloseIcon";
import { defaultDecorator } from "@/shared/storybook/defaultDecorator";

const meta: Meta<typeof CloseIcon> = {
    component: CloseIcon,
    decorators: [defaultDecorator],
};

export default meta;
type Story = StoryObj<typeof CloseIcon>;

export const Regular: Story = {
    args: {},
};
