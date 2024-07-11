import type { Meta, StoryObj } from "@storybook/react";
import "@/shared/styles/index.scss";
import InputRange from "./InputRange";
import { defaultDecorator } from "@/shared/storybook/defaultDecorator";

const meta: Meta<typeof InputRange> = {
    component: InputRange,
    decorators: [defaultDecorator],
};

export default meta;
type Story = StoryObj<typeof InputRange>;

export const Regular: Story = {
    args: {},
};
