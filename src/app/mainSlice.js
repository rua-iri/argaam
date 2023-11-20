import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    answer: null,
    userGuess: null,
    roundNumberCount: 1,
    totalRoundCount: 10,
    rightAnswerCount: 0,
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
        },
        setRoundNumberCount: (state, action) => {
            state.roundNumberCount = action.payload;
        },
        setRightAnswerCount: (state, action) => {
            state.rightAnswerCount = action.payload;
        },
        setTotalRoundCount: (state, action) => {
            state.totalRoundCount = action.payload;
        }
    }
})

export const { setAnswer, setUserGuess } = mainSlice.actions;

export default mainSlice.reducer;