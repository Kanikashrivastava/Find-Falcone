const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const makeCall = (url, option) => {
    console.log(`${BACKEND_URL}${url}`)
    return fetch(`${BACKEND_URL}${url}`, option).then((response) => response.json())
}
const httpService = {
    get: (url, options = {}) => makeCall(url, {
        ...options,
        method: 'GET',
        headers: {
            ...options.headers,
            'Content-Type': 'application/json;charset=utf-8'
        },

    }),
    post: (url, options = {}) => makeCall(url, {
        ...options,
        method: 'POST',
        body: options.payload,
        headers: {
            ...options.headers,
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=utf-8'
        },

    })
}
export const fetchToken = () => {
    return httpService.post('/token')
}
export const findFalacon = () => {

}
export const fetchVehicles = () => {

}
export const fetchPlanets = () => {

}