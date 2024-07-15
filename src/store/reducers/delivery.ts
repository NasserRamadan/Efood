import { createSlice } from '@reduxjs/toolkit';

type DeliveryState = {
  deliveryIsOpen: boolean
}

const initialState: DeliveryState = {
  deliveryIsOpen: false
};

const deliverySlice = createSlice({
  name: 'delivery',
  initialState,
  reducers: {
    openDelivery: (state) => {
      state.deliveryIsOpen = true;
    },
    closeDelivery: (state) => {
      state.deliveryIsOpen = false;
    }
  }
});

export const { openDelivery, closeDelivery } = deliverySlice.actions;

export default deliverySlice.reducer;