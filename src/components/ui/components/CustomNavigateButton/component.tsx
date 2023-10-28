import { Tabs, Tab, createTheme, ThemeProvider } from '@mui/material';
import React from 'react';

const theme = createTheme({
  components: {
    MuiTabs: {
      styleOverrides: {
        root: {
          'min-height': 32,
          'margin-bottom': 24,
        },
        scroller: {
          height: 32,
        },
        indicator: {
          height: 1,
          'background-color': 'var(--primary-black-500, #797980)',
        },
        flexContainer: {
          gap: 20,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          padding: '0',
          width: 144,
          'font-family': 'YS Display',
          'font-size': 24,
          'font-style': 'normal',
          'font-weight': 400,
          'line-height': 32,
          'text-align': 'center',
          'text-transform': 'none',
          'min-height': 32,
          '&.Mui-selected': {
            color: 'black',
          },
        },
      },
    },
  },
});

export function MainNavigateVacancy() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label='basic tabs example'
      >
        <Tab label='Все' />
        <Tab label='Активные' />
        <Tab label='Архивные' />
      </Tabs>
    </ThemeProvider>
  );
}
