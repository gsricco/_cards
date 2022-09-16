import { FC } from 'react';

import { Button, Container, Grid, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import styles from './CheckEmail.module.scss';

import checkEmailImage from 'assets/images/CheckEmail.png';
import { Path } from 'common/enums/path';

export const CheckEmail: FC = () => {
  return (
    <Container maxWidth="md" className={styles.container}>
      <Grid item className={styles.gridItem}>
        <Paper className={styles.gridItemPaper}>
          <Typography className={styles.gridItemHeader} variant="h2" component="h2">
            Check Email
          </Typography>
          <Typography className={styles.gridItemImageContainer}>
            <img
              className={styles.gridItemImage}
              alt="checkEmailImage"
              src={checkEmailImage}
            />
          </Typography>
          <Typography
            gutterBottom
            variant="subtitle1"
            className={styles.gridItemDescription}
          >
            We’ve sent an Email with instructions
            <br />
            to example@mail.com
          </Typography>
          <Link to={Path.LOGIN} className={styles.gridItemButtonContainer}>
            <Button variant="contained" className={styles.gridItemButton}>
              Back to login
            </Button>
          </Link>
        </Paper>
      </Grid>
    </Container>
  );
};
