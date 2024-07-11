import type { Meta, StoryObj } from "@storybook/react";
import "@/shared/styles/index.scss";
import { SignOutButton } from "./SignOutButton";
import { defaultDecorator } from "@/shared/storybook/defaultDecorator";
import { sessionDecorator } from "@/shared/storybook/sessionDecorator";

const meta: Meta<typeof SignOutButton> = {
    component: SignOutButton,
    decorators: [defaultDecorator, sessionDecorator(true)],
};

export default meta;
type Story = StoryObj<typeof SignOutButton>;

export const Regular: Story = {
    args: {},
};
