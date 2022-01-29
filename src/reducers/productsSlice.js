import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BASE_URL, fetchProducts } from '../api';

const initialState = {
  items: [],
  status: 'idle',
};

export const loadProductsAsync = createAsyncThunk(
  'products/fetchProducts',
  async dealers => {
    return await fetchProducts(dealers);
  },
);

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loadProductsAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(loadProductsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items = action.payload.map(item => ({
          ...item,
          id: item.name,
          image: `${BASE_URL}${item.image}`,
        }));
      });
  },
});

export const selectProducts = state => state.products.items;
export const selectProductsStatus = state => state.products.status;

export default productsSlice.reducer;
