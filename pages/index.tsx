import Router from 'next/router';
import {
    FacebookIcon, FacebookShareButton, HatenaIcon, HatenaShareButton, LineIcon, LineShareButton,
    RedditIcon, RedditShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon,
    WhatsappShareButton
} from 'react-share';

import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Strong from '../app/components/atoms/strong';
import Button from '../app/components/molecules/button';
import PageTemplate from '../app/components/organisms/pageTemplate';
import iconStyles from '../styles/Icon.module.css';
import indexStyles from '../styles/Index.module.css';

export default function Home() {
  const handleClick = () => Router.push("/exercise");

  const url = "https://mahjongl.vercel.app";
  const iconSize = 72;
  const title = "MahjongL - 麻雀学習";
  return (
    <PageTemplate>
      <div className={indexStyles.contents}>
        <div className={indexStyles.title}>
          手牌予測問題を解き、麻雀を効率的に学ぶ
        </div>
        <div className={indexStyles.text}>
          <p>
            麻雀は隠れた情報を推測し、推測した情報を元に勝利を目指すゲームです。
          </p>
          <p>
            麻雀をプレイする上で、最も重要な情報である「対局相手の手牌」を予測することができれば、放銃確率を下げながら自分の和了スコアを上げることできます。
          </p>
          <p>
            MahjongLでは、対局相手の手牌を予測するための訓練を簡単に行うことができます。
          </p>
          <p>
            まずは以下のボタンから、
            <Strong>3分で終わる簡単な練習問題を解いてみましょう</Strong>。
          </p>
        </div>
        <div className={indexStyles.exerciseButton}>
          <Button type="primary" size="big" onClick={handleClick}>
            <div className={iconStyles.leftBigWrapper}>
              <FontAwesomeIcon icon={faPlay} />
            </div>
            問題を解く
          </Button>
        </div>

        <div className={indexStyles.title}>SNSでMahjongLを共有</div>
        <div className={indexStyles.shareButtonWrapper}>
          <TwitterShareButton
            url={url}
            title={title}
            className={indexStyles.shareButton}
          >
            <TwitterIcon size={iconSize} round />
          </TwitterShareButton>
          <HatenaShareButton url={url} className={indexStyles.shareButton}>
            <HatenaIcon size={iconSize} round />
          </HatenaShareButton>
          <LineShareButton
            url={url}
            title={title}
            className={indexStyles.shareButton}
          >
            <LineIcon size={iconSize} round />
          </LineShareButton>
          <RedditShareButton url={url} className={indexStyles.shareButton}>
            <RedditIcon size={iconSize} round />
          </RedditShareButton>{" "}
          <FacebookShareButton url={url} className={indexStyles.shareButton}>
            <FacebookIcon size={iconSize} round />
          </FacebookShareButton>
          <WhatsappShareButton url={url} className={indexStyles.shareButton}>
            <WhatsappIcon size={iconSize} round />
          </WhatsappShareButton>
        </div>
      </div>
    </PageTemplate>
  );
}
