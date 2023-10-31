import { useState } from 'react';
import LayoutComponent from './layouts/LayoutComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailProduct from './pages/DetailProduct';
import CartPage from './pages/CartPage';
import SearchResult from './pages/SearchResult';
import ChatBox from './pages/ChatBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import TransactionReceipt from "./pages/TransactionReceipt"; 

function App() {
  return (
    <BrowserRouter>
      <LayoutComponent>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<DetailProduct />} />
          <Route exact path="/cart" element={<CartPage />} />
          <Route path="/search-result" element={<SearchResult />} /> 
          <Route path="/chat" element={<ChatBox />} />
          <Route path="/transaction-receipt" element={<TransactionReceipt />} />
          <Route path="/search-result" element={<SearchResult />} />
        </Routes>
      </LayoutComponent>
    </BrowserRouter>
  );
}

export default App;
