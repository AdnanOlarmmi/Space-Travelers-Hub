/*eslint-disable*/
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getMission from '../../api/getMissions';


export const fetchMissions = createAsyncThunk('missions/fetchMissions', getMission);

const missionSlice = createSlice({
  name: 'missions',
  initialState: {
    missions: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    reserveMission: (state, action) => {
      const newState = state.missions.map(mission => {
        if(mission.id !== action.payload) 
            return mission;
        return { ...mission, status: !mission.status };
    });
    state.missions = newState;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchMissions.pending, (state) => {
        state.status = 'loading';
      });
    builder.addCase(fetchMissions.fulfilled, (state, action) => {
      state.status = 'succeeded';
      const missionsArr = [];
      action.payload.map((rocket) => missionsArr.push({
        id: mission.mission_id,
        name: mission.mission_name,
        description: mission.description,
        status: false
      }));
      state.missions = missionsArr;
    });
  },
});

export const { reserveMission } = missionSlice.actions;

export default missionSlice.reducer;
