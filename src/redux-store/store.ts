import { configureStore } from '@reduxjs/toolkit';
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from 'react-redux/es/exports';

import { boardReducer } from './features/board/slice';
import { vacanciesReducer } from './features/vacancies/slice';

export const store = configureStore({
  reducer: {
    board: boardReducer,
    vacancies: vacanciesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
