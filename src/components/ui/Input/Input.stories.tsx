import type { Meta, StoryObj } from "@storybook/react";
import "@/shared/styles/index.scss";
import Input from "./Input";
import { defaultDecorator } from "@/shared/storybook/defaultDecorator";

const meta: Meta<typeof Input> = {
    component: Input,
    decorators: [defaultDecorator],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Regular: Story = {
    args: { placeholder: "Введите логин" },
};

export const FullWidth: Story = {
    args: { placeholder: "Введите логин", fullWidth: true },
};
