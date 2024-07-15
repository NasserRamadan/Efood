import { configureStore } from '@reduxjs/toolkit';

import api from '../services/api';
import cartReducer from './reducers/cart';
import deliveryReducer from './reducers/delivery';
import paymentReducer from './reducers/payment';
import orderReducer from './reducers/order';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    cart: cartReducer,
    delivery: deliveryReducer,
    order: orderReducer,
    payment: paymentReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
});

export type RootReducer = ReturnType<typeof store.getState>
