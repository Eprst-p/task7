import { withNavigationWatcher } from './contexts/navigation';
import { HomePage, TasksPage, GamesPage, EuroPage, AreaControlPage, DungeonCrawlersPage, CooperativesPage, DuelsPage, UserPage, ProfilePage } from './pages';

const routes = [
  {
    path: '/tasks',
    component: TasksPage
  },
  {
    path: '/home',
    component: HomePage
  }, 
  {
    path: '/profile',
    component: ProfilePage
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
  }
];

export default routes.map(route => {
  return {
    ...route,
    component: withNavigationWatcher(route.component)
  };
});
