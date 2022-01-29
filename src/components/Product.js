import { useDispatch } from 'react-redux';
import { addToCart } from '../reducers/cartSlice';

function Product({ product }) {
  const dispatch = useDispatch();
  return (
    <div>
      <img src={product.image} />
      <p>{product.name}</p>
      <button onClick={() => dispatch(addToCart(product))}>Add cart</button>
    </div>
  );
}

export default Product;
