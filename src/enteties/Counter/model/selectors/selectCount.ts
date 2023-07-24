import { RootState } from '@/app/providers/ReduxProvider/config/store';

export const selectCount = (state: RootState) => state.counter.count;
