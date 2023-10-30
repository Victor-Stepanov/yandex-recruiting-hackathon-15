import { Button, ThemeProvider, createTheme } from '@mui/material';

import styles from './card.module.css';

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

export function CardListVacancy(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.Container}>
        <Button variant='contained'>Добавить</Button>
        <div className={styles.Cardlist}></div>
      </div>
    </ThemeProvider>
  );
}
