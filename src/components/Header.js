import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTotalPrice, selectTotalQuantity } from '../reducers/cartSlice';

function Header() {
  const totalPrice = useSelector(selectTotalPrice);
  const totalQuantity = useSelector(selectTotalQuantity);
  return (
    <header className="App-header">
      <div>
        <div>
          <Link to="/">
            <h1>DevMarket</h1>
          </Link>
        </div>
        <div>
          <Link to="/">
            <p>Catalog</p>
          </Link>
        </div>
      </div>
      <div>
        <p>
          <Link to="cart">Cart</Link>
        </p>
        <p>$ {totalPrice}</p>
        <p>{totalQuantity}</p>
      </div>
    </header>
  );
}

export default Header;
