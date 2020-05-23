import { httpService } from "./httpService";
import { fetchToken, fetchPlanets, fetchVehicles } from "./services";

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
    test('should call httpService with "/planets" post', async () => {
        await fetchPlanets()
        expect(httpService.get).toHaveBeenNthCalledWith(1, '/planets')        
    });

    test('should call httpService with "/vehicles" post', async () => {
        await fetchVehicles()
        expect(httpService.get).toHaveBeenNthCalledWith(1, '/vehicles')        
    });
});