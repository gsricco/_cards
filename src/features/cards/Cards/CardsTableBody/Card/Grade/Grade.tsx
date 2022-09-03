import { FC } from 'react';

import starBorder from 'assets/images/Star-border.svg';
import starHalf from 'assets/images/Star-half.svg';
import starFull from 'assets/images/Star.svg';
import { HALF_A_STAR, ID_FOR_STAR } from 'common/constants/constants';

type Props = {
  grade: number;
};

export const Grade: FC<Props> = ({ grade }) => {
  const star = starBorder;
  let stars = [star, star, star, star, star];
  const sur = grade - Math.trunc(grade) >= HALF_A_STAR ? HALF_A_STAR : 0;

  stars = stars.map((star, index) => {
    if (grade >= index + 1) {
      return starFull;
    }
    if (sur === HALF_A_STAR && Math.trunc(grade) === index) {
      return starHalf;
    }

    return starBorder;
  });

  return (
    <div>
      {grade}
      {stars.map(star => (
        <img key={ID_FOR_STAR} src={star} alt="rating" />
      ))}
    </div>
  );
};
