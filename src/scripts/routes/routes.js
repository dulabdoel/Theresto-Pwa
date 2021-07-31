import Home from '../view/pages/home';
import Favorite from '../view/pages/favorite';
import Detail from '../view/pages/detail';
import NotFound from '../view/pages/404er';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/favorite': Favorite,
  '/detail/:id': Detail,
  '/404er': NotFound,
};

export default routes;
