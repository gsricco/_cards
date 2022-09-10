import { Dispatch, SetStateAction, useState } from 'react';

import { useAppSelector } from './redux-hooks';

import { CardsType, getCard } from 'common';
import { getCardPacks, getPackCards } from 'features';

interface ReturnType {
  name: string;
  card: CardsType;
  setCard: Dispatch<SetStateAction<CardsType>>;
}

export const usePackName = (): ReturnType => {
  const packs = useAppSelector(getCardPacks);
  const cards = useAppSelector(getPackCards);

  const [card, setCard] = useState<CardsType>(getCard(cards));

  const { name } = packs.filter(pack => pack._id === card.cardsPack_id)[0];

  return {
    name,
    card,
    setCard,
  };
};
