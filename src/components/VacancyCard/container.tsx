import { VacancyCard } from './component';

export function VacancyCardContainer() {
  const vacancy = '';

  if (!vacancy) {
    return;
  }

  return <VacancyCard vacancy={vacancy} />;
}
