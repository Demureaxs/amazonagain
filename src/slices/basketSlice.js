import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    // actions
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      // state.items find index return the item index
      const index = state.items.findIndex(basketItem => {
        return basketItem.id === action.payload.id;
      });

      // spread the items to a placeholder array
      let newBasket = [...state.items];

      // if the index is greater than or equal to 0
      if (index >= 0) {
        //item exists remove it
        newBasket.splice(index, 1);
      } else {
        // if not warn
        console.warn(
          `Can't remove product (id: ${action.payload.id}) as it is not in the basket`
        );
      }

      // set state.items = to newBasket
      state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = state => state.basket.items;
export const selectTotal = state =>
  state.basket.items.reduce((total, item) => total + item.price, 0);

export default basketSlice.reducer;
