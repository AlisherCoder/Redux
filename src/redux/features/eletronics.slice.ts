import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IElectronic } from "../../types";

const data = localStorage.getItem("data");
const wishlist = localStorage.getItem("wishlist");

export interface ElectronicsState {
   value: IElectronic[];
   wishlist: IElectronic[];
}

const initialState: ElectronicsState = {
   value: data ? JSON.parse(data) : [],
   wishlist: wishlist ? JSON.parse(wishlist) : [],
};

export const electronicsSlice = createSlice({
   name: "create",
   initialState,
   reducers: {
      create: (state, action: PayloadAction<IElectronic>) => {
         state.value.push(action.payload);

         localStorage.setItem("data", JSON.stringify(state.value));
      },

      remove: (state, action: PayloadAction<number | undefined>) => {
         state.value = state.value.filter((val) => val.id !== action.payload);
         state.wishlist = state.wishlist.filter((val) => val.id !== action.payload);

         localStorage.setItem("data", JSON.stringify(state.value));
         localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
      },

      addWishlist: (state, action: PayloadAction<IElectronic>) => {
         const foundItem = state.wishlist.find(
            (item: IElectronic) => item.id === action.payload.id
         );

         if (foundItem) {
            state.wishlist = state.wishlist.filter(
               (item: IElectronic) => item.id !== action.payload.id
            );
         } else {
            state.wishlist.push(action.payload);
         }

         localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
      },
   },
});

export const { create, remove, addWishlist } = electronicsSlice.actions;

export default electronicsSlice.reducer;
