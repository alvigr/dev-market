import { Routes, Route } from 'react-router-dom';
import Catalog from './pages/Catalog';
import Cart from './pages/Cart';
import './styles/app.css';
import Header from './components/Header';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
