import Link from 'next/link';
import React from 'react';

import { header as headerStyle, icon } from '../../../styles/Header.module.css';

export default function header() {
  return (
    <div className={headerStyle}>
      <Link href="/">
        <a className={icon}>MahjongL</a>
      </Link>
    </div>
  );
}
