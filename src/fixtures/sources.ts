import { GameGenre } from "../settings/game-genre";
import { gameType } from "../types/game-type";
import { lorem } from "faker";
import { convertDuration } from "./utils";



const allGames: gameType[] = [
    {
        genre: GameGenre.Euro,
        name: 'Brass:Birningem',
        rating: 8.66,
        duration: convertDuration(300),
        players: {
            min: 1,
            max: 5,
        },
        description: lorem.sentences(5),
    },
    {
        genre: GameGenre.Euro,
        name: 'Terraforming Mars',
        rating: 8.41,
        duration: convertDuration(300),
        players: {
            min: 1,
            max: 5,
        },
        description: lorem.sentences(5),
    },
    {
        genre: GameGenre.Euro,
        name: 'Gaja Project',
        rating: 8.46,
        duration: convertDuration(300),
        players: {
            min: 1,
            max: 5,
        },
        description: lorem.sentences(5),
    },
    {
        genre: GameGenre.Euro,
        name: 'Through the Ages',
        rating: 8.37,
        duration: convertDuration(300),
        players: {
            min: 1,
            max: 5,
        },
        description: lorem.sentences(5),
    },
    {
        genre: GameGenre.Euro,
        name: 'Scythe',
        rating: 8.21,
        duration: convertDuration(300),
        players: {
            min: 1,
            max: 5,
        },
        description: lorem.sentences(5),
    },
    {
        genre: GameGenre.Euro,
        name: 'Viticulture',
        rating: 8.60,
        duration: convertDuration(300),
        players: {
            min: 1,
            max: 5,
        },
        description: lorem.sentences(5),
    },
    {
        genre: GameGenre.Euro,
        name: 'Wingspan',
        rating: 8.10,
        duration: convertDuration(300),
        players: {
            min: 1,
            max: 5,
        },
        description: lorem.sentences(5),
    },
    {
        genre: GameGenre.Euro,
        name: 'Agricola',
        rating: 7.92,
        duration: convertDuration(300),
        players: {
            min: 1,
            max: 5,
        },
        description: lorem.sentences(5),
    },
    {
        genre: GameGenre.Euro,
        name: 'Maracaibo',
        rating: 8.17,
        duration: convertDuration(300),
        players: {
            min: 1,
            max: 5,
        },
        description: lorem.sentences(5),
    },
    {
        genre: GameGenre.AreaConrol,
        name: 'Twilight Imperium: Fourth Edition',
        rating: 8.66,
        duration: convertDuration(300),
        players: {
            min: 1,
            max: 5,
        },
        description: lorem.sentences(5),
    },
    {
        genre: GameGenre.AreaConrol,
        name: 'Eclipse',
        rating: 8.63,
        duration: convertDuration(300),
        players: {
            min: 1,
            max: 5,
        },
        description: lorem.sentences(5),
    },
    {
        genre: GameGenre.AreaConrol,
        name: 'Root',
        rating: 8.10,
        duration: convertDuration(300),
        players: {
            min: 1,
            max: 5,
        },
        description: lorem.sentences(5),
    },
    {
        genre: GameGenre.AreaConrol,
        name: 'Rising Sun',
        rating: 7.82,
        duration: convertDuration(300),
        players: {
            min: 1,
            max: 5,
        },
        description: lorem.sentences(5),
    },
    {
        genre: GameGenre.AreaConrol,
        name: 'Inis',
        rating: 7.81,
        duration: convertDuration(300),
        players: {
            min: 1,
            max: 5,
        },
        description: lorem.sentences(5),
    },
    {
        genre: GameGenre.AreaConrol,
        name: 'Forbidden Stars',
        rating: 7.97,
        duration: convertDuration(300),
        players: {
            min: 1,
            max: 5,
        },
        description: lorem.sentences(5),
    },
    {
        genre: GameGenre.AreaConrol,
        name: 'Kemet',
        rating: 7.69,
        duration: convertDuration(300),
        players: {
            min: 1,
            max: 5,
        },
        description: lorem.sentences(5),
    },
    {
        genre: GameGenre.AreaConrol,
        name: 'Blood Rage',
        rating: 7.98,
        duration: convertDuration(300),
        players: {
            min: 1,
            max: 5,
        },
        description: lorem.sentences(5),
    },
    {
        genre: GameGenre.DungeonCrawlers,
        name: 'Gloomheaven',
        rating: 8.72,
        duration: convertDuration(300),
        players: {
            min: 1,
            max: 5,
        },
        description: lorem.sentences(5),
    },
    {
        genre: GameGenre.DungeonCrawlers,
        name: 'Mage Knight',
        rating: 8.09,
        duration: convertDuration(300),
        players: {
            min: 1,
            max: 5,
        },
        description: lorem.sentences(5),
    },
    {
        genre: GameGenre.DungeonCrawlers,
        name: 'Tainted Grail',
        rating: 8.22,
        duration: convertDuration(300),
        players: {
            min: 1,
            max: 5,
        },
        description: lorem.sentences(5),
    },
    {
        genre: GameGenre.DungeonCrawlers,
        name: 'Clank',
        rating: 8.66,
        duration: convertDuration(300),
        players: {
            min: 1,
            max: 5,
        },
        description: lorem.sentences(5),
    },
    {
        genre: GameGenre.Cooperatives,
        name: 'Pandemic',
        rating: 8.59,
        duration: convertDuration(300),
        players: {
            min: 1,
            max: 5,
        },
        description: lorem.sentences(5),
    },
    {
        genre: GameGenre.Cooperatives,
        name: 'Spirit Island',
        rating: 8.37,
        duration: convertDuration(300),
        players: {
            min: 1,
            max: 5,
        },
        description: lorem.sentences(5),
    },
    {
        genre: GameGenre.Cooperatives,
        name: 'Nemesis',
        rating: 8.37,
        duration: convertDuration(300),
        players: {
            min: 1,
            max: 5,
        },
        description: lorem.sentences(5),
    },
    {
        genre: GameGenre.Cooperatives,
        name: 'Arkham',
        rating: 8.16,
        duration: convertDuration(300),
        players: {
            min: 1,
            max: 5,
        },
        description: lorem.sentences(5),
    },
    {
        genre: GameGenre.Cooperatives,
        name: 'Mansions of Madness',
        rating: 8.01,
        duration: convertDuration(300),
        players: {
            min: 1,
            max: 5,
        },
        description: lorem.sentences(5),
    },
    {
        genre: GameGenre.Cooperatives,
        name: 'Dead of Winter: A Crossroads Game',
        rating: 8.53,
        duration: convertDuration(300),
        players: {
            min: 1,
            max: 5,
        },
        description: lorem.sentences(5),
    },
    {
        genre: GameGenre.Abstarcts,
        name: 'Azul',
        rating: 7.79,
        duration: convertDuration(300),
        players: {
            min: 1,
            max: 5,
        },
        description: lorem.sentences(5),
    },
    {
        genre: GameGenre.Abstarcts,
        name: 'Patchwork',
        rating: 8.01,
        duration: convertDuration(300),
        players: {
            min: 1,
            max: 5,
        },
        description: lorem.sentences(5),
    },
    {
        genre: GameGenre.Abstarcts,
        name: 'War Chest',
        rating: 7.94,
        duration: convertDuration(300),
        players: {
            min: 1,
            max: 5,
        },
        description: lorem.sentences(5),
    },
    {
        genre: GameGenre.Duels,
        name: 'Star wars Rebellion',
        rating: 8.42,
        duration: convertDuration(300),
        players: {
            min: 1,
            max: 5,
        },
        description: lorem.sentences(5),
    },
    {
        genre: GameGenre.Duels,
        name: 'War of the Ring: Second Edition',
        rating: 8.94,
        duration: convertDuration(300),
        players: {
            min: 1,
            max: 5,
        },
        description: lorem.sentences(5),
    },
    {
        genre: GameGenre.Duels,
        name: 'Twilight Struggle',
        rating: 8.27,
        duration: convertDuration(300),
        players: {
            min: 1,
            max: 5,
        },
        description: lorem.sentences(5),
    },
    {
        genre: GameGenre.Duels,
        name: '7 Wonders duel',
        rating: 8.11,
        duration: convertDuration(300),
        players: {
            min: 1,
            max: 5,
        },
        description: lorem.sentences(5),
    },
    {
        genre: GameGenre.Duels,
        name: 'Android Netrunner',
        rating: 7.87,
        duration: convertDuration(300),
        players: {
            min: 1,
            max: 5,
        },
        description: lorem.sentences(5),
    },
]

export {allGames}
