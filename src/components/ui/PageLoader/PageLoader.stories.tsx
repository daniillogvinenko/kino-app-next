import type { Meta, StoryObj } from "@storybook/react";
import "@/shared/styles/index.scss";
import { PageLoader } from "./PageLoader";
import { defaultDecorator } from "@/shared/storybook/defaultDecorator";

const meta: Meta<typeof PageLoader> = {
    component: PageLoader,
    decorators: [defaultDecorator],
};

export default meta;
type Story = StoryObj<typeof PageLoader>;

export const Regular: Story = {
    args: {},
};
