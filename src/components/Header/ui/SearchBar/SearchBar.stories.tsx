import type { Meta, StoryObj } from "@storybook/react";
import "@/shared/styles/index.scss";
import { SearchBar } from "./SearchBar";
import { defaultDecorator } from "@/shared/storybook/defaultDecorator";

const meta: Meta<typeof SearchBar> = {
    component: SearchBar,
    decorators: [defaultDecorator, (story) => <div style={{ display: "inline-block" }}>{story()}</div>],
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Regular: Story = {
    args: {},
};
