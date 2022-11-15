import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rockets/rocketSlice';

const store = configureStore({
  reducer: {
    rocketReducer,
  },
});

export default store;
