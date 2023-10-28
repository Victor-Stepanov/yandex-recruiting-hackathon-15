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
  const [isHidden, setIsHidden] = React.useState(false);

  return (
    <>
      <nav className={styles.nav}>
        <div></div>
        <button
          className={styles.button}
          onClick={() => setIsHidden(!isHidden)}
        >
          Выбрать
        </button>
      </nav>
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
    </>
  );
}
