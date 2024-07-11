import type { Meta, StoryObj } from "@storybook/react";
import "@/shared/styles/index.scss";
import { AppLogoIcon } from "./AppLogoIcon";
import { defaultDecorator } from "@/shared/storybook/defaultDecorator";

const meta: Meta<typeof AppLogoIcon> = {
    component: AppLogoIcon,
    decorators: [defaultDecorator],
};

export default meta;
type Story = StoryObj<typeof AppLogoIcon>;

export const Regular: Story = {
    args: {},
};
