import { useState, useEffect } from "react"
import { fetchToken, fetchPlanets } from "./services"

export const useToken = () => {
    const [token, setToken] = useState('')
    useEffect(() => {
        fetchToken()
            .then((response) => setToken(response.token))
    }, [])
    return token
}

export const usePlanets = () => {
    const [planets, setPlanets] = useState([])
    useEffect(() => {
        fetchPlanets()
            .then((response) => setPlanets(response))
    }, [])
    return planets
}