import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    answer: null,
    userGuess: null,
    currentRoundNum: 1,
    totalRoundCount: 10,
    rightAnswerCount: 0,
    maxAnswer: 99,
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
            if (state.currentRoundNum >= state.totalRoundCount) {
                alert('Game Complete')
                // TODO handle game completion

                // 1. A number is randomly generated
                // 2. The user enters a number
                // 3. If the user's number matches the random number the user gains a point
                // 4. Another new number is generated
                // 5. If round limit is reached, game ends

            } else {
                state.answer = Math.ceil(Math.random() * state.maxAnswer);
                state.currentRoundNum = state.currentRoundNum + 1;
            }

        },
        resetState: () => initialState
    }
})

export const { generateAnswer, setUserGuess, resetState } = mainSlice.actions;

export default mainSlice.reducer;