import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import useSwr from 'swr';

import styles from '../../../styles/Result.module.css';
import Button from '../molecules/button';

const fetcher = (url: RequestInfo) => fetch(url).then((res) => res.json());

export default function result({ questions, answers }) {
  const router = useRouter();

  const nCorrect = questions
    .map((q, idx) => q.correct_answer === answers[idx])
    .filter(Boolean).length;
  const nQuestion = questions.length;

  const { data, error } = useSwr(
    `/api/result?ncorrect=${nCorrect}&nquestion=${nQuestion}`,
    fetcher
  );

  let res = "Loading...";
  if (data) {
    res = data.message;
  }
  console.log(data);
  console.log(res);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>結果</div>
      <div className={styles.nCorrect}>
        正解数：{nCorrect} / {nQuestion}
      </div>
      <div className={styles.Result}>コメント：{res}</div>
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
