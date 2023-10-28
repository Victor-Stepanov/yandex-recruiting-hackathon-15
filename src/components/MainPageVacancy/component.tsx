import styles from './card.module.css';

import { CardListVacancy } from '../CardListVacancy';
// import { MainNavigateVacancy } from '../MainNavigateVacancy';
import { MainNavigateVacancy as CustomNavigateButton } from '../ui/components/CustomNavigateButton/component';

export function MainPageVacancy(): JSX.Element {
  return (
    <section>
      <h2 className={styles.Title}>Вакансии</h2>
      <CustomNavigateButton label1='Все' label2='Активные' label3='Архивные' />
      <CardListVacancy />
    </section>
  );
}
