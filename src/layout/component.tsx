import { Outlet } from 'react-router-dom';

import styles from './layout.module.css';

export function Layout() {
  return (
    <div className={styles.root}>
      <header>Header</header>
      <aside></aside>
      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
}
