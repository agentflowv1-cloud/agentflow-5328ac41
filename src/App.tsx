import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProductDetailsPage } from './pages/ProductDetailsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/product/:id" element={<ProductDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;