import { render } from "@testing-library/react";
import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

/**
 * Mock fetch for jest testing
 * @param data Some data to be resolved
 * @returns Promise
 */
export function mockFetch(data: any) {
    return jest.fn().mockImplementation(() =>
        Promise.resolve({
            ok: true,
            json: () => data,
        })
    );
}

export function MockUseParamsGet(data: any) {
    return jest.fn().mockImplementation(() => {
        return {
            get: () => "",
        };
    });
}

export function componentRender(component: ReactNode) {
    // всё это нужно для нормального тестирования, чтобы тестировать компоненты в условиях реального приложения со всеми обертками
    return render(<>{component}</>);
}

export const awaitTest = async (delay: number) => {
    await new Promise((r) => setTimeout(r, delay));
};
