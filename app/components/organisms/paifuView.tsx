import React from 'react';

import styles from '../../../styles/PaifuView.module.css';

export default function PaifuView(props: {
  paifu: { discards: any[]; hands: any[] };
}) {
  const pos = ["下家", "対面", "上家"];
  return (
    <div className={styles.innerWrapper}>
      <div className={styles.discards}>
        {props.paifu.discards.map((discard: any[], idx: string | number) => (
          <div className={styles.discard}>
            {(idx === 0 ? "捨て牌　" : "　　　　") + pos[idx]}：
            {discard.join(" ")}
          </div>
        ))}
      </div>
      <div className={styles.hands}>手牌：{props.paifu.hands.join(" ")}</div>
    </div>
  );
}
