import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../types";

const students = localStorage.getItem("data");

export interface StudentState {
   value: IUser[];
}

const initialState: StudentState = {
   value: students ? JSON.parse(students) : [],
};

export const studentSlice = createSlice({
   name: "students",
   initialState,
   reducers: {
      create: (state, action: PayloadAction<IUser>) => {
         state.value.push(action.payload);

         localStorage.setItem("data", JSON.stringify(state.value));
      },

      remove: (state, action: PayloadAction<number | undefined>) => {
         state.value = state.value.filter((item) => item.id !== action.payload);

         localStorage.setItem("data", JSON.stringify(state.value));
      },
   },
});

export const { create, remove } = studentSlice.actions;

export default studentSlice.reducer;
