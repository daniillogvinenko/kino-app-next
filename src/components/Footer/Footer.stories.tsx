import type { Meta, StoryObj } from "@storybook/react";
import "@/shared/styles/index.scss";
import { Footer } from "./Footer";
import { defaultDecorator } from "@/shared/storybook/defaultDecorator";

const meta: Meta<typeof Footer> = {
    component: Footer,
    decorators: [defaultDecorator],
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Regular: Story = {
    args: {},
};
