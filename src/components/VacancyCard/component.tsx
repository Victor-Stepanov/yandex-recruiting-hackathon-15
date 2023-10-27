import { Card, Collapse } from '@mui/material';

import React from 'react';

import { VacancyCardBody, VacancyCardHeader } from './ui';

import { VacancyProps } from '../../interfaces/vacancy.interface';

export function VacancyCard({ vacancy }: { vacancy: VacancyProps }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      variant='outlined'
      sx={{
        border: 'none',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        gap: '32px',
      }}
    >
      <VacancyCardHeader
        title={vacancy.title}
        company={vacancy.company}
        image={vacancy.image}
        expanded={expanded}
        handleExpandClick={handleExpandClick}
      />
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <VacancyCardBody />
      </Collapse>
    </Card>
  );
}
