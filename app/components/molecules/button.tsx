import React from 'react';

import styles from '../../../styles/Button.module.css';
import Card from '../atoms/card';

export default function button({
  type,
  size,
  onClick,
  children,
  className,
  disabled,
}: any) {
  let cls =
    type === "primary"
      ? [styles.innerWrapper, styles.primary].join(" ")
      : styles.innerWrapper;

  switch (size) {
    case "small":
      cls = [cls, styles.small].join(" ");
      break;
    case "medium":
      cls = [cls, styles.medium].join(" ");
      break;
    case "big":
      cls = [cls, styles.big].join(" ");
      break;
    default:
      cls = [cls, styles.medium].join(" ");
  }
  if (disabled) {
    cls = [cls, styles.disabled].join(" ");
  }
  return (
    <Card
      onClick={disabled ? () => {} : onClick}
      className={
        disabled ? [className, styles.disabledCard].join(" ") : className
      }
    >
      <div className={cls}>{children}</div>
    </Card>
  );
}
