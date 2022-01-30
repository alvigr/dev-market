import { useDispatch, useSelector } from 'react-redux';
import {
  selectProductsInCart,
  selectTotalPrice,
  selectTotalQuantity,
  clearCart,
} from '../reducers/cartSlice';
import Button from '../components/Button';
import '../styles/cart.css';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';

function Cart() {
  const productsInCart = useSelector(selectProductsInCart);
  const totalPrice = useSelector(selectTotalPrice);
  const totalQuantity = useSelector(selectTotalQuantity);
  const dispatch = useDispatch();

  const isEmpty = totalQuantity === 0;

  return (
    <div className="cart">
      <div className="cart-list">
        <div className="cart-title">
          <h1>
            {isEmpty
              ? 'Your Cart is empty'
              : `Shopping Cart (${totalQuantity})`}
          </h1>
          {!isEmpty && (
            <Button onClick={() => dispatch(clearCart())} secondary>
              Clear cart
            </Button>
          )}
        </div>
        {isEmpty && <Link to="/">Go to catalog</Link>}
        <div className="cart-items">
          {productsInCart.map(item => (
            <CartItem key={`cart-product-${item.product.id}`} item={item} />
          ))}
        </div>
      </div>
      <div className="cart-total">
        {!isEmpty && (
          <>
            <span className="cart-total-title">Order Summary</span>
            <div className="cart-total-info">
              <span>Total</span>
              <span className="cart-total-price">{`$ ${totalPrice}`}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
