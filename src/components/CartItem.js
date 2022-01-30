import QuantityPicker from './QuantityPicker';
import '../styles/cartItem.css';

function CartItem({ item }) {
  return (
    <div className="cart-item">
      <img alt={`image-${item.product.name}`} src={item.product.image} />
      <div className="product-info">
        <div>
          <span className="product-name">{item.product.name}</span>
          <span>$ {item.product.price}</span>
        </div>
        <QuantityPicker item={item} />
      </div>
    </div>
  );
}

export default CartItem;
