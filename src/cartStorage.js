const CART_STATE_KEY = 'cart_state';

export function setCartState(state) {
  window.localStorage[CART_STATE_KEY] = JSON.stringify(state);
}

export function getCartState() {
  const cartState = window.localStorage[CART_STATE_KEY];
  return cartState ? JSON.parse(cartState) : null;
}
