import { FC, useState } from 'react';

import Button from '@mui/material/Button';

import styles from './Learn.module.scss';
import { LearnList } from './LearnList';

import { BackToPackList, getCard } from 'common';
import { getPackCards, setLearnGrade } from 'features';
import { useAppDispatch, usePackName, useAppSelector } from 'hooks';

export const Learn: FC = () => {
  const dispatch = useAppDispatch();

  const cards = useAppSelector(getPackCards);

  const [isChecked, setIsChecked] = useState(false);
  const [grade, setGrade] = useState(1);

  const { name, setCard, card } = usePackName();

  const onNext = (): void => {
    setIsChecked(false);
    dispatch(setLearnGrade({ card_id: card._id, grade }));

    if (cards.length > 0) {
      setCard(getCard(cards));
    }
  };

  return (
    <div className={styles.container}>
      <BackToPackList />
      <div className={styles.learnPage}>
        <div className={styles.learnPackName}>Learn “{name}”</div>
        <div className={styles.tableContainer}>
          <div className={styles.learnQuestion}>
            <b>Question: </b>
            <span>{card.question}</span>
          </div>
          <div className={styles.numberAttempts}>
            Количество попыток ответов на вопрос: <b>10</b>
          </div>
          <div>
            {!isChecked && (
              <Button
                className={styles.showButton}
                onClick={() => setIsChecked(true)}
                variant="contained"
              >
                Show answer
              </Button>
            )}
          </div>
          {isChecked && (
            <>
              <div className={styles.learnAnswer}>
                <b>Answer: </b>
                {card.answer}
              </div>

              <LearnList setGrade={setGrade} />

              <div>
                <Button
                  className={styles.showButton}
                  onClick={onNext}
                  variant="contained"
                >
                  Next
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
