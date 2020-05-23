import { httpService } from "./httpService";
import { fetchToken, fetchPlanets } from "./services";

jest.mock('./httpService')

describe('Services', () => {
    afterEach(() => {
        httpService.get.mockClear()
        httpService.post.mockClear()
    })
    test('should call httpService with "/token" post', async () => {
        await fetchToken()
        expect(httpService.post).toHaveBeenNthCalledWith(1, '/token')        
    });
    test('should call httpService with "/token" post', async () => {
        await fetchPlanets()
        expect(httpService.post).toHaveBeenNthCalledWith(1, '/planets')        
    });
});