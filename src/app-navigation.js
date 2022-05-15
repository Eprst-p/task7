import { GameGenre } from "./settings/game-genre";

export const navigation = [
  {
    text: 'Домашняя',
    path: '/home',
    icon: 'home'
  },
  {
    text: 'Все игры',
    path: '/games',
    icon: 'fields',
    items: [
      {
        text: GameGenre.Euro,
        path: '/euro',
      }, 
      {
        text: GameGenre.AreaConrol,
        path: '/area-control',
      }, 
      {
        text: GameGenre.DungeonCrawlers,
        path: '/dungeon-crawlers',
      }, 
      {
        text: GameGenre.Cooperatives,
        path: '/cooperatives',
      }, 
      {
        text: GameGenre.Duels,
        path: '/duels',
      }, 
    ]
  }, 
  {
    text: 'Страница игры',
    path: '/game-page',
    icon: 'paste'
  }, 
  {
    text: 'Добавить игру',
    path: '/add-game',
    icon: 'add'
  },
  {
    text: 'Пользователь',
    path: '/user',
    icon: 'user'
  }, 
];
