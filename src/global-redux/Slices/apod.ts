"use client";

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface apodState {
  data: any;
  loading: boolean;
  error: any;
}

const initialState: apodState = {
  data: null,
  loading: false,
  error: null,
};

export const apodSlice = createSlice({
  name: "NasaPicOfTheDay",
  initialState,
  reducers: {
    loader: (state) => {
      state.loading = true;
    },
    updateData: (state = initialState, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
    error: (state, action: PayloadAction<any>) => {
      (state.loading = false), (state.error = action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { loader, updateData, error } = apodSlice.actions;

export const apodData = (state: any) => state.apod.data;

export default apodSlice.reducer;
