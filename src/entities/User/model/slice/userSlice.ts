import { createSlice } from '@reduxjs/toolkit';
import { UserSchema } from '../types/user';

const initialState: UserSchema = {
  authData: {
    id: '0',
    username: 'asdad',
  },
};

export const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {},
});

export const { actions: userActions, reducer: userReducer } = userSlice;
