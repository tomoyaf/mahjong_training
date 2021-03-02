import React from 'react';

import styles from '../../../styles/PageTemplate.module.css';
import Header from './header';

export default function pageTemplate({ children }) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.contentsWrapper}>{children}</div>
    </div>
  );
}
