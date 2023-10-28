import { Avatar, CardHeader } from '@mui/material';
import { ConnectDragSource } from 'react-dnd';

import styles from './candidate.module.css';

import { CardProvider } from './card.provider';

import { CandidateProps } from '../../../interfaces/vacancy.interface';

export function Candidate({
  dragRef,
  candidate,
  columnPosition,
}: {
  dragRef: ConnectDragSource;
  candidate: CandidateProps;
  columnPosition: number;
}) {
  const isActive = columnPosition === +candidate.kanban_position;
  return (
    <div ref={!isActive ? dragRef : null} className={styles.container}>
      <CardProvider isActive={isActive}>
        <CardHeader
          sx={{ width: '100%', boxSizing: 'border-box', padding: '0' }}
          avatar={
            <Avatar
              aria-label='level'
              alt={`${candidate.name} ${candidate.surname}`}
              src={candidate.imageSrc}
            />
          }
          title={
            <p
              className={styles.title}
            >{`${candidate.name} ${candidate.surname}`}</p>
          }
          subheader={
            <p className={styles.subtitle}>{`${candidate.grade} ${'1 год'}`}</p>
          }
        />
      </CardProvider>
    </div>
  );
}
