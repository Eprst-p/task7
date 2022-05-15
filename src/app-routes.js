import { withNavigationWatcher } from './contexts/navigation';
import { HomePage, GamesPage, EuroPage, AreaControlPage, DungeonCrawlersPage, CooperativesPage, DuelsPage, UserPage, GamePagePage, AddGamePage } from './pages';

const routes = [
  {
    path: '/home',
    component: HomePage
  }, 
  {
    path: '/games',
    component: GamesPage
  }, 
  {
    path: '/euro',
    component: EuroPage
  }, 
  {
    path: '/area-control',
    component: AreaControlPage
  }, 
  {
    path: '/dungeon-crawlers',
    component: DungeonCrawlersPage
  }, 
  {
    path: '/cooperatives',
    component: CooperativesPage
  }, 
  {
    path: '/duels',
    component: DuelsPage
  },
  {
    path: '/user',
    component: UserPage
  }, 
  {
    path: '/game-page',
    component: GamePagePage
  }, 
  {
    path: '/add-game',
    component: AddGamePage
  }
];

export default routes.map(route => {
  return {
    ...route,
    component: withNavigationWatcher(route.component)
  };
});
