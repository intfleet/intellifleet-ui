import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menu: [],
};

const appInfoSlice = createSlice({
  name: 'appInfo',
  initialState,
  reducers: {
    setAppInfoMenu: (state, action) => {
      Object.assign(state, action.payload); // equivalent to spreading in old reducer
    },
  },
});

export const { setAppInfoMenu } = appInfoSlice.actions;
export default appInfoSlice.reducer;