export const BASE_URL = 'https://murmuring-tor-81614.herokuapp.com';

export async function fetchProducts(dealers = []) {
  return fetch(`${BASE_URL}/api/goods/?dealers=${dealers.join(',')}`).then(r =>
    r.json(),
  );
}

export async function fetchDealers() {
  return fetch(`${BASE_URL}/api/dealers/`).then(r => r.json());
}
