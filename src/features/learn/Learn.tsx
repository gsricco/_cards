import { FC, useEffect, useState } from 'react';

import Button from '@mui/material/Button';

import { getPackCards } from '../cards';
import { setLearnGrade } from '../cards/cards-reducer';

import { LearnList } from './LearnList/LearnList';

import { BackToPackList, CardsType } from 'common';
import { getCard } from 'common/utils/get-card-utils';
import { useAppDispatch, useAppSelector } from 'hooks';

export const Learn: FC = () => {
  const dispatch = useAppDispatch();

  const cards = useAppSelector(getPackCards);

  const [isChecked, setIsChecked] = useState(false);
  const [first, setFirst] = useState(true);
  const [grade, setGrade] = useState(1);
  const [card, setCard] = useState<CardsType>(getCard(cards));

  useEffect(() => {
    if (first) {
      dispatch(setLearnGrade({ card_id: card._id, grade: 1 }));
      setFirst(false);
    }
  }, [first]);

  const onNext = (): void => {
    setIsChecked(false);
    dispatch(setLearnGrade({ card_id: card._id, grade }));

    if (cards.length > 0) {
      setCard(getCard(cards));
    }
  };

  return (
    <div style={{ marginTop: '150px' }}>
      <BackToPackList />
      <div>
        LearnPage
        <div>{card.question}</div>
        <div>
          {!isChecked && <Button onClick={() => setIsChecked(true)}>check</Button>}
        </div>
        {isChecked && (
          <>
            <div>{card.answer}</div>

            <LearnList setGrade={setGrade} />

            <div>
              <Button onClick={onNext}>next</Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
