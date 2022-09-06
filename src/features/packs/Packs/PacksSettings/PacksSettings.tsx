import { FC } from 'react';

import styles from '../Packs.module.scss';

import FilterRemoveBtn from 'assets/images/FilterRemoveBtn.svg';
import { FilteredButton, Modal, NumberOfCards, Search, TableButton } from 'common';
import { MIN_SELECT_VALUE } from 'common/constants/constants';
import { addPacks, getPacks, setPacksParams, getPackQueryParams } from 'features';
import { AddUpdatePackModal } from 'features/modals/PacksModals/AddUpdatePackModal/AddUpdatePackModal';
import { useAppDispatch, useAppSelector, useModal } from 'hooks';

export const PacksSettings: FC = () => {
  const dispatch = useAppDispatch();

  const queryParams = useAppSelector(getPackQueryParams);
  const { open, openModal, closeModal } = useModal();

  const onAddNewPackClick = async (name: string): Promise<void> => {
    await dispatch(addPacks({ name }));

    closeModal();
  };

  const resetFilter = (): void => {
    dispatch(
      setPacksParams({
        sortPacks: undefined,
        min: 0,
        max: 110,
        page: undefined,
        packName: undefined,
        pageCount: MIN_SELECT_VALUE,
      }),
    );
  };

  return (
    <>
      <div>
        <TableButton
          title="Packs list"
          nameButton="Add new pack"
          onAddClick={openModal}
        />
        <AddUpdatePackModal
          packTitle={Modal.ADD_NEW_PACK}
          onClick={onAddNewPackClick}
          open={open}
          closeModal={closeModal}
        />
      </div>
      <div className={styles.interaction}>
        <Search getData={getPacks} searchParam="packName" queryParams={queryParams} />
        <FilteredButton />
        <NumberOfCards />
        <button className={styles.buttonRemoveBtn} type="button" onClick={resetFilter}>
          <img
            className={styles.filterRemoveBtn}
            src={FilterRemoveBtn}
            alt="delete filter button"
          />
        </button>
      </div>
    </>
  );
};
