import { useState } from 'react';
import useSwr from 'swr';

import CorrectAnswer from '../app/components/organisms/correctAnswer';
import PageTemplate from '../app/components/organisms/pageTemplate';
import Question from '../app/components/organisms/question';
import Result from '../app/components/organisms/result';
import styles from '../styles/Index.module.css';

const fetcher = (url: RequestInfo) => fetch(url).then((res) => res.json());

export default function Exercise() {
  const { data, error } = useSwr("/api/exercise", fetcher);
  const [state, setState] = useState("question");
  const [questionIdx, setQuestionIdx] = useState(0);
  const [answers, setAnswers] = useState([] as Number[]);

  function handleQuestionNext(newAnswer: Number) {
    setState("correct_answer");
    console.log(newAnswer);
    setAnswers((ans) => [...ans, newAnswer]);
    console.log(answers);
  }
  function handleCorrectAnswerNext() {
    if (questionIdx + 1 < data.length) {
      setState("question");
      setQuestionIdx((i) => i + 1);
    } else {
      setState("result");
      setQuestionIdx(0);
    }
  }

  if (!data) {
    return (
      <PageTemplate>
        <div className={styles.contents}>Loading...</div>
      </PageTemplate>
    );
  }

  if (state === "question") {
    return (
      <PageTemplate>
        <div className={styles.contents}>
          <Question
            questionIdx={questionIdx}
            nQuestions={data.length}
            question={data[questionIdx]}
            handleNext={handleQuestionNext}
          />
        </div>
      </PageTemplate>
    );
  }
  if (state === "correct_answer") {
    return (
      <PageTemplate>
        <div className={styles.contents}>
          <CorrectAnswer
            questionIdx={questionIdx}
            nQuestions={data.length}
            question={data[questionIdx]}
            selected={answers[answers.length - 1]}
            handleNext={handleCorrectAnswerNext}
          />
        </div>
      </PageTemplate>
    );
  }
  if (state === "result") {
    return (
      <PageTemplate>
        <div className={styles.contents}>
          <Result questions={data} answers={answers} />
        </div>
      </PageTemplate>
    );
  }

  return (
    <PageTemplate>
      <div className={styles.contents}>エラー</div>
    </PageTemplate>
  );
}
