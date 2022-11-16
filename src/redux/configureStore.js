import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rockets/rocketSlice';
import missionReducer from './missions/missionSlice'

const store = configureStore({
  reducer: {
    rocketReducer,
    missionReducer,
  },
});

export default store;
