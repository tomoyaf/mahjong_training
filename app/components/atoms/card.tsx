import React from 'react';

import styles from '../../../styles/Card.module.css';

export default function card({ children, className, ...props }: any) {
  const cls = className ? styles.card : [styles.card, className].join(" ");
  return (
    <div className={cls} {...props}>
      {children}
    </div>
  );
}
