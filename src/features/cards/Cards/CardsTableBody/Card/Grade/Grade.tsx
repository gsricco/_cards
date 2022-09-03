import React, { FC } from 'react';

import starBorder from 'assets/images/Star-border.svg';
import starHalf from 'assets/images/Star-half.svg';
import starFull from 'assets/images/Star.svg';

type Props = {
  grade: number;
};

export const Grade: FC<Props> = ({ grade }) => {
  const star = starBorder;
  let stars = [star, star, star, star, star];
  // eslint-disable-next-line no-magic-numbers
  const sur = grade - Math.trunc(grade) >= 0.5 ? 0.5 : 0;

  stars = stars.map((star, index) => {
    if (grade >= index + 1) return starFull;
    // eslint-disable-next-line no-magic-numbers
    if (sur === 0.5 && Math.trunc(grade) === index) return starHalf;

    return starBorder;
  });

  return (
    <div>
      {grade}
      {stars.map((star, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <img key={index} src={star} alt="rating" />
      ))}
    </div>
  );
};
