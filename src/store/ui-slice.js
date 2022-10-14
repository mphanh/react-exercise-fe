import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: null,
  loading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    catchError(state, action) {
      state.error = action.payload;
    },
    resetLoading(state) {
      state.loading = !state.loading;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;