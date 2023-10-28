import { Tabs, Tab, createTheme, ThemeProvider } from '@mui/material';
import React from 'react';

const theme = createTheme({
  components: {
    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: 32,
          marginBottom: 24,
        },
        scroller: {
          height: 32,
        },
        indicator: {
          height: 1,
          backgroundColor: 'var(--primary-black-500, #797980)',
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
          fontfamily: 'YS Display',
          fontSize: 24,
          fontStyle: 'normal',
          fontWeight: 400,
          textAlign: 'center',
          textTransform: 'none',
          minHeight: 32,
          '&.Mui-selected': {
            color: 'black',
          },
        },
      },
    },
  },
});

interface CustomNavigateButtonProps {
  labels: string[];
}

export function CustomNavigateButton(props: CustomNavigateButtonProps) {
  const { labels } = props;
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
        {labels.map((label, index) => (
          <Tab key={index} label={label} />
        ))}
      </Tabs>
    </ThemeProvider>
  );
}
