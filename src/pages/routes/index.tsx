import { RouteObject, createBrowserRouter } from 'react-router-dom';

import { VacancyBoardContainer } from '../../components/VacancyBoard';
import { Layout } from '../../layout';
import { MainPageVacancy } from '../MainPageVacancy';
import { VacancyPage } from '../VacancyPage/page';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPageVacancy />,
      },
      {
        path: 'resumelist',
        element: <VacancyPage />,
      },
      {
        path: '/board',
        element: <VacancyBoardContainer />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
