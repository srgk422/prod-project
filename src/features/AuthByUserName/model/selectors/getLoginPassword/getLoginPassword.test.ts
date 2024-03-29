import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('test getLoginPassword', () => {
  test('should return 123', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: '123',
      },
    };

    expect(getLoginPassword(state as StateSchema)).toEqual('123');
  });
  test('should return empty string', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginPassword(state as StateSchema)).toEqual('');
  });
});
