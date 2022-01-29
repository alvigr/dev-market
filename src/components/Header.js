import { Link } from 'react-router-dom';
import CartButton from './CartButton';
import '../styles/header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-body">
        <div className="main-menu">
          <div className="site-logo">
            <Link to="/">
              <span>DEV</span>
              MARKET
            </Link>
          </div>
          <ul className="main-menu-items">
            <li>
              <Link to="/">Catalog</Link>
            </li>
          </ul>
        </div>
        <CartButton />
      </div>
    </header>
  );
}

export default Header;
