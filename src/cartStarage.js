const CART_SATE_KEY = 'cart_state';

export function setCartState(state) {
  window.localStorage[CART_SATE_KEY] = JSON.stringify(state);
}

export function getCartState() {
  const cartState = window.localStorage[CART_SATE_KEY];
  return cartState ? JSON.parse(cartState) : null;
}
