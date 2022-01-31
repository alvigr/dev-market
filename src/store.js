import { configureStore } from '@reduxjs/toolkit';
import catalogReducer from './reducers/catalogSlice';
import cartReducer from './reducers/cartSlice';
import { setCartState } from './cartStorage';

function saveCartState({ getState }) {
  return next => action => {
    if (action.type.includes('cart/')) {
      const result = next(action);
      setCartState(getState().cart);
      return result;
    }
    return next(action);
  };
}

export const store = configureStore({
  reducer: {
    catalog: catalogReducer,
    cart: cartReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(saveCartState),
});
