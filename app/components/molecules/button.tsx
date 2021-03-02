import React from 'react';

import { big, innerWrapper, medium, primary, small } from '../../../styles/Button.module.css';
import Card from '../atoms/card';

export default function button({ type, size, onClick, children }) {
  let className =
    type === "primary" ? [innerWrapper, primary].join(" ") : innerWrapper;

  switch (size) {
    case "small":
      className = [className, small].join(" ");
      break;
    case "medium":
      className = [className, medium].join(" ");
      break;
    case "big":
      className = [className, big].join(" ");
      break;
    default:
      className = [className, medium].join(" ");
  }
  return (
    <Card onClick={onClick}>
      <div className={className}>{children}</div>
    </Card>
  );
}
