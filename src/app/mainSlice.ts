import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    answer: 0,
    userGuess: null,
    currentRoundNum: 1,
    maxRoundCount: 11,
    rightAnswerCount: 0,
    maxAnswer: 99,
    audioSpeed: 1,
};


export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        generateAnswer: (state) => {
            state.answer = Math.ceil(Math.random() * state.maxAnswer);
        },
        setUserGuess: (state, action) => {
            state.userGuess = action.payload;

            if (state.answer == state.userGuess) {
                state.rightAnswerCount = state.rightAnswerCount + 1;
            }

            // check if round limit has elapsed
            if (state.currentRoundNum < state.maxRoundCount) {
                state.answer = Math.ceil(Math.random() * state.maxAnswer);
                state.currentRoundNum = state.currentRoundNum + 1;
            }

        },
        setAudioSpeed: (state, action) => {
            state.audioSpeed = action.payload;
        },
        resetState: () => initialState
    }
})

export const { generateAnswer, setUserGuess, resetState, setAudioSpeed } = mainSlice.actions;

export default mainSlice.reducer;