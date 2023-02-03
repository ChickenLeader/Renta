import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  toast: null,
  isSignupCase: null,
  filtersData: {},
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    showLoader: (state) => {
      state.isLoading = true;
    },
    hideLoader: (state, action) => {
      state.isLoading = false;
    },
    setSuccessToast: (state, action) => {
      state.toast = { type: "success", message: action.payload };
    },
    setDangerToast: (state, action) => {
      state.toast = { type: "danger", message: action.payload };
    },
    hideToast: (state) => {
      state.toast = null;
    },
    setFiltersData: (state, action) => {
      state.filtersData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  showLoader,
  hideLoader,
  setSuccessToast,
  setDangerToast,
  hideToast,
  setFiltersData,
} = appSlice.actions;

export default appSlice.reducer;
