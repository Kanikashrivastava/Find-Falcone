import { httpService } from "./httpService"

export const fetchToken = () => {
    return httpService.post('/token')
}
export const findFalacon = async (params) => {
    let options = {
        payload: params
    }
    let res = await httpService.post('/find', options)
    return res;
}
export const fetchVehicles = () => {
    return httpService.get('/vehicles')
}
export const fetchPlanets = () => {
    return httpService.get('/planets');
}