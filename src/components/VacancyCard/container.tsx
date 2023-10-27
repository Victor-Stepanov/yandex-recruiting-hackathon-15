import { VacancyCard } from './component';

import { vacancyMock } from '../../helpers/mock.vacancy';

export function VacancyCardContainer() {
  return <VacancyCard vacancy={vacancyMock} />;
}
