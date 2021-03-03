import React from 'react';

import styles from '../../../styles/Card.module.css';

export default function card({ children, className, ...props }: any) {
  const cls = className ? [className, styles.card].join(" ") : styles.card;
  return (
    <div className={cls} {...props}>
      {children}
    </div>
  );
}
