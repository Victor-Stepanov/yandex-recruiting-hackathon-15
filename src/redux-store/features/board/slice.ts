import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { CandidateProps } from '../../../interfaces/vacancy.interface';

interface CandidatesState {
  candidates: CandidateProps[];
}

const initialState: CandidatesState = {
  candidates: [],
};

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    setCandidates: (state, action) => {
      state.candidates = action.payload;
    },
    moveCandidate: (
      state,
      action: PayloadAction<{ id: string; position: string; date: Date }>
    ) => {
      const { id, position, date } = action.payload;
      const candidate = state.candidates.find((item) => item.id === id);
      if (candidate) {
        candidate.kanban_position = position;
        candidate.updated_at = date;
      }
    },
  },
});

export const { setCandidates, moveCandidate } = boardSlice.actions;
export const boardReducer = boardSlice.reducer;
