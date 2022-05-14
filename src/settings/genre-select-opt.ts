import { GameGenre } from "./game-genre";

export const genreSelectOpt = { 
    items: Object.values(GameGenre), 
    searchEnabled: true, 
    placeholder:'Выберите жанр' 
  };
