import { selectAll } from './slice';

import { RootState } from '../store';

export const selecetVacanciesModule = (state: RootState) =>
  selectAll(state.vacancies);
