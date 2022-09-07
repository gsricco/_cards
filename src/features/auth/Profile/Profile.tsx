import { FC } from 'react';

import { Button, Container, Grid, Paper, Typography } from '@mui/material';
import { Navigate } from 'react-router-dom';

import styles from './Profile.module.scss';

import iconLogout from 'assets/images/logout.svg';
import photoIconImage from 'assets/images/PhotoIconPhotos.png';
import profileUserImage from 'assets/images/UserAvatar.png';
import { EditableSpan, Path, BackToPackList } from 'common';
import { getEmail, getIsLoggedIn, logout } from 'features';
import { useAppDispatch, useAppSelector } from 'hooks';

export const Profile: FC = () => {
  const dispatch = useAppDispatch();

  const isLoggedIn = useAppSelector(getIsLoggedIn);
  const email = useAppSelector(getEmail);

  const onLogoutClick = (): void => {
    dispatch(logout());
  };

  if (!isLoggedIn) {
    return <Navigate to={Path.LOGIN} />;
  }

  return (
    <Container maxWidth="md" className={styles.container}>
      <BackToPackList />

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
            className={styles.gridItemButton}
          >
            <img src={iconLogout} alt="icon" />
            Log out
          </Button>
        </Paper>
      </Grid>
    </Container>
  );
};
