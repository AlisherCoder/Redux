// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { ElectronicsState } from "./eletronics.slice";
// import { IElectronic } from "../../types";

// const wishlist = localStorage.getItem("wishlist");

// const initialState: ElectronicsState = {
//    value: wishlist ? JSON.parse(wishlist) : [],
// };

// export const wishlistSlice = createSlice({
//    name: "wishlist",
//    initialState,
//    reducers: {
//       addWishlist: (state, action: PayloadAction<IElectronic>) => {
//          const foundItem = state.value.find((item: IElectronic) => item.id === action.payload.id);

//          if (foundItem) {
//             state.value = state.value.filter((item: IElectronic) => item.id !== action.payload.id);
//          } else {
//             state.value.push(action.payload);
//          }

//          localStorage.setItem("wishlist", JSON.stringify(state.value));
//       },
//    },
// });

// export const { addWishlist } = wishlistSlice.actions;

// export default wishlistSlice.reducer;
