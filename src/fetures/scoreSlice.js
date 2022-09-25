import { createSlice } from '@reduxjs/toolkit'

export const scoreSlice = createSlice({
    name : 'score',
    initialState: {
        score: 0,
        count: 1,
        logWindow: false,
        currentUser: false,
    },
    reducers: {
        trueAnswer: (state) => {
            state.score += 10
        },
        falseAnswer: (state) => {
            state.score -=3
        },
        increseCount: (state) => {
            state.count +=1
        },
        
        resetBtn: (state) => {
            state.count = 1;
            state.score = 0;
        },
        endBtn: (state) => {
            state.count = 7;
        }
    }
})

export const { trueAnswer, falseAnswer,increseCount, resetBtn, endBtn } = scoreSlice.actions

export default scoreSlice.reducer