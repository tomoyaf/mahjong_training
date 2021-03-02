import React from 'react';

import { s as style } from '../../../styles/S.module.css';

export default function s({ children }) {
  return <span className={style}>{children}</span>;
}
