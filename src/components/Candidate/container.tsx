import { useDrag } from 'react-dnd';

import { Candidate } from './ui/component';

import { CandidateProps } from '../../interfaces/vacancy.interface';

export function CandidateContainer({
  columnPosition,
  candidate,
}: {
  columnPosition: number;
  candidate: CandidateProps;
}) {
  const [, dragRef] = useDrag({ type: 'candidate', item: candidate });

  return (
    <Candidate
      columnPosition={columnPosition}
      dragRef={dragRef}
      candidate={candidate}
    />
  );
}
