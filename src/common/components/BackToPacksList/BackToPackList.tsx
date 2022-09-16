import { FC } from 'react';

import { Link } from 'react-router-dom';

import styles from './BackToPackList.module.scss';

import arrowImage from 'assets/images/Arrow.png';
import { Path } from 'common/enums/path';

export const BackToPackList: FC = () => {
  return (
    <div className={styles.arrowToBack}>
      <Link to={Path.PACKS}>
        <img alt="arrow" src={arrowImage} />
        <span> Back to Packs List</span>
      </Link>
    </div>
  );
};
