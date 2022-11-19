/*eslint-disable*/
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getRockets from '../../api/getRockets';

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', getRockets);

const rocketSlice = createSlice({
  name: 'rockets',
  initialState: {
    rockets: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    reserveRocket: (state, action) => {
      const newState = state.rockets.map(rocket => {
        if(rocket.id !== action.payload) 
            return rocket;
        return { ...rocket, reserved: !rocket.reserved };
    });
    state.rockets = newState;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchRockets.pending, (state) => {
        state.status = 'loading';
      });
    builder.addCase(fetchRockets.fulfilled, (state, action) => {
      state.status = 'succeeded';
      const rocketsArr = [];
      action.payload.map((rocket) => rocketsArr.push({
        id: rocket.id,
        name: rocket.rocket_name,
        description: rocket.description,
        image: rocket.flickr_images[1],
        reserved: false,
      }));
      state.rockets = rocketsArr;
    });
  },
});


export const { reserveRocket } = rocketSlice.actions;
export default rocketSlice.reducer;
