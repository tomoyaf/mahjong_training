import Router from 'next/router';

import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Strong from '../app/components/atoms/strong';
import Button from '../app/components/molecules/button';
import PageTemplate from '../app/components/organisms/pageTemplate';
import { leftBigWrapper } from '../styles/Icon.module.css';
import { contents, text, title } from '../styles/Index.module.css';

export default function Home() {
  const handleClick = () => Router.push("/exercise");
  return (
    <PageTemplate>
      <div className={contents}>
        <div className={title}>手牌予測問題を解き、麻雀を効率的に学ぶ</div>
        <div className={text}>
          <p>
            麻雀は隠れた情報を推測し、推測した情報を元に勝利を目指すゲームです。
          </p>
          <p>
            麻雀をプレイする上で、最も重要な情報である「対局相手の手牌」を予測することができれば、放銃確率を最小化しながら自分のスコアを最大化することできます。
          </p>
          <p>
            MahjongLでは、対局相手の手牌を予測するための訓練を簡単に行うことができます。
            まずは以下のボタンから、
            <Strong>3分で終わる簡単な練習問題を解いてみましょう</Strong>。
          </p>
        </div>
        <Button type="primary" size="big" onClick={handleClick}>
          <div className={leftBigWrapper}>
            <FontAwesomeIcon icon={faPlay} />
          </div>
          問題を解く
        </Button>
      </div>
    </PageTemplate>
  );
}
