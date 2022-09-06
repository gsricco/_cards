import React, { FC, useState } from 'react';

import {
  Button,
  FormControl,
  IconButton,
  TableCell,
  TableRow,
  TextField,
} from '@mui/material';
import { useFormik } from 'formik';

import styles from '../../Cards.module.scss';

import { Grade } from './Grade/Grade';

import DeleteICon from 'assets/images/Delete.svg';
import EditIcon from 'assets/images/Edit.svg';
import { changeCard, deleteCard, getCardUserId, getId } from 'features';
import { CardsModal } from 'features/modals';
import { useAppDispatch, useAppSelector } from 'hooks';

type Props = {
  question: string;
  answer: string;
  updated: string;
  grade: number;
  id: string;
};

export const Card: FC<Props> = ({ id, question, answer, updated, grade }) => {
  const dispatch = useAppDispatch();

  const packUserId = useAppSelector(getCardUserId);
  const userId = useAppSelector(getId);

  const [openModal, setOpenModal] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const handleOpen = (): void => setOpenModal(true);
  const handleClose = (): void => setOpenModal(false);
  const handleOpenDelete = (): void => setOpenModalDelete(true);
  const handleCloseDelete = (): void => setOpenModalDelete(false);

  const onDeleteCardClick = (): void => {
    handleOpenDelete();
    // dispatch(deleteCard(id));
  };

  const formik = useFormik({
    initialValues: {
      question,
      answer,
    },
    onSubmit: values => {
      dispatch(changeCard({ ...values, _id: id }));
      formik.resetForm();
      handleClose();
      handleCloseDelete();
    },
  });

  return (
    <>
      <TableRow sx={{ height: '48px' }}>
        <TableCell className={styles.tableCellBody}>{question}</TableCell>
        <TableCell className={styles.tableCellBody}>{answer}</TableCell>
        <TableCell className={styles.tableCellBody}>{updated}</TableCell>
        <TableCell className={styles.tableCellBody}>
          <Grade grade={grade} />
        </TableCell>
        <TableCell>
          {packUserId === userId && (
            <IconButton onClick={handleOpen}>
              <img alt="Edit Button" src={EditIcon} />
            </IconButton>
          )}

          {packUserId === userId && (
            <IconButton onClick={onDeleteCardClick}>
              <img alt="Delete Button" src={DeleteICon} />
            </IconButton>
          )}
        </TableCell>
      </TableRow>
      <CardsModal handleClose={handleClose} open={openModal} formik={formik}>
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
      <CardsModal handleClose={handleCloseDelete} open={openModalDelete} formik={formik}>
        <div>Do you really want to remove Card Name? All cards will be deleted.</div>
        <Button onClick={handleCloseDelete}>Cancel</Button>
        <Button onClick={() => dispatch(deleteCard(id))}>Delete</Button>
      </CardsModal>
    </>
  );
};
