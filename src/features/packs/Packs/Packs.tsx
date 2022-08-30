import { FC, useEffect } from 'react';

import { Table, TableContainer } from '@mui/material';
import { Navigate } from 'react-router-dom';

import { addPacks, getPacks } from '../packs-reducer';

import styles from './Packs.module.scss';

import { Paginator, Path, TableHeader, TableButton } from 'common';
import { getCardPacksTotalCount, getIsLoggedIn, getPage, PacksTableBody } from 'features';
import { useAppDispatch, useAppSelector } from 'hooks';

export const Packs: FC = () => {
  const dispatch = useAppDispatch();

  const isLoggedIn = useAppSelector(getIsLoggedIn);
  const page = useAppSelector(getPage);
  const cardPacksTotalCount = useAppSelector(getCardPacksTotalCount);

  const packsPerPage = 8;

  useEffect(() => {
    dispatch(getPacks({ page, pageCount: 8 }));
  }, [page, dispatch]);

  if (!isLoggedIn) {
    return <Navigate to={Path.LOGIN} />;
  }

  return (
    <>
      <TableButton title="Packs list" nameButton="Add new pack" onAddClick={addPacks} />
      <div className={styles.container}>
        <TableContainer className={styles.tableContainer}>
          <Table className={styles.table} aria-label="simple table">
            <TableHeader
              firstCell="Name"
              secondCell="Cards"
              thirdCell="Last Updated"
              fourthCell="Created by"
              fifthCell="Actions"
            />
            <PacksTableBody />
          </Table>
        </TableContainer>
        <Paginator
          pageCount={packsPerPage}
          totalElements={cardPacksTotalCount}
          page={page}
        />
      </div>
    </>
  );
};
