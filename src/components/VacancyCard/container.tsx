import { VacancyCard } from './component';

import { selecetVacancyById } from '../../redux-store/features/vacancies/selector';

import { useAppSelector } from '../../redux-store/store';

export function VacancyCardContainer() {
  const vacancyIDMock = '49';
  const vacancy = useAppSelector((state) =>
    selecetVacancyById(state, vacancyIDMock)
  );

  if (!vacancy) {
    return;
  }

  return <VacancyCard vacancy={vacancy} />;
}
