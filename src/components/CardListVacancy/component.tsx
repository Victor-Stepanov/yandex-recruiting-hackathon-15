import { Button, ThemeProvider, createTheme } from '@mui/material';

import styles from './card.module.css';

import { CardVacancy } from '../CardVacancy';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          position: 'absolute',
          bottom: 48,
          right: 20,
          overflow: 'visible',
          'border-radius': 6,
          background: 'var(--primary-blue, #5A9BFF)',
          color: 'var(--primary-white, #FFF)',
          'text-align': 'center',
          'font-family': 'YS Text',
          'font-size': 14,
          'font-style': 'normal',
          'font-weight': 500,
          'line-height': 20,
          'text-transform': 'none',
          zIndex: 1,
        },
      },
    },
  },
});

export function CardListVacancy(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.Container}>
        <Button variant='contained'>Добавить</Button>
        <div className={styles.Cardlist}>
          <CardVacancy />
          <CardVacancy />
          <CardVacancy />
          <CardVacancy />
          <CardVacancy />
          <CardVacancy />
          <CardVacancy />
          <CardVacancy />
          <CardVacancy />
          <CardVacancy />
          <CardVacancy />
          <CardVacancy />
          <CardVacancy />
        </div>
      </div>
    </ThemeProvider>
  );
}
