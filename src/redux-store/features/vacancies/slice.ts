import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';

import { fetchVacancies } from './thunk/fetchVacancies';

import { Status } from '../../../interfaces/status';
import { Vacancy } from '../../../interfaces/vacancy.interface';

const vacanciesEntityAdapter = createEntityAdapter<Vacancy>();

const vacanciesSlice = createSlice({
  name: 'vacancyList',
  initialState: vacanciesEntityAdapter.getInitialState({
    status: Status.Idle,
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVacancies.pending, (state) => {
        state.status = Status.Pending;
      })
      .addCase(
        fetchVacancies.fulfilled,
        (state, action: PayloadAction<Vacancy[]>) => {
          state.status = Status.Success;
          vacanciesEntityAdapter.setAll(state, action.payload);
        }
      )
      .addCase(fetchVacancies.rejected, (state) => {
        state.status = Status.Failed;
      });
  },
});

export const vacanciesReducer = vacanciesSlice.reducer;
export const { selectAll, selectById } = vacanciesEntityAdapter.getSelectors();
