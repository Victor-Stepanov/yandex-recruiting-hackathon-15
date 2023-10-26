import { RouteObject, createBrowserRouter } from 'react-router-dom';

import { Layout } from '../../layout';
import { HomePage } from '../Home';

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
        element: <span>ResumeListPage</span>,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
