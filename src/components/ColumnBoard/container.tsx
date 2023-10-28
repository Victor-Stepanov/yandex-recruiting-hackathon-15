import { useDrop } from 'react-dnd';

import { ColumnBoard } from './ui/component';

import { ColumnBoardProps } from '../../interfaces/column.interface';
import { CandidateProps } from '../../interfaces/vacancy.interface';
import { selectBoardModule } from '../../redux-store/features/board/selector';
import { moveCandidate } from '../../redux-store/features/board/slice';
import { useAppSelector, useAppDispatch } from '../../redux-store/store';

export function ColumnBoardContainer({
  title,
  columnPosition,
  isHidden,
}: ColumnBoardProps) {
  const { candidates } = useAppSelector(selectBoardModule);
  const dispatch = useAppDispatch();
  const [{ isHover }, dropTarget] = useDrop({
    accept: 'candidate',
    drop: (item: CandidateProps) => {
      handleMoveItem(item);
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });
  console.log(isHover);
  const handleMoveItem = (item: CandidateProps) => {
    dispatch(
      moveCandidate({
        id: item.id,
        position: columnPosition.toString(),
        date: new Date(),
      })
    );
  };

  const filteredCandidates = candidates.filter(
    ({ kanban_position }) => +kanban_position === columnPosition
  );

  return (
    <ColumnBoard
      title={title}
      dropRef={dropTarget}
      isHidden={isHidden}
      countCandidates={filteredCandidates.length}
      candidates={filteredCandidates}
      columnPosition={columnPosition}
    />
  );
}
