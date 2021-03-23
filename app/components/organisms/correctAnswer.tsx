import React from 'react';

import styles from '../../../styles/CorrectAnswer.module.css';
import Button from '../molecules/button';
import Choices from '../molecules/choices';
import PaifuView from '../organisms/paifuView';

export default function correctAnswer({
  questionIdx,
  nQuestions,
  question,
  handleNext,
  selected,
}) {
  const choiceTexts = question.choices.map((item) => item.join(" "));
  function handleClick() {}
  const isCorrect = question.correct_answer === selected;
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        解答　{questionIdx + 1} / {nQuestions}　
        {isCorrect ? (
          <div className={styles.correctTitle}>正解</div>
        ) : (
          <div className={styles.wrongTitle}>不正解</div>
        )}
      </div>
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
      <Button onClick={handleNext} className={styles.nextButton}>
        次へ
      </Button>
    </div>
  );
}
