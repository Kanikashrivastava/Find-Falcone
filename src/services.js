import { httpService } from "./httpService"

export const fetchToken = () => {
    return httpService.post('/token')
}
export const findFalacon = () => {

}
export const fetchVehicles = () => {

}
export const fetchPlanets = () => {
    return httpService.get('/planets');
}