import { MAX_GRADE } from 'common/constants/constants';
import { CardsType } from 'common/types/ResponseTypes';

export const getCard = (cards: CardsType[]): CardsType => {
  const sum = cards.reduce(
    (acc, card) => acc + (MAX_GRADE - card.grade) * (MAX_GRADE - card.grade),
    0,
  );
  const rand = Math.random() * sum;
  const res = cards.reduce(
    (acc: { sum: number; id: number }, card, i) => {
      const newSum = acc.sum + (MAX_GRADE - card.grade) * (MAX_GRADE - card.grade);

      return { sum: newSum, id: newSum < rand ? i : acc.id };
    },
    { sum: 0, id: -1 },
  );

  return cards[res.id + 1];
};
