import type { Meta, StoryObj } from "@storybook/react";
import "@/shared/styles/index.scss";
import { Modal } from "./Modal";
import { defaultDecorator } from "@/shared/storybook/defaultDecorator";

const meta: Meta<typeof Modal> = {
    component: Modal,
    decorators: [defaultDecorator],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Regular: Story = {
    args: {
        children: <div style={{ fontFamily: "Inter" }}>modal content</div>,
        isOpen: true,
    },
};
