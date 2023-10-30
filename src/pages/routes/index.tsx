import { RouteObject, createBrowserRouter } from 'react-router-dom';

import { Layout } from '../../layout';
import { CandidatesPage } from '../Candidates';
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
        path: 'candidates',
        element: <CandidatesPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
