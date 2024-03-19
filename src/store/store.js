import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer  from '../store/slices/authSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
})