import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import logger from "./middlewares/logger";
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
