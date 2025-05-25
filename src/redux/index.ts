import { configureStore } from "@reduxjs/toolkit";
import counter from "./features/counter.slice";
import token from "./features/token.slice";
import saved from "./features/saved.slice";
import electronics from "./features/eletronics.slice";
export const store = configureStore({
   reducer: {
      electronics,
      counter,
      token,
      saved,
      // wishlist,
      // cart,
   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
