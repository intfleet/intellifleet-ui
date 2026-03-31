import { configureStore } from '@reduxjs/toolkit';
import appInfoReducer from "../reducers/appInfoReducer";


const store = configureStore({
    reducer: {
      appInfo: appInfoReducer, // keep a cleaner name in state
    },
    devTools: true, // enabled by default in dev mode
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware(), // includes thunk by default
  });
  
  export default store;