import { RouteObject, createBrowserRouter } from 'react-router-dom';

import { Layout } from '../../layout';
import { HomePage } from '../Home';
import { VacancyPage } from '../VacancyPage/page';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'resumelist',
        element: <VacancyPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
