const columnTitle: ViewVariant[] = [
  'Кандидаты',
  'Тестовое',
  'Собеседование',
  'Офер',
  'Отказ',
  'Резерв',
];

import React from 'react';

import styles from './Board.module.css';

import { ColumnBoardContainer } from '../../ColumnBoard/container';
import { ViewVariant } from '../../ui/components/Badge/component';

export function VacancyBoard() {
  const isHidden = true;

  return (
    <section className={styles.board}>
      {columnTitle.map((title, index) => (
        <ColumnBoardContainer
          key={index}
          title={title}
          isHidden={isHidden}
          columnPosition={index}
        />
      ))}
    </section>
  );
}
