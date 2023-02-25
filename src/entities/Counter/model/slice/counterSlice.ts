import { createSlice } from '@reduxjs/toolkit';
import { CounterSchema } from '../types/CounterSchema';

const initialState: CounterSchema = {
  value: 0,
};

export const counterSlice = createSlice({
  initialState,
  name: 'counter',
  reducers: {
    decrement: (state) => {
      state.value -= 1;
    },
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { actions: counterActions, reducer: counterReducer } = counterSlice;
