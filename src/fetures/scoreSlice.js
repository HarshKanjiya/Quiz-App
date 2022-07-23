import { createSlice } from '@reduxjs/toolkit'

export const scoreSlice = createSlice({
    name : 'score',
    initialState: {
        score: 0,
        count: 1,
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
        }
    }
})

export const { trueAnswer, falseAnswer,increseCount } = scoreSlice.actions

export default scoreSlice.reducer