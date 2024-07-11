import type { Meta, StoryObj } from "@storybook/react";
import "@/shared/styles/index.scss";
import { SignInForm } from "./SignInForm";
import { defaultDecorator } from "@/shared/storybook/defaultDecorator";
import { sessionDecorator } from "@/shared/storybook/sessionDecorator";

const meta: Meta<typeof SignInForm> = {
    component: SignInForm,
    decorators: [defaultDecorator, sessionDecorator(false)],
};

export default meta;
type Story = StoryObj<typeof SignInForm>;

export const Regular: Story = {
    args: { movieId: "1" },
};
