import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { Product, Cart, SaveLater } from './screens';
import { Navbar } from './components';

const App = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="cart" element={<Cart />} />
          <Route path="savelater" element={<SaveLater />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
