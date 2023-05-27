import { createSlice } from "@reduxjs/toolkit";

const isLoadingSlice = createSlice({
  name: "isLoading",
  initialState: false,
  reducers: {
    loadInProgress: () => true,
    loadSuccessfull: () => false,
    loadError: () => false,
  },
});

export const { loadInProgress, loadError, loadSuccessfull } =
  isLoadingSlice.actions;

export default isLoadingSlice.reducer;
