import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 1,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    inc: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

export const { inc, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
