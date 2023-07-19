import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from './features/counter/counterSlice';
import cartReducer from './features/cart/cartSlice';
import productReducer from './features/products/productSlice';
import { api } from './api/apiSlice';
import userReducer from './features/user/userSlice';
const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    user: userReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
