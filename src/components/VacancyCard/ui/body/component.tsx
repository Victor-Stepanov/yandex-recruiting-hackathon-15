import { CardContent } from '@mui/material';

import { CardContentWrapper } from '../../../ui';

const titles = [
  'Компания',
  'Формат',
  'Регион',
  'График',
  'Тип занятости',
  'Тип занятости',
  'Портфолио',
  'Язык',
  'Грейд',
  'Навыки',
  'Дополнительно',
  'Тестовое',
];

export function VacancyCardBody() {
  return (
    <CardContent
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        padding: 0,
        transition: 'height 0.3s',
      }}
    >
      {titles.map((title, index) => (
        <CardContentWrapper key={index} title={title}>
          <span>CDEK</span>
        </CardContentWrapper>
      ))}
    </CardContent>
  );
}
