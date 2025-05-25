import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IRecipe } from "../../types";

export interface SavedState {
   value: IRecipe[];
}

const initialState: SavedState = {
   value: [],
};

export const savedSlice = createSlice({
   name: "saved",
   initialState,
   reducers: {
      toggleSaved: (state, action: PayloadAction<IRecipe>) => {
         const recipe = state.value.find((val) => val.id == action.payload.id);

         if (recipe) {
            state.value = state.value.filter((val) => val.id !== action.payload.id);
         } else {
            state.value.push(action.payload);
         }
      },
   },
});

export const { toggleSaved } = savedSlice.actions;

export default savedSlice.reducer;
