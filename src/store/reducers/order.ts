import { createSlice } from '@reduxjs/toolkit';

type OrderState = {
  orderIsOpen: boolean
}

const initialState: OrderState = {
  orderIsOpen: false
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    openOrder: (state) => {
      state.orderIsOpen = true;
    },
    closeOrder: (state) => {
      state.orderIsOpen = false;
    }
  }
});

export const { openOrder, closeOrder } = orderSlice.actions;

export default orderSlice.reducer;