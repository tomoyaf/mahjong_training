import React from 'react';

import { strong } from '../../../styles/Strong.module.css';

export default function Strong({ children }) {
  return <span className={strong}>{children}</span>;
}
