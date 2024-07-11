import type { Meta, StoryObj } from "@storybook/react";
import "@/shared/styles/index.scss";
import { Heart } from "./Heart";
import { defaultDecorator } from "@/shared/storybook/defaultDecorator";

const meta: Meta<typeof Heart> = {
    component: Heart,
    decorators: [defaultDecorator],
};

export default meta;
type Story = StoryObj<typeof Heart>;

export const Regular: Story = {
    args: {},
};
