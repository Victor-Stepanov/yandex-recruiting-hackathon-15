import { Button, ThemeProvider, createTheme } from '@mui/material';

import styles from './card.module.css';

import { Vacancy } from '../../interfaces/vacancy.interface';
import { CardVacancy } from '../CardVacancy';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          position: 'absolute',
          bottom: 48,
          right: 20,
          borderRadius: 6,
          background: 'var(--primary-blue, #5A9BFF)',
          color: 'var(--primary-white, #FFF)',
          textAlign: 'center',
          fontFamily: 'YS Text',
          fontSize: 14,
          fontStyle: 'normal',
          fontWeight: 500,
          textTransform: 'none',
          zIndex: 1,
        },
      },
    },
  },
});

export function CardListVacancy({
  value,
  vacancies,
}: {
  value: number;
  vacancies: Vacancy[];
}): JSX.Element {
  // const [activeTab, setActiveTab] = React.useState(0);

  // Функция для фильтрации вакансий в зависимости от выбранной вкладки
  const filterVacancies = (vacancies: Vacancy[]) => {
    if (value === 1) {
      // Показать только активные вакансии
      return vacancies.filter((vacancy) => vacancy.is_active);
    } else if (value === 2) {
      // Показать только неактивные вакансии
      return vacancies.filter((vacancy) => !vacancy.is_active);
    } else {
      // Показать все вакансии
      return vacancies;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.Container}>
        <Button variant='contained'>Добавить</Button>
        <div className={styles.Cardlist}>
          {filterVacancies(vacancies).map((vacancies) => (
            <CardVacancy key={vacancies.id} vacancies={vacancies} />
          ))}
        </div>
      </div>
    </ThemeProvider>
  );
}
