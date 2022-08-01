const baseUrl = "http://localhost:3030"

export const getAll = async () => {
    const result = await fetch(`${baseUrl}/data/games`)
    const games = await result.json()
    return games
}

export const getOne = async (gameId) => {
    const result = await fetch(`${baseUrl}/data/games/${gameId}`)
    const game = await result.json()
    return game
}