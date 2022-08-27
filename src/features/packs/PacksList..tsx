import React, { FC } from 'react';

import {
  BorderColorOutlined,
  DeleteForeverOutlined,
  SchoolOutlined,
} from '@mui/icons-material';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableSortLabel,
  IconButton,
} from '@mui/material';

import { PaginationComponent } from '../../common';

import styles from './PacksList.module.scss';

const arr = [
  { name: 'Pack Name', Cards: '1', Updated: '18.03.2022', Created: 'Dev2' },
  { name: 'Name', Cards: '4', Updated: '12.03.2022', Created: 'Dev2' },
  { name: 'english', Cards: '2', Updated: '18.03.2021', Created: 'Dev2' },
  { name: 'Pack 1', Cards: '23', Updated: '18.04.2022', Created: 'Dev2' },
  { name: 'dfdsf', Cards: '12', Updated: '18.03.2022', Created: 'Dev2' },
  { name: 'JS', Cards: '2', Updated: '18.03.2021', Created: 'Dev2' },
  { name: 'Pack 2', Cards: '23', Updated: '18.04.2022', Created: 'Dev2' },
  { name: 'React', Cards: '12', Updated: '18.03.2022', Created: 'Dev2' },
];

export const PacksList: FC = () => {
  return (
    <>
      <TableContainer className={styles.tableContainer}>
        <Table className={styles.table} aria-label="simple table">
          <TableHead className={styles.tableHead}>
            <TableRow>
              <TableCell sx={{ width: '186px' }}>Name</TableCell>
              <TableCell sx={{ width: '222px' }}>Cards</TableCell>
              <TableCell>
                <TableSortLabel sx={{ width: '153px' }} active direction="desc">
                  Last Updated
                </TableSortLabel>
              </TableCell>
              <TableCell>Created by</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {arr.map(a => (
              <TableRow sx={{ height: '48px' }} key={a.name}>
                <TableCell className={styles.tableCellBody}>{a.name}</TableCell>
                <TableCell className={styles.tableCellBody}>{a.Cards}</TableCell>
                <TableCell className={styles.tableCellBody}>{a.Updated}</TableCell>
                <TableCell className={styles.tableCellBody}>{a.Created}</TableCell>
                <TableCell sx={{ p: '5px 16px', width: '130px' }}>
                  <IconButton>
                    <SchoolOutlined />
                  </IconButton>
                  <IconButton>
                    <BorderColorOutlined />
                  </IconButton>
                  <IconButton>
                    <DeleteForeverOutlined />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <PaginationComponent />
    </>
  );
};
