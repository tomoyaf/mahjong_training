import React from 'react';

import style from '../../../styles/Strong.module.css';

// import { strongSpan } from "../../../styles/Strong.module.css";

export default function Strong({ children }) {
  return <span className={style.strongSpan}>{children}</span>;
}
