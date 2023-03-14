import { createSlice } from '@reduxjs/toolkit';

import { Register, logIn, logOut, refreshUser, googleAuth } from './operations';

export const initialState = {
  user: {
    email: '',
  },
  error: null,
  isLoading: true,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(Register.fulfilled, state => {})
      .addCase(logIn.pending, state => ({
        ...state,
        isLoggedIn: true,
      }))
      .addCase(logIn.fulfilled, (state, { payload }) => {})
      .addCase(logIn.rejected, state => {})
      .addCase(logOut.fulfilled, state => {})
      .addCase(refreshUser.pending, state => ({
        ...state,
        isLoggedIn: true,
      }))
      .addCase(refreshUser.fulfilled, (state, { payload }) => {})
      .addCase(refreshUser.rejected, state => {})
      .addCase(googleAuth.fulfilled, (state, action) => {}),
});

export const authReducer = authSlice.reducer;
