import type { Meta, StoryObj } from "@storybook/react";
import "@/shared/styles/index.scss";
import { HeaderLogoIcon } from "./HeaderLogoIcon";
import { defaultDecorator } from "@/shared/storybook/defaultDecorator";

const meta: Meta<typeof HeaderLogoIcon> = {
    component: HeaderLogoIcon,
    decorators: [defaultDecorator],
};

export default meta;
type Story = StoryObj<typeof HeaderLogoIcon>;

export const Regular: Story = {
    args: {},
};
