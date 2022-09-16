import { ChangeEvent, FC, useState } from 'react';

import { Button, Container, Grid, IconButton, Paper, Typography } from '@mui/material';
import { Navigate } from 'react-router-dom';

import { updateAvatarUser } from '../../forgot/forgotReducer';

import styles from './Profile.module.scss';

import iconLogout from 'assets/images/logout.svg';
import photoIconImage from 'assets/images/PhotoIconPhotos.png';
import defaultAva from 'assets/images/UserAvatar.png';
import { BackToPackList, EditableSpan, Path } from 'common';
import { getEmail, getIsLoggedIn, getName, logout } from 'features';
import { useAppDispatch, useAppSelector } from 'hooks';

export const Profile: FC = () => {
  const dispatch = useAppDispatch();

  const isLoggedIn = useAppSelector(getIsLoggedIn);
  const email = useAppSelector(getEmail);
  const name = useAppSelector(getName);
  const userAvatar = useAppSelector(state => state.forgot.user.avatar);
  const [ava, setAva] = useState(userAvatar);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0];

      console.log(file.name);
      // eslint-disable-next-line no-magic-numbers
      if (file.size < 4000000) {
        convertFileToBase64(file, (file64: string) => {
          setAva(file64);
          dispatch(updateAvatarUser({ name, avatar: file64 }));
        });
      } else {
        console.error('Error: ', 'Файл слишком большого размера');
      }
    }
  };

  const convertFileToBase64 = (file: File, callBack: (value: string) => void): void => {
    const reader = new FileReader();

    reader.onloadend = () => {
      const file64 = reader.result as string;

      callBack(file64);
    };
    reader.readAsDataURL(file);
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
                <input type="file" onChange={uploadHandler} style={{ display: 'none' }} />
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
