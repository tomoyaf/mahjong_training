import React from 'react';

import styles from '../../../styles/correctAnswer.module.css';
import Button from '../molecules/button';
import Choices from '../molecules/choices';

export default function correctAnswer({
  questionIdx,
  nQuestions,
  question,
  handleNext,
  selected,
}) {
  const choiceTexts = question.choices.map((item) => item.join(" "));
  function handleClick() {}
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        解答　{questionIdx + 1} / {nQuestions}
        {/* {selected} */}
      </div>
      <div className={styles.detail}>{question.paifu.discards[0]}</div>
      <div className={styles.choices}>
        <Choices
          texts={choiceTexts}
          handleClick={handleClick}
          selected={selected}
        />
      </div>
      <Button onClick={handleNext} className={styles.nextButton}>
        次へ
      </Button>
    </div>
  );
}
