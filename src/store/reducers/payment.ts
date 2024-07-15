import { createSlice } from '@reduxjs/toolkit';

type PaymentState = {
  paymentIsOpen: boolean
}

const initialState: PaymentState = {
  paymentIsOpen: false
};

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    openPayment: (state) => {
      state.paymentIsOpen = true;
    },
    closePayment: (state) => {
      state.paymentIsOpen = false;
    }
  }
});

export const { openPayment, closePayment } = paymentSlice.actions;

export default paymentSlice.reducer;