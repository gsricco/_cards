import { FC } from 'react';

import styles from '../Packs.module.scss';

import FilterRemoveBtn from 'assets/images/FilterRemoveBtn.svg';
import { FilteredButton, Modal, NumberOfCards, Search, TableButton } from 'common';
import { EMPTY_STRING } from 'common/constants/constants';
import { addPacks, getPackQueryParams, getPacks, PacksModal } from 'features';
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
    window.location.reload();
  };

  return (
    <>
      <div>
        <TableButton
          title="Packs list"
          nameButton="Add new pack"
          onAddClick={openModal}
        />
        <PacksModal
          packTitle={Modal.ADD_NEW_PACK}
          onClick={onAddNewPackClick}
          open={open}
          closeModal={closeModal}
          name={EMPTY_STRING}
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
