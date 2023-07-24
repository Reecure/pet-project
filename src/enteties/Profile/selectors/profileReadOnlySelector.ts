import { RootState } from '@/app/providers/ReduxProvider/config/store';

export const profileReadOnlySelector = (state: RootState) => state.profileReducer.readonly;
