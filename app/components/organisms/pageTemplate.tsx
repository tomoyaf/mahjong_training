import React from 'react';

import { contentsWrapper, wrapper } from '../../../styles/PageTemplate.module.css';
import Header from './header';

export default function pageTemplate({ children }) {
  return (
    <div className={wrapper}>
      <Header />
      <div className={contentsWrapper}>{children}</div>
    </div>
  );
}
