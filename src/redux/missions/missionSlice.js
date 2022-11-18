/*eslint-disable*/
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getMission from '../../api/getMissions';

const GET_MISSIONS = 'space-travelers-hub/missions/GET_MISSIONS';
const JOIN_MISSION = 'space-travelers-hub/missions/JOIN_MISSION';
const initialState = [];

// export const joinMission = (payload) => ({
//   type: JOIN_MISSION,
//   payload,
// });

// const missionsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case GET_MISSIONS:
//       return action.payload;

//     case JOIN_MISSION:
//       return state.map((mission) => {
//         if (mission.id !== action.payload) {
//           return mission;
//         }
//         return { ...mission, reserved: true };
//       });
//     default:
//       return state;
//   }
// };

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
      action.payload.map((mission) => missionsArr.push({
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
