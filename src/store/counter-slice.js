import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    name: "counter",
    initialState: initialCounterState,
    reducers: {
        increment(state, action) {
            const {payload: {type, value}} = action;
            switch(type) {
                case "custom":
                    state.counter += value;
                    break;
                default:
                    state.counter++;
            }      
        },
        decrement(state) {
            state.counter--;
        },
        clear(state) {
            state.counter = 0;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;