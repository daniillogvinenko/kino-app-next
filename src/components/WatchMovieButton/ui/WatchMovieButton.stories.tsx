import type { Meta, StoryObj } from "@storybook/react";
import "@/shared/styles/index.scss";
import { WatchMovieButton } from "./WatchMovieButton";
import { defaultDecorator } from "@/shared/storybook/defaultDecorator";
import { sessionDecorator } from "@/shared/storybook/sessionDecorator";

const meta: Meta<typeof WatchMovieButton> = {
    component: WatchMovieButton,
    decorators: [defaultDecorator],
    parameters: {
        nextjs: {
            appDirectory: true,
        },
    },
};

export default meta;
type Story = StoryObj<typeof WatchMovieButton>;

export const Regular: Story = {
    args: {},
    decorators: [sessionDecorator(true)],
};

export const Unauthorized: Story = {
    args: {},
    decorators: [sessionDecorator(false)],
};
