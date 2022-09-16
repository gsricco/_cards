import { FC } from 'react';

import styles from '../Packs.module.scss';

import { getStatus } from 'app/appSelectors';
import FilterRemoveBtn from 'assets/images/FilterRemoveBtn.svg';
import { FilteredButton } from 'common/components/FilteredButton/FilteredButton';
import { NumberOfCards } from 'common/components/NumberOfCards/NumberOfCards';
import { Search } from 'common/components/Search/Search';
import { TableButton } from 'common/components/TableButton/TableButton';
import { EMPTY_STRING } from 'common/constants/constants';
import { Modal } from 'common/enums/modal';
import { RequestStatus } from 'common/enums/requestStatus';
import { PacksModal } from 'features/modals/PacksModal/PacksModal';
import { addPacks, getPacks } from 'features/packs/packsReducer';
import { getPackQueryParams } from 'features/packs/packsSelectors';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { useModal } from 'hooks/useModal';

export const PacksSettings: FC = () => {
  const dispatch = useAppDispatch();

  const queryParams = useAppSelector(getPackQueryParams);
  const status = useAppSelector(getStatus);

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
        <button
          className={styles.buttonRemoveBtn}
          type="button"
          onClick={resetFilter}
          disabled={status === RequestStatus.LOADING}
        >
          <img
            className={
              status === RequestStatus.LOADING
                ? styles.filterRemoveBtnDisabled
                : styles.filterRemoveBtn
            }
            src={FilterRemoveBtn}
            alt="delete filter button"
          />
        </button>
      </div>
    </>
  );
};
