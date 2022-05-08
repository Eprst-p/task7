export type gameType = {
    genre: string,
    name: string,
    rating: number,
    duration: number,
    players: {
        min: number,
        max: number,
    },
    description: string,
}
