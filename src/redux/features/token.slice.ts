import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface TokenState {
  value: string | null
}

const initialState: TokenState = {
  value: null,
}

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
    logout: (state)=>{
        state.value = null
    }
  },
})

export const { login, logout } = tokenSlice.actions

export default tokenSlice.reducer

