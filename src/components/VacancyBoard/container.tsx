import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { VacancyBoard } from './ui/component';

import { candidatesMock } from '../../helpers/mock';
import { setCandidates } from '../../redux-store/features/board/slice';
import { useAppDispatch } from '../../redux-store/store';

export function VacancyBoardContainer() {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(setCandidates(candidatesMock));
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <VacancyBoard />
    </DndProvider>
  );
}
