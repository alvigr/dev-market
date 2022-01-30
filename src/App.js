import { Routes, Route } from 'react-router-dom';
import Catalog from './pages/Catalog';
import Cart from './pages/Cart';
import Layout from './components/Layout';
import './styles/app.css';

function App() {
  return (
    <div className="app">
      <Layout>
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
