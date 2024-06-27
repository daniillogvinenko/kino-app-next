import React from "react";
import { createPortal } from "react-dom";

interface PortalProps {
    children: React.ReactNode;
    element?: HTMLElement;
}

/**
 * The `Portal` component is used for creating React portals.
 */
export const Portal = (props: PortalProps) => {
    // значение по умолчанию ↓↓↓
    const { children, element = document.body } = props;
    return createPortal(children, element);
};
