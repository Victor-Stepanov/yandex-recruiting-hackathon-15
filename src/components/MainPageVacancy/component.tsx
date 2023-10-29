import styles from './card.module.css';

import { CardListVacancy } from '../CardListVacancy/component';
import { NavigateVacancy } from '../NavigateVacancy/component';

export function MainPageVacancy(): JSX.Element {
  const labels: string[] = ['Все', 'Активные', 'Архивные'];
  return (
    <section>
      <h2 className={styles.Title}>Вакансии</h2>
      <NavigateVacancy labels={labels} />
      <CardListVacancy />
    </section>
  );
}
