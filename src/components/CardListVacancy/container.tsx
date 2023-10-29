import React from 'react';

import { CardListVacancy } from './component';

import { useAppDispatch, useAppSelector } from '../../redux-store/store';
import { selecetVacanciesModule } from '../../redux-store/vacancies/selector';
import { fetchVacancies } from '../../redux-store/vacancies/thunk/fetchVacancies';

export function CardListVacancyContainer(props: { value: number }) {
  const dispatch = useAppDispatch();
  const vacancies = useAppSelector(selecetVacanciesModule);
  React.useEffect(() => {
    dispatch(fetchVacancies());
  }, []);

  if (!vacancies.length) {
    return;
  }

  return <CardListVacancy value={props.value} vacancies={vacancies} />;
}
