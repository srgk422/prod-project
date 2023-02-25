import { CounterSchema } from '../types/CounterSchema';
import { counterActions, counterReducer } from './counterSlice';

describe('counterSlice.test', () => {
  const state: CounterSchema = { value: 10 };

  test('do decrement', () => {
    expect(
      counterReducer(state, counterActions.decrement()),
    ).toEqual({ value: 9 });
  });
  test('do increment', () => {
    expect(
      counterReducer(state, counterActions.increment()),
    ).toEqual({ value: 11 });
  });
  test('get initial state', () => {
    // initialState = {value: 0};
    expect(
      counterReducer(undefined, counterActions.increment()),
    ).toEqual({ value: 1 });
  });
});
