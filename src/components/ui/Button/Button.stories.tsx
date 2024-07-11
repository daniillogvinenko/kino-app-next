import type { Meta, StoryObj } from "@storybook/react";
import "@/shared/styles/index.scss";
import { Button } from "./Button";
import { defaultDecorator } from "@/shared/storybook/defaultDecorator";

const meta: Meta<typeof Button> = {
    component: Button,
    decorators: [defaultDecorator],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Regular: Story = {
    args: {
        children: "click me",
        variant: "regular",
    },
};

export const Gradient: Story = {
    args: {
        children: "click me",
        variant: "gradient",
    },
};

export const Outline: Story = {
    args: {
        children: "click me",
        variant: "outline",
    },
};

export const Borderless: Story = {
    args: {
        children: "click me",
        variant: "borderless",
    },
};

export const White: Story = {
    args: {
        children: "click me",
        variant: "white",
    },
};

export const Small: Story = {
    args: {
        children: "click me",
        size: "sm",
    },
};

export const Large: Story = {
    args: {
        children: "click me",
        size: "lg",
    },
};
