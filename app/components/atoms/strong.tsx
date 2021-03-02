import React from 'react';

import styles from '../../../styles/Strong.module.css';

export default function Strong({ children }) {
  return <span className={styles.strongSpan}>{children}</span>;
}
