import { Card, ThemeProvider, createTheme } from '@mui/material';

import React from 'react';

import styles from './CustomCard.module.css';

const theme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'var(--primary-white, #FFF)',
          'border-radius': '20px',
          'box-shadow':
            '0px 4px 6px 0px rgba(176, 190, 197, 0.15), 0px 8px 24px 0px rgba(176, 190, 197, 0.15)',
        },
      },
    },
  },
});

export function CustomCard({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Card className={styles.Card}>{children}</Card>
    </ThemeProvider>
  );
}
