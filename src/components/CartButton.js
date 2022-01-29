import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTotalPrice, selectTotalQuantity } from '../reducers/cartSlice';
import '../styles/cartButton.css';

function CartButton() {
  const totalPrice = useSelector(selectTotalPrice);
  const totalQuantity = useSelector(selectTotalQuantity);
  return (
    <Link to="cart">
      <div className="cart-button">
        <div>
          {totalQuantity > 0 && (
            <div className="count-badge">{totalQuantity}</div>
          )}
          <img alt="cart" />
        </div>
        <div className="cart-button-body">
          <span className="cart-button-title">Cart</span>
          <span className="cart-button-total-price">$ {totalPrice}</span>
        </div>
      </div>
    </Link>
  );
}

export default CartButton;
