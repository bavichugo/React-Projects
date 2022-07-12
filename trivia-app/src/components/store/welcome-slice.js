import { createSlice } from "@reduxjs/toolkit";

const initialState = { firstTimePlaying: true };

const welcomeSlice = createSlice({
    name: "welcome",
    initialState,
    reducers: {
        toggleFirstTimePlaying(state) {
            state.firstTimePlaying = false;
            // Maybe add local storage for this section to store the user state
        }
    }
});

export const welcomeActions = welcomeSlice.actions;
export default welcomeSlice.reducer;