import { renderHook } from '@testing-library/react-hooks'
import { useToken, usePlanets } from './hooks';
import { fetchToken, fetchPlanets } from './services';
jest.mock('./services')

describe('useToken', () => {
    let token;
    beforeEach(() => {
        token = tokens[Math.random() * 100 % tokens.length - 1]
        fetchToken.mockResolvedValue({ token });
    });

    afterEach(() => {
        fetchToken.mockClear()
        fetchToken.mockClear()
    })

    const tokens = ["hgfghjfdfhfhfdfghf5757", 'hgfghjfdfhfhfdfghf5759', "hgfghjfdfhfhfdfghf5957", 'hgfghjfdfhfhfdfghf0759'];
    test('should fetch token from the api on load', async () => {

        const { result, waitForNextUpdate } = renderHook(() => useToken());
        await waitForNextUpdate();

        expect(result.current).toBe(token)
    });

    test('should fetch token from api on load only once', async () => {
        const { result, waitForNextUpdate, rerender } = renderHook(() => useToken());
        await waitForNextUpdate();
        expect(result.current).toBe(token)

        rerender()

        expect(result.current).toBe(token)
        expect(fetchToken).toHaveBeenCalledTimes(1)
    });
});

describe('usePlanets', () => {
    let planets = [{ name: 'Planet 1' }, { name: 'Planet 2' }, { name: 'Planet 3' }];
    beforeEach(() => {
        fetchPlanets.mockResolvedValue(planets)
    })
    afterEach(() => {
        fetchPlanets.mockClear()
    })
    test('should fetch planets details', async () => {
        const { result, waitForNextUpdate } = renderHook(() => usePlanets());
        await waitForNextUpdate();
        expect(result.current).toBe(planets)
    });
    test('should fetch planets details only once', async () => {
        const { result, waitForNextUpdate, rerender } = renderHook(() => usePlanets());
        await waitForNextUpdate();
        expect(result.current).toBe(planets)
        rerender()
        expect(result.current).toBe(planets)
        expect(fetchPlanets).toHaveBeenCalledTimes(1)
    });
});