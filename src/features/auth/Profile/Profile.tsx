import { ChangeEvent, FC, useState } from 'react';

import { Button, Container, Grid, IconButton, Paper, Typography } from '@mui/material';
import { Navigate } from 'react-router-dom';

import { logout } from '../authReduser';
import { getAvatar, getEmail, getIsLoggedIn, getName } from '../authSelectors';

import styles from './Profile.module.scss';

import iconLogout from 'assets/images/logout.svg';
import photoIconImage from 'assets/images/PhotoIconPhotos.png';
import defaultAva from 'assets/images/UserAvatar.png';
import { BackToPackList } from 'common/components/BackToPacksList/BackToPackList';
import { EditableSpan } from 'common/components/EditableSpan/EditableSpan';
import { Path } from 'common/enums/path';
import { uploadHandler } from 'common/utils/convertPhoto';
import { updateUser } from 'features/forgot/forgotReducer';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';

export const Profile: FC = () => {
  const dispatch = useAppDispatch();

  const isLoggedIn = useAppSelector(getIsLoggedIn);
  const email = useAppSelector(getEmail);
  const name = useAppSelector(getName);
  const userAvatar = useAppSelector(getAvatar);

  const [ava, setAva] = useState<string>(userAvatar);

  const fileCallback = (avatar: string): void => {
    setAva(avatar);
    dispatch(updateUser({ name, avatar }));
  };

  const onUploadPicture = (event: ChangeEvent<HTMLInputElement>): void => {
    uploadHandler(event, fileCallback);
  };

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
            <div>
              <img
                className={styles.gridItemImage}
                src={ava || defaultAva}
                alt="avatar"
              />
              <label>
                <input
                  type="file"
                  onChange={onUploadPicture}
                  style={{ display: 'none' }}
                />
                <IconButton component="span">
                  <img
                    className={styles.gridItemIcon}
                    alt="photoIcon"
                    src={photoIconImage}
                  />
                </IconButton>
              </label>
            </div>
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
