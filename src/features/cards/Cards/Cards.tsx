import { ChangeEvent, FC } from 'react';

import { Table, TableContainer, TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { useFormik } from 'formik';
import { Link, Navigate } from 'react-router-dom';

import { CardsModal } from '../../modals';

import styles from './Cards.module.scss';
import { CardsTableBody } from './CardsTableBody';

import arrowImage from 'assets/images/Arrow.png';
import { Paginator, Path, Search, TableButton, TableHeader } from 'common';
import {
  addCard,
  // addCard,
  getCards,
  getCardsPackId,
  getCardsPage,
  getCardsPageCount,
  getCardsQueryParams,
  getCardsTotalCount,
  getCardUserId,
  getId,
  getIsLoggedIn,
  setCardsParams,
} from 'features';
import { useAppDispatch, useAppSelector } from 'hooks';

export const Cards: FC = () => {
  const dispatch = useAppDispatch();

  const isLoggedIn = useAppSelector(getIsLoggedIn);
  const page = useAppSelector(getCardsPage);
  const cardTotalCount = useAppSelector(getCardsTotalCount);
  const queryParams = useAppSelector(getCardsQueryParams);
  const pageCount = useAppSelector(getCardsPageCount);
  const isMyPack = useAppSelector(getId) === useAppSelector(getCardUserId);
  const cardsPack_id = useAppSelector(getCardsPackId);

  const onPageChange = (_: ChangeEvent<unknown>, page: number): void => {
    dispatch(setCardsParams({ ...queryParams, page, cardsPack_id }));
  };

  const onAddNewCardHandle = (): void => {
    // dispatch(addCard());
  };

  const formik = useFormik({
    initialValues: {
      question: '',
      answer: '',
    },
    onSubmit: values => {
      dispatch(addCard({ ...values, cardsPack_id }));
      formik.resetForm();
    },
  });

  const packTitle = isMyPack ? (
    <TableButton
      title="My Pack"
      nameButton="Add new card"
      onAddClick={onAddNewCardHandle}
      menuMyPack
    />
  ) : (
    <TableButton
      title="Friend’s Pack"
      nameButton="Learn to pack"
      onAddClick={onAddNewCardHandle}
    />
  );

  if (!isLoggedIn) {
    return <Navigate to={Path.LOGIN} />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.profileReturnBack}>
        <Link to={Path.PACKS} className={styles.profileLinkContainer}>
          <img alt="arrow" src={arrowImage} className={styles.profileReturnBackImg} />
          <span className={styles.profileReturnBackText}> Back to Packs List</span>
        </Link>
      </div>

      {packTitle}
      <CardsModal formik={formik}>
        <FormControl variant="standard" fullWidth>
          <TextField
            label="Question"
            type="text"
            margin="dense"
            {...formik.getFieldProps('question')}
          />
          <TextField
            label="Answer"
            type="text"
            margin="dense"
            {...formik.getFieldProps('answer')}
          />
        </FormControl>
      </CardsModal>
      <div className={styles.interaction}>
        <Search
          width="100%"
          getData={getCards}
          queryParams={queryParams}
          searchParam="cardQuestion"
        />
      </div>

      <TableContainer className={styles.tableContainer}>
        <Table className={styles.table} aria-label="simple table">
          <TableHeader
            firstCell="Question"
            secondCell="Answer"
            thirdCell="Last Updated"
            fourthCell="Grade"
          />
          <CardsTableBody />
        </Table>
      </TableContainer>

      <Paginator
        pageCount={pageCount}
        totalElements={cardTotalCount}
        page={page}
        setPage={onPageChange}
      />
    </div>
  );
};
