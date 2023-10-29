import { createAsyncThunk } from '@reduxjs/toolkit';

import { Vacancy } from '../../../../interfaces/vacancy.interface';

const token = '';

export const fetchVacancies = createAsyncThunk(
  'vacancyList/fetchVacancies',
  async (_, { rejectWithValue }) => {
    const response = await fetch('http://130.193.36.223/api/v1/vacancies', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      return rejectWithValue(response.statusText);
    }
    const vacancies: Vacancy[] = await response.json();

    return vacancies;
  }
);
