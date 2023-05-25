import { FC } from 'react';
import HomePage from 'src/components/pages/home/HomePage';
import NotFound from 'src/components/pages/not-found/NotFound';

export interface RouteConfig {
  path: string;
  root?: boolean;
  component?: FC;
  pageType: 'Home' | 'Page Not Found';
  nestedRoutes?: Record<string, RouteConfig>;
}

const routesConfig: Record<string, RouteConfig> = {
  root: {
    path: '/',
    root: true,
    pageType: 'Home',
  },
  homePage: {
    path: '/home',
    component: HomePage,
    pageType: 'Home',
  },
  // homePage alias
  homeAlias0Page: {
    path: '/index',
    component: HomePage,
    pageType: 'Home',
  },
  homeAlias1Page: {
    path: '/index.html',
    component: HomePage,
    pageType: 'Home',
  },
  notFound: {
    path: '/page-not-found',
    component: NotFound,
    pageType: 'Page Not Found',
  },
  catchAll: {
    path: '*',
    component: NotFound,
    pageType: 'Page Not Found',
  },
};

export const RootRedirect = {
  from: '/',
  to: routesConfig.homePage.path,
};

export default routesConfig;
