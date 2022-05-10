export type gameType = {
    id: string,
    genre: string,
    name: string,
    rating: number,
    duration: number,
    players: {
        min: number,
        max: number,
    },
    description: string,
    picture: string,
}
