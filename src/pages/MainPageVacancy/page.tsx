import styles from './card.module.css';

import { CardListVacancyContainer } from '../../components/CardListVacancy';
import { NavigateVacancy } from '../../components/NavigateVacancy/component';

export function MainPageVacancy(): JSX.Element {
  const labels: string[] = ['Все', 'Активные', 'Архивные'];
  return (
    <section>
      <h2 className={styles.Title}>Вакансии</h2>
      <NavigateVacancy labels={labels} />
      <CardListVacancyContainer />
    </section>
  );
}
