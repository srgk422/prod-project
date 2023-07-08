import { createSlice } from '@reduxjs/toolkit';
import { ProfileSchema } from '../types/profile';

const initialState: ProfileSchema = {
  data: undefined,
  error: undefined,
  isLoading: false,
  readonly: true,
};

export const profileSlice = createSlice({
  initialState,
  name: 'profile',
  reducers: {

  },
});

export const { actions: profileActions, reducer: profileReducer } = profileSlice;
