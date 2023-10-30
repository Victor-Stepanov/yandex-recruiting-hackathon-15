import React from 'react';

import styles from './card.module.css';

import { CardListVacancyContainer } from '../../components/CardListVacancy';
import { NavigateVacancy } from '../../components/NavigateVacancy';

export function MainPageVacancy(): JSX.Element {
  const labels: string[] = ['Все', 'Активные', 'Архивные'];

  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <section>
      <h2 className={styles.Title}>Вакансии</h2>
      <NavigateVacancy value={value} onChange={handleChange} labels={labels} />
      <CardListVacancyContainer value={value} />
    </section>
  );
}
