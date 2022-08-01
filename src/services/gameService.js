import * as request from "../services/requester"

const baseUrl = "http://localhost:3030"


export const getAll = async () => {
    return await request.get(`/data/games`)

}

export const getOne = async (gameId) => {
    return await request.get(`/data/games/${gameId}`)

}