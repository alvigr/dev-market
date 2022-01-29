import { useSelector } from 'react-redux';
import { selectProducts, selectProductsStatus } from '../reducers/catalogSlice';
import Product from '../components/Product';

function App() {
  const products = useSelector(selectProducts);
  const status = useSelector(selectProductsStatus);
  return (
    <div>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <p>{status}</p>
      {products.map(product => (
        <Product key={`catalog-product-${product.id}`} product={product} />
      ))}
    </div>
  );
}

export default App;
