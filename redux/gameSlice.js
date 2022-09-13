import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    gameOver: true
};

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        increment: state => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        setGameOver: (state, action) => {
            state.gameOver = action.payload
        }
    }
});

export const { increment, decrement, incrementByAmount, endGame, setGameOver } = gameSlice.actions;

export default gameSlice.reducer;