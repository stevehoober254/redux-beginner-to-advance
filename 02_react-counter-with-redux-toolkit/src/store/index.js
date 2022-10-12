import {configureStore, createSlice} from '@reduxjs/toolkit';


const counterSlice = createSlice({
    name: 'counter',
    initialState: {counter:0},
    reducers:{
        add(state,action){
            state.counter ++;
        },
        less(state,action){
            state.counter --
        },
        addBy(state,action){
            state.counter += action.payload;
        }
    }
})

export const store = configureStore({
    reducer: counterSlice.reducer
});
export const actions = counterSlice.actions;