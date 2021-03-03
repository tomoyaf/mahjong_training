import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import styles from '../../../styles/result.module.css';
import Button from '../molecules/button';

export default function result({ questions, answers }) {
  const router = useRouter();
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>結果</div>
      <div className={styles.buttonWrapper}>
        <div className={styles.button}>
          <Button onClick={() => router.reload()}>もう一回</Button>
        </div>
        <div className={styles.button}>
          <Button onClick={() => router.push("/")}>ホームに戻る</Button>
        </div>
      </div>
    </div>
  );
}
