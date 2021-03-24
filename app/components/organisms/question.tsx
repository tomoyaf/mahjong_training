import React, { useState } from 'react';

import styles from '../../../styles/Question.module.css';
import Button from '../molecules/button';
import Choices from '../molecules/choices';
import PaifuView from '../organisms/paifuView';

export default function question({
  questionIdx,
  nQuestions,
  question,
  handleNext,
}) {
  const pos = ["下家", "対面", "上家"];
  const choiceTexts = question.choices.map((item) =>
    item.map((s, idx) => pos[idx] + "：" + s.join(" ")).join("、")
  );
  const [selected, setSelected] = useState();
  function handleClick(idx) {
    setSelected(idx);
  }
  function handleNextClick() {
    handleNext(selected);
  }
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>
        問題　{questionIdx + 1} / {nQuestions}
      </span>
      <div className={styles.detail}>
        <PaifuView paifu={question.paifu} />
      </div>
      <div className={styles.choices}>
        <Choices
          texts={choiceTexts}
          handleClick={handleClick}
          selected={selected}
        />
      </div>
      <Button
        onClick={handleNextClick}
        className={styles.nextButton}
        disabled={selected === undefined}
      >
        次へ
      </Button>
    </div>
  );
}
