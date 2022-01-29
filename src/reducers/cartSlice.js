import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const findById = (items, id) => {
  return items.find(item => item.id === id);
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const addedItem = findById(state.items, action.payload.id);
      if (addedItem) {
        state.items = state.items.map(item => {
          if (item.id !== addedItem.id) return item;
          return { ...item, quantity: item.quantity + 1 };
        });
      } else {
        state.items = [...state.items, { id: action.payload.id, quantity: 1 }];
      }
    },
    removeFromCart: (state, action) => {
      const addedItem = findById(state.items, action.payload.id);
      if (addedItem.quantity > 1) {
        state.items = state.items.map(item => {
          if (item.id !== addedItem.id) return item;
          return { ...item, quantity: item.quantity - 1 };
        });
      } else {
        state.items = state.items.filter(item => item.id !== action.payload.id);
      }
    },
    clearCart: state => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

// TODO: optimisation - use createSelector
// TODO: filter available products
export const selectProductsInCart = state => {
  return state.cart.items
    .map(item => {
      const product = findById(state.products.items, item.id);
      if (!product) return null;
      return { product, quantity: item.quantity };
    })
    .filter(item => item);
};
export const selectTotalPrice = state => {
  const products = selectProductsInCart(state);
  return products.reduce(
    (value, item) => +(value + item.product.price * item.quantity).toFixed(2),
    0,
  );
};
export const  selectTotalQuantity = state => {
  const products = selectProductsInCart(state);
  return products.reduce(
    (value, item) => value + item.quantity,
    0,
  );
};

export default cartSlice.reducer;
