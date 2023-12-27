import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    answer: null,
    userGuess: null,
    roundNumberCount: 1,
    totalRoundCount: 10,
    rightAnswerCount: 0,
    answerResponse: "",
};


export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        generateAnswer: (state) => {
            state.answer = Math.ceil(Math.random() * 50);
        },
        setUserGuess: (state, action) => {
            state.userGuess = action.payload;

            if (state.answer == state.userGuess) {
                state.answerResponse = "Correct";
                state.rightAnswerCount = state.rightAnswerCount + 1;
            } else {
                state.answerResponse = "Incorrect";
            }

            // check if round limit has elapsed
            if (state.roundNumberCount===state.totalRoundCount) {
                // TODO handle game completion
            } else {
                state.answer = Math.ceil(Math.random() * 50);
                state.roundNumberCount = state.roundNumberCount + 1;    
            }

        },
    }
})

export const { generateAnswer, setUserGuess, setRoundNumberCount } = mainSlice.actions;

export default mainSlice.reducer;