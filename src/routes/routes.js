import config from '~/config';

// layouts
import { DefaultLayout } from '~/layouts';

// pages
import Home from '~/pages/Home';
import BestSelling from '~/pages/BestSelling';
import Products from '~/pages/Products';
import Event from '~/pages/Event';
import Profile from '~/pages/Profile';
import Login from '~/pages/Login';
import SignUp from '~/pages/SignUp';

const publicRoutes = [
    { path: config.routes.home, component: Home, layout: DefaultLayout },
    { path: config.routes.bestSelling, component: BestSelling, layout: null },
    { path: config.routes.products, component: Products, layout: null },
    { path: config.routes.event, component: Event, layout: null },
    { path: config.routes.profile, component: Profile, layout: null },
    { path: config.routes.login, component: Login, layout: DefaultLayout },
    { path: config.routes.signUp, component: SignUp, layout: DefaultLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
