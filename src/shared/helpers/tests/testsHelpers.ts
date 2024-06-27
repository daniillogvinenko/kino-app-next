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
