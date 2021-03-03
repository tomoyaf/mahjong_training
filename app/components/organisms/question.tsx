import React, { useState } from 'react';

import styles from '../../../styles/question.module.css';
import Button from '../molecules/button';
import Choices from '../molecules/choices';

export default function question({
  questionIdx,
  nQuestions,
  question,
  handleNext,
}) {
  const choiceTexts = question.choices.map((item) => item.join(" "));
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
      <div className={styles.detail}>{question.paifu.discards[0]}</div>
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
