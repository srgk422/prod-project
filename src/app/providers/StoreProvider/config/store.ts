import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { ReduxStoreWithManager, StateSchema } from '../config/StateSchema';
import { createReducerManager } from './ReducerManager';

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store: ReduxStoreWithManager = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });

  store.reducerManager = reducerManager;

  return store;
}
