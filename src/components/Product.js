import { useDispatch } from 'react-redux';
import { addToCart } from '../reducers/cartSlice';

function Product({ product }) {
  const dispatch = useDispatch();
  return (
    <div className="product">
      <img alt={`image-${product.name}`} src={product.image} />
      <p>{product.name}</p>
      <p>$ {product.price}</p>
      <button onClick={() => dispatch(addToCart(product))}>Add cart</button>
    </div>
  );
}

export default Product;
