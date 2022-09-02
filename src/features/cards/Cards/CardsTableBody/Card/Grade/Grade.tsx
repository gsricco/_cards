import React, { FC } from 'react';

import starBorder from 'assets/images/Star-border.svg';
import starHalf from 'assets/images/Star-half.svg';
import starFull from 'assets/images/Star.svg';

type Props = {
  grade: number;
};

export const Grade: FC<Props> = ({ grade }) => {
  const star = starBorder;
  const stars = [star, star, star, star, star];
  // eslint-disable-next-line no-magic-numbers
  const sur = grade - Math.trunc(grade) >= 0.5 ? 0.5 : 0;

  let i = 0;

  // eslint-disable-next-line no-magic-numbers,no-plusplus
  for (let k = 0; k < 5; k++) {
    if (grade <= 0) stars[k] = starBorder;
    // eslint-disable-next-line no-magic-numbers
    else if (sur === 0.5 || sur === 0) {
      // eslint-disable-next-line no-plusplus
      i++;
      if (i <= Math.trunc(grade)) {
        stars[k] = starFull;
        // eslint-disable-next-line no-magic-numbers
      } else if (sur === 0.5) {
        if (i === 1 + Math.trunc(grade)) stars[k] = starHalf;
      } else stars[k] = starBorder;
    } else stars[k] = starBorder;

    if (stars[k] === '') stars[k] = starBorder;
  }

  return (
    <div>
      {grade}
      <img src={stars[0]} alt="rating" />
      <img src={stars[1]} alt="rating" />
      {/* eslint-disable-next-line no-magic-numbers */}
      <img src={stars[2]} alt="rating" />
      {/* eslint-disable-next-line no-magic-numbers */}
      <img src={stars[3]} alt="rating" />
      {/* eslint-disable-next-line no-magic-numbers */}
      <img src={stars[4]} alt="rating" />
    </div>
  );
};
