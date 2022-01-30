import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../reducers/cartSlice';
import Button from './Button';

function QuantityPicker({ item }) {
  const dispatch = useDispatch();
  return (
    <div className="product-quantity-picker">
      <Button onClick={() => dispatch(removeFromCart(item.product))} secondary>
        −
      </Button>
      <span>{item.quantity}</span>
      <Button onClick={() => dispatch(addToCart(item.product))} secondary>
        +
      </Button>
    </div>
  );
}

export default QuantityPicker;
