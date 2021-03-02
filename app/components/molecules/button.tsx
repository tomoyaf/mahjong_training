import React from 'react';

import styles from '../../../styles/Button.module.css';
import Card from '../atoms/card';

export default function button({ type, size, onClick, children }) {
  let className =
    type === "primary"
      ? [styles.innerWrapper, styles.primary].join(" ")
      : styles.innerWrapper;

  switch (size) {
    case "small":
      className = [className, styles.small].join(" ");
      break;
    case "medium":
      className = [className, styles.medium].join(" ");
      break;
    case "big":
      className = [className, styles.big].join(" ");
      break;
    default:
      className = [className, styles.medium].join(" ");
  }
  return (
    <Card onClick={onClick}>
      <div className={className}>{children}</div>
    </Card>
  );
}
