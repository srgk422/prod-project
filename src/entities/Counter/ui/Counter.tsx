/* eslint-disable i18next/no-literal-string */
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector((state: StateSchema) => getCounterValue(state));
  // const counterValue = useSelector((state: StateSchema) => state.counter.value);

  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testId="counter-title">{`counterValue ${counterValue}`}</h1>
      <Button data-testId="increment-button" onClick={increment}>
        `increment`
      </Button>
      <Button data-testId="decrement-button" onClick={decrement}>
        `decrement`
      </Button>
    </div>
  );
};
