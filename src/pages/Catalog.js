import { useSelector } from 'react-redux';
import { selectProducts, selectProductsStatus } from '../reducers/catalogSlice';
import Product from '../components/Product';
import '../styles/catalog.css';

function Catalog() {
  const products = useSelector(selectProducts);
  const status = useSelector(selectProductsStatus);
  return (
    <div className="catalog">
      {status === 'loading' && <p>Loading...</p>}
      {status === 'error' && <p>Error ¯\_(ツ)_/¯</p>}
      {products.length === 0 && status === 'idle' && <p>No products</p>}
      {products.map(product => (
        <Product key={`catalog-product-${product.id}`} product={product} />
      ))}
    </div>
  );
}

export default Catalog;
