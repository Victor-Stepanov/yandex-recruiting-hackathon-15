import { Button } from '@mui/material';
import React from 'react';

import styles from './VacancyPage.module.css';

import { CustomNavigateButton } from '../../components/ui';
import { VacancyBoardContainer } from '../../components/VacancyBoard';
import { VacancyCardContainer } from '../../components/VacancyCard';

const labels: string[] = ['Новые кандидаты', 'Моя доска'];

export function VacancyPage() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <section className={styles.section}>
      <VacancyCardContainer />
      <nav className={styles.nav}>
        <CustomNavigateButton
          labels={labels}
          value={value}
          onChange={handleChange}
        />
        <Button
          sx={{
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: '20px',
            color: '#1D6BF3',
            padding: '0px',
            textTransform: 'none',
          }}
        >
          Выбрать
        </Button>
      </nav>
      {labels[value] === 'Моя доска' ? <VacancyBoardContainer /> : <div></div>}
    </section>
  );
}
