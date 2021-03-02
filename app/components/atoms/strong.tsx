import React from 'react';

import { strongSpan } from '../../../styles/Strong.module.css';

export default function Strong({ children }) {
  return <span className={strongSpan}>{children}</span>;
}
