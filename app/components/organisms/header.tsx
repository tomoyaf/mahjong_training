import Link from 'next/link';
import React from 'react';

import styles from '../../../styles/Header.module.css';

export default function header() {
  return (
    <div className={styles.header}>
      <Link href="/">
        <a className={styles.icon}>🀄 MahjongL</a>
      </Link>
    </div>
  );
}
