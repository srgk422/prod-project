import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/consts/localeStorage';

interface LoginByUserNameProps {
  username: string;
  password: string;
}

export const loginByUserName = createAsyncThunk<User, LoginByUserNameProps, ThunkConfig<string>>(
  'login/loginByUserName',
  async (authData, thunkApi) => {
    const { extra, dispatch, rejectWithValue } = thunkApi;

    try {
      const response = await extra.api.post<User>('/login', authData);
      if (!response.data) throw new Error();

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      dispatch(userActions.setAuthData(response.data));

      // возвращаемое значение доступно в loginSlice > extraReducers > loginByUsername.fulfilled > action.payload
      return response.data;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      // возвращаемое значение доступно в loginSlice > extraReducers > loginByUsername.rejected > action.payload
      return rejectWithValue('error');
    }
  },
);
