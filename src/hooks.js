import { useState, useEffect } from "react"
import { fetchToken, fetchPlanets, fetchVehicles, findFalacon } from "./services"

export const useToken = () => {
    const [token, setToken] = useState('')
    const updateToken = async () =>
        fetchToken().then((response) => setToken(response.token))
    useEffect(() => {
        updateToken()
    }, [])
    return [token, updateToken]
}

export const usePlanets = () => {
    const [planets, setPlanets] = useState([])
    useEffect(() => {
        fetchPlanets()
            .then((response) => setPlanets(response))
    }, [])
    return planets
}

export const useVehicles = () => {
    const [vehicles, setVehicles] = useState([]);
    useEffect(() => {
        fetchVehicles().then(response => setVehicles(response))
    }, [])
    return vehicles;
}
const initialFalconFoundState = { status: false };
const initialPayload = {};
export const useFalconFound = () => {
    const [falconFoundResponse, setFalconeFoundResponse] = useState(initialFalconFoundState);
    const [payload, setPayload] = useState(initialPayload)
    useEffect(() => {
        if (Object.keys(payload).length !== 0) {
            findFalacon(payload).then(response => setFalconeFoundResponse(response))
        }
    }, [payload])

    const resetFalconToStart = () => {
        setFalconeFoundResponse(initialFalconFoundState);
        setPayload(initialPayload)
    }
    return [falconFoundResponse.status, falconFoundResponse.planet_name, setPayload, resetFalconToStart];
}
