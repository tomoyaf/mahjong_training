import React from 'react';

import styles from '../../../styles/Choices.module.css';

export default function choices({
  texts,
  selected,
  handleClick,
  correctAnswer,
}) {
  if (correctAnswer) {
    return (
      <div className={styles.wrapper}>
        {texts.map((item, idx) => (
          <div
            onClick={() => handleClick(idx)}
            className={selected === idx ? styles.selectedChoice : styles.choice}
          >
            {item}
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className={styles.wrapper}>
      {texts.map((item, idx) => (
        <div
          onClick={() => handleClick(idx)}
          className={selected === idx ? styles.selectedChoice : styles.choice}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
