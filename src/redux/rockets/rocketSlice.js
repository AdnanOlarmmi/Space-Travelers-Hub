import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import getRockets from '../../api/getRockets';

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', getRockets);

const rocketSlice = createSlice({
    name: 'rockets',
    initialState: {
        rockets: [],
        status: 'idle',
        error: null     
    },
    extraReducers(builder) {
        builder
        .addCase(fetchRockets.pending, (state) => {
            state.status = 'loading';
        })
        builder.addCase(fetchRockets.fulfilled, (state, action) => {
            state.status = 'succeeded'
            const rocketsArr = [];
            action.payload.map((rocket) =>
             rocketsArr.push({
                id: rocket.id,
                name: rocket.rocket_name,
                description: rocket.description,
                status: rocket.active,
                image: rocket.flickr_images[1]
             }));
            state.rockets = rocketsArr;
            
         })
    }
})

export default rocketSlice.reducer;