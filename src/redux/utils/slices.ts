import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ScreenSize {
  width: number;
  height: number;
}

const initialState: ScreenSize = {
  width: window.innerWidth,
  height: window.innerWidth,
};

export const utilsSlice = createSlice({
  name: "utils",
  initialState,
  reducers: {
    setSize: (state, action: PayloadAction<ScreenSize>) => {
      state.width = action.payload.width;
      state.height = action.payload.height;
    },
  },
});

export type { ScreenSize };
export const utilsActions = utilsSlice.actions;
export const utilsReducer = utilsSlice.reducer;
