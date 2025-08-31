import { createSlice } from '@reduxjs/toolkit';


export const counterSlice = createSlice({
  name: "count",
  initialState: {
    value: 0,
  },
  reducers: {
    counterwork: (state,action) => {
      
      state.value += action.payload;
     
    },
    
  },
});



export const { counterwork} = counterSlice.actions;

export default counterSlice.reducer;
