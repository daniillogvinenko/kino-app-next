import type { Meta, StoryObj } from "@storybook/react";
import "@/shared/styles/index.scss";
import { Header } from "./Header";
import { defaultDecorator } from "@/shared/storybook/defaultDecorator";
import { sessionDecorator } from "@/shared/storybook/sessionDecorator";

const meta: Meta<typeof Header> = {
    component: Header,
    decorators: [defaultDecorator],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Regular: Story = {
    args: {},
    decorators: [sessionDecorator(true)],
};

export const Unauthorized: Story = {
    args: {},
    decorators: [sessionDecorator(false)],
};
