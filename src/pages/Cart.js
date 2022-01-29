import { useDispatch, useSelector } from 'react-redux';
import {
  selectProductsInCart,
  selectTotalPrice,
  selectTotalQuantity,
} from '../reducers/cartSlice';

function Cart() {
  const productsInCart = useSelector(selectProductsInCart);
  const totalPrice = useSelector(selectTotalPrice);
  const totalQuantity = useSelector(selectTotalQuantity);

  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch();

  return (
    <div>
      <h3>{`Cart - ${totalPrice} - ${totalQuantity}`}</h3>
      {productsInCart.map(item => (
        <div key={`cart-product-${item.product.id}`}>
          <p>
            {item.product.name} - {item.quantity}
          </p>
          <button>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
