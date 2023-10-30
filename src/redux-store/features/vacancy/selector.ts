import { selectById } from './slice';

import { RootState } from '../../store';

export const selecetVacancyModule = (state: RootState, id: string) =>
  selectById(state.vacancy, id);
