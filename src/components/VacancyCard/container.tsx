import React from 'react';
import { useParams } from 'react-router-dom';

import { VacancyCard } from './component';

import { selecetVacancyModule } from '../../redux-store/features/vacancy/selector';
import { fetchVacancy } from '../../redux-store/features/vacancy/thunk/fetchVacancy';
import { useAppDispatch, useAppSelector } from '../../redux-store/store';

export function VacancyCardContainer() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { vacancy } = useAppSelector(selecetVacancyModule);

  React.useEffect(() => {
    dispatch(fetchVacancy(id!));
  }, [dispatch, id]);

  if (!vacancy) {
    return null;
  }

  return <VacancyCard vacancy={vacancy} />;
}
