import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { PageNotFound } from 'pages/PageNotFound';
import { type RouteProps } from 'react-router-dom';

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.ABOUT]: {
    path: RoutePath[AppRoutes.ABOUT],
    element: <AboutPage />,
  },
  [AppRoutes.MAIN]: {
    path: RoutePath[AppRoutes.MAIN],
    element: <MainPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath[AppRoutes.NOT_FOUND],
    element: <PageNotFound />,
  },
};
