import { useDispatch } from 'react-redux';
import { addToCart } from '../reducers/cartSlice';
import '../styles/product.css';
import Button from './Button';

function Product({ product }) {
  const dispatch = useDispatch();
  return (
    <div className="product">
      <img alt={`image-${product.name}`} src={product.image} />
      <div className="product-info">
        <span className="product-name">{product.name}</span>
        <div className="product-price">
          <span>$ {product.price}</span>
          <Button onClick={() => dispatch(addToCart(product))}>
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Product;
