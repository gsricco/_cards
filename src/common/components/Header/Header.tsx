import { FC } from 'react';

import { LinearProgress } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useLocation, useNavigate } from 'react-router-dom';

import styles from './Header.module.scss';

import { getStatus } from 'app';
import logo from 'assets/images/cardLogo.png';
import UserAvatar from 'assets/images/UserAvatar.png';
import { Path, RequestStatus } from 'common';
import { getName } from 'features';
import { useAppSelector } from 'hooks';

export const Header: FC = () => {
  const status = useAppSelector<RequestStatus>(getStatus);
  const name = useAppSelector<string>(getName);

  const location = useLocation();
  const navigate = useNavigate();

  const onSignInButtonClick = (): void => {
    navigate(Path.LOGIN);
  };

  return (
    <AppBar className={styles.headerContainer}>
      <Toolbar className={styles.headerContainerMain}>
        <Typography className={styles.headerLogo} component="div">
          <img className={styles.headerIcon} src={logo} alt="logo" />
        </Typography>
        {location.hash === '#/profile' ? (
          <Typography className={styles.headerUserInfo} component="div">
            <span className={styles.headerUserName}>{name}</span>
            <img className={styles.headerUserAvatar} src={UserAvatar} alt="logo" />
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
