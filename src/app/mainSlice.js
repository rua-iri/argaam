import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    answer: null,
    userGuess: null,
};


export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setAnswer: (state, action) => {
            state.answer = action.payload;
        }, 
        setUserGuess: (state, action) => {
            state.userGuess = action.payload;
        }
    }
})

export const {setAnswer, setUserGuess} = mainSlice.actions;

export default mainSlice.reducer;