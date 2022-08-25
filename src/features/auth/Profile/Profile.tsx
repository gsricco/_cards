import { FC } from 'react';

import LogoutIcon from '@mui/icons-material/Logout';
import { Button, Container, Grid, Paper, Typography } from '@mui/material';
import { Navigate } from 'react-router-dom';

import styles from './Profile.module.scss';

import arrowImage from 'assets/images/Arrow.png';
import photoIconImage from 'assets/images/PhotoIconPhotos.png';
import profileUserImage from 'assets/images/UserAvatar.png';
import { EditableSpan, Path } from 'common';
import { getEmail, getIsLoggedIn, logout } from 'features';
import { useAppDispatch, useAppSelector } from 'hooks';

export const Profile: FC = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector<boolean>(getIsLoggedIn);
  const email = useAppSelector<string>(getEmail);

  const onLogoutClick = (): void => {
    dispatch(logout());
  };

  if (!isLoggedIn) {
    return <Navigate to={Path.LOGIN} />;
  }

  return (
    <>
      <div className={styles.profileReturnBack}>
        <img alt="arrow" src={arrowImage} className={styles.profileReturnBackImg} />
        <span className={styles.profileReturnBackText}> Back to Packs List</span>
      </div>
      <Container maxWidth="md" className={styles.container}>
        <Grid item className={styles.gridItem}>
          <Paper className={styles.gridItemPaper}>
            <Typography className={styles.gridItemHeader} variant="h2" component="h2">
              Personal Information
            </Typography>

            <Typography className={styles.gridItemImageContainer}>
              <img
                className={styles.gridItemImage}
                alt="checkEmailImage"
                src={profileUserImage}
              />
              <img className={styles.gridItemIcon} alt="photoIcon" src={photoIconImage} />
            </Typography>

            <EditableSpan />
            <Typography
              gutterBottom
              variant="subtitle1"
              className={styles.gridItemDescription}
            >
              {email}
            </Typography>

            <Button
              onClick={onLogoutClick}
              variant="outlined"
              startIcon={<LogoutIcon />}
              className={styles.gridItemButton}
            >
              Log out
            </Button>
          </Paper>
        </Grid>
      </Container>
    </>
  );
};
