import React from 'react';

import { CardListVacancy } from './component';

import { useAppDispatch, useAppSelector } from '../../redux-store/store';
import { selecetVacanciesModule } from '../../redux-store/features/vacancies/selector';
import { fetchVacancies } from '../../redux-store/features/vacancies/thunk/fetchVacancies';

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
