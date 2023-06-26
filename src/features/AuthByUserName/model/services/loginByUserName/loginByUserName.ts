import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/consts/localeStorage';

interface LoginByUserNameProps {
  username: string;
  password: string;
}

export const loginByUserName = createAsyncThunk<User, LoginByUserNameProps, {rejectValue: string}>(
  'login/loginByUserName',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/login', authData);
      if (!response.data) throw new Error();

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      thunkAPI.dispatch(userActions.setAuthData(response.data));

      // возвращаемое значение доступно в loginSlice > extraReducers > loginByUsername.fulfilled > action.payload
      return response.data;
    } catch (error) {
      console.log(error);
      // возвращаемое значение доступно в loginSlice > extraReducers > loginByUsername.rejected > action.payload
      return thunkAPI.rejectWithValue('error');
    }
  },
);
