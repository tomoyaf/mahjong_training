import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { LineIcon, LineShareButton, TwitterIcon, TwitterShareButton } from 'react-share';
import useSwr from 'swr';

import styles from '../../../styles/Result.module.css';
import Card from '../atoms/card';
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

  let message = "Loading...";
  let estRate = "Loading...";
  if (data) {
    message = data.message;
    estRate = data.rate;
  }

  const url = "https://mahjongl.vercel.app";
  const iconSize = 64;
  const shareText = `麻雀の手牌予想問題で私の正解率は${Math.floor(
    (100.0 * nCorrect) / nQuestion
  )}%で、推定天鳳レートは${estRate}でした！

MahjongL - 麻雀学習
`;

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>結果</div>

      <Card className={styles.table}>
        <div className={styles.row}>
          <div className={styles.left}>正解数</div>
          <div className={styles.right}>
            {nCorrect} / {nQuestion}
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.left}>推定天鳳レート</div>
          <div className={styles.right}>{estRate}</div>
        </div>
        <div className={styles.row}>
          <div className={styles.left}>コメント</div>
          <div className={styles.right}>{message}</div>
        </div>

        {/* <div className={styles.left}>
          <div className={styles.label}>正解数</div>
          <div className={styles.label}>推定天鳳レート</div>
          <div className={styles.label}>コメント</div>
        </div>
        <div className={styles.right}>
          <div className={styles.value}>
            {nCorrect} / {nQuestion}
          </div>
          <div className={styles.value}>{estRate}</div>
          <div className={styles.value}>{message}</div>
        </div> */}
      </Card>

      <div className={styles.buttonWrapper}>
        結果をSNSで共有
        <div className={styles.button}>
          <TwitterShareButton
            url={url}
            title={shareText}
            className={styles.shareButton}
          >
            <TwitterIcon size={iconSize} round />
          </TwitterShareButton>
          <LineShareButton
            url={url}
            title={shareText}
            className={styles.shareButton}
          >
            <LineIcon size={iconSize} round />
          </LineShareButton>
        </div>
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
