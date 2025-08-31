import { createSlice } from '@reduxjs/toolkit';

export const addtocartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
  },
  reducers: {
    addtocart: (state, action) => {
      let cart = state.value.find(item => item.title === action.payload.title);

      if (cart) {
        cart.quantity += 1;
      } else {
        state.value.push({ ...action.payload, quantity: 1 });
      }
    },

    
    decreaseQuantity: (state, action) => {
      let cart = state.value.find(item => item.title === action.payload.title);

      if (cart && cart.quantity > 1) {
        cart.quantity -= 1;
      } else {
       
        state.value = state.value.filter(item => item.title !== action.payload.title);
      }
    },

   
    removeFromCart: (state, action) => {
      state.value = state.value.filter(item => item.title !== action.payload.title);
    },
  },
});

export const { addtocart, decreaseQuantity, removeFromCart } = addtocartSlice.actions;

export default addtocartSlice.reducer;
