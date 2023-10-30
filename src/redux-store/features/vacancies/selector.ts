import { selectById } from './slice';

import { RootState } from '../../store';

export const selecetVacanciesModule = (state: RootState) => state.vacancies;

export const selecetVacancyById = (state: RootState, id: string) =>
  selectById(selecetVacanciesModule(state), id);
