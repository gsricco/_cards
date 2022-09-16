import { RequestStatus } from 'common/enums/requestStatus';
import { AppRootState } from 'common/types/AppTypes';
import { Nullable } from 'common/types/Nullable';

export const getIsInitialized = (state: AppRootState): boolean => state.app.isInitialized;
export const getStatus = (state: AppRootState): RequestStatus => state.app.status;
export const getError = (state: AppRootState): Nullable<string> => state.app.error;
export const getInfo = (state: AppRootState): Nullable<string> => state.app.info;
