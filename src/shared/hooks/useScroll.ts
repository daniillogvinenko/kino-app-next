import { useEffect } from "react";

/**
 *
 * @param handler callback that runs when scrolling
 */
export const useScroll = (handler: () => void) => {
    useEffect(() => {
        document.addEventListener("scroll", handler);

        return () => removeEventListener("scroll", handler);
    }, [handler]);
};
