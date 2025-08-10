
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartDrawer from './components/CartDrawer';
import BlogDetail from './components/BlogDetail';

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/product/:id' element={<ProductDetailPage />} />
        <Route path="/blog/:id" element={<BlogDetail />} />

  
    </Routes>
    <CartDrawer />
    </>
  );
};

export default App;
