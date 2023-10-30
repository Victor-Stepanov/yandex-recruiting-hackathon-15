import React from 'react';

import { CardListVacancy } from './component';

import { selecetVacanciesModule } from '../../redux-store/features/vacancies/selector';
import { fetchVacancies } from '../../redux-store/features/vacancies/thunk/fetchVacancies';
import { useAppDispatch, useAppSelector } from '../../redux-store/store';

export function CardListVacancyContainer() {
  const dispatch = useAppDispatch();
  const vacancies = useAppSelector(selecetVacanciesModule);
  React.useEffect(() => {
    dispatch(fetchVacancies());
  }, []);

  if (!vacancies.length) {
    return;
  }

  return <CardListVacancy />;
}
