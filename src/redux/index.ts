import { configureStore } from "@reduxjs/toolkit";
import { mainApi } from "./api";
import counter from "./features/counter.slice";

export const store = configureStore({
   reducer: {
      counter,
      [mainApi.reducerPath]: mainApi.reducer,
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(mainApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
