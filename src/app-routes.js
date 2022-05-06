import { withNavigationWatcher } from './contexts/navigation';
import { HomePage, TasksPage, ProfilePage, ПредложенияPage, OffersPage, SendedPage, HereticPage, AnswersPage, LoyalistsPage, ProsOfHeresyPage, CreateRequestPage } from './pages';

const routes = [
  {
    path: '/tasks',
    component: TasksPage
  },
  {
    path: '/profile',
    component: ProfilePage
  },
  {
    path: '/home',
    component: HomePage
  }, 
  {
    path: '/предложения',
    component: ПредложенияPage
  }, 
  {
    path: '/offers',
    component: OffersPage
  }, 
  {
    path: '/sended',
    component: SendedPage
  }, 
  {
    path: '/heretic',
    component: HereticPage
  }, 
  {
    path: '/answers',
    component: AnswersPage
  }, 
  {
    path: '/loyalists',
    component: LoyalistsPage
  }, 
  {
    path: '/pros-of-heresy',
    component: ProsOfHeresyPage
  }, 
  {
    path: '/create-request',
    component: CreateRequestPage
  }
];

export default routes.map(route => {
  return {
    ...route,
    component: withNavigationWatcher(route.component)
  };
});
