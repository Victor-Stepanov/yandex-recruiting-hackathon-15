import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';

import { fetchVacancy } from './thunk/fetchVacancy';

import { Status } from '../../../interfaces/status';
import { Vacancy } from '../../../interfaces/vacancy.interface';

const vacancyEntityAdapter = createEntityAdapter<Vacancy>();

const vacancySlice = createSlice({
  name: 'vacancyList',
  initialState: vacancyEntityAdapter.getInitialState({
    status: Status.Idle,
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVacancy.pending, (state) => {
        state.status = Status.Pending;
      })
      .addCase(
        fetchVacancy.fulfilled,
        (state, action: PayloadAction<Vacancy>) => {
          state.status = Status.Success;
          vacancyEntityAdapter.setOne(state, action.payload);
        }
      )
      .addCase(fetchVacancy.rejected, (state) => {
        state.status = Status.Failed;
      });
  },
});

export const vacancyReducer = vacancySlice.reducer;
export const { selectById } = vacancyEntityAdapter.getSelectors();
