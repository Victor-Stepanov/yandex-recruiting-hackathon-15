import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { fetchCandidatesForBoard } from './thunk/fetchCandidatesForBoard';

import { patchCandidateInfo } from './thunk/patchCandidateInfo';

import { Board, CandidateProps } from '../../../interfaces/board.interface';
import { Status } from '../../../interfaces/status';

interface InitialState {
  board: ReadonlyArray<Board>;
  status: Status;
}

const initialState: InitialState = {
  board: [],
  status: Status.Idle,
};

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCandidatesForBoard.pending, (state) => {
        state.status = Status.Pending;
      })
      .addCase(fetchCandidatesForBoard.fulfilled, (state, action) => {
        state.status = Status.Success;
        state.board = action.payload;
      })
      .addCase(fetchCandidatesForBoard.rejected, (state) => {
        state.status = Status.Failed;
      })
      .addCase(patchCandidateInfo.pending, (state) => {
        state.status = Status.Pending;
      })
      .addCase(
        patchCandidateInfo.fulfilled,
        (state, action: PayloadAction<CandidateProps>) => {
          state.status = Status.Success;
          const { id, kanban_position } = action.payload;
          const updatedBoard = state.board.map((items) => {
            const updatedCandidates = items.candidates.map((candidate) => {
              if (candidate.id === id) {
                return { ...candidate, kanban_position: kanban_position };
              } else {
                return candidate;
              }
            });
            return { ...items, candidates: updatedCandidates };
          });
          state.board = updatedBoard;
        }
      )
      .addCase(patchCandidateInfo.rejected, (state) => {
        state.status = Status.Failed;
      });
  },
});

export const boardReducer = boardSlice.reducer;
