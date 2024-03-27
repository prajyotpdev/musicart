import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer  from '../store/slices/authSlice';
import feedReducer from "./slices/feedSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    feed: feedReducer,
  },
})