import { FC } from 'react';

import { LinearProgress } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

import { Select } from '../Select/Select';

import styles from './Header.module.scss';

import { getStatus } from 'app/appSelectors';
import logo from 'assets/images/cardLogo.png';
import UserAvatar from 'assets/images/UserAvatar.png';
import { Path } from 'common/enums/path';
import { RequestStatus } from 'common/enums/requestStatus';
import { getAvatar, getIsLoggedIn, getName } from 'features/auth/authSelectors';
import { useAppSelector } from 'hooks/redux-hooks';
import { useShow } from 'hooks/useShow';

export const Header: FC = () => {
  const { show, onButtonIconClick } = useShow();

  const navigate = useNavigate();

  const status = useAppSelector(getStatus);
  const name = useAppSelector(getName);
  const isLoggedIn = useAppSelector(getIsLoggedIn);
  const avatar = useAppSelector(getAvatar);

  const onSignInButtonClick = (): void => {
    navigate(Path.LOGIN);
  };

  return (
    <AppBar className={styles.headerContainer}>
      <Toolbar className={styles.headerContainerMain}>
        <Typography className={styles.headerLogo} component="div">
          <img className={styles.headerIcon} src={logo} alt="logo" />
        </Typography>

        {isLoggedIn ? (
          <Typography
            className={styles.headerUserInfo}
            component="div"
            onClick={onButtonIconClick}
          >
            <span className={styles.headerUserName}>{name}</span>
            <div className={styles.wrap}>
              <img
                className={styles.headerUserAvatar}
                src={avatar || UserAvatar}
                alt="logo"
              />
              {show && <Select stylesRules={styles.customSelect} />}
            </div>
          </Typography>
        ) : (
          <Button
            onClick={onSignInButtonClick}
            variant="contained"
            className={styles.headerButton}
          >
            Sign in
          </Button>
        )}
      </Toolbar>

      <div className={styles.headerLoader}>
        {status === RequestStatus.LOADING && <LinearProgress />}
      </div>
    </AppBar>
  );
};
