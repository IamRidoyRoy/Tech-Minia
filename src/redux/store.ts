import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import cartReducer from './features/cart/cartSlice';
import logger from './middlewares/logger';
const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
