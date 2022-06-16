import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';

const Home = React.lazy(() => import('./views/Home'));
const Inventory = React.lazy(() => import('./views/Inventory'));
const Retailer = React.lazy(() => import('./views/Retailer'));
const Keg = React.lazy(() => import('./views/Keg'));
const Product = React.lazy(() => import('./views/Product'));

function App() {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route exact path="/" name="Home Page" element={<Home />} />
          <Route exact path="/inventory" name="Inventory Page" element={<Inventory />} />
          <Route exact path="/retailer" name="Retailer Full Product" element={<Retailer />} />
          <Route exact path="/keg" name="Keg Availability" element={<Keg />} />
          <Route exact path="/product" name="Product Availability" element={<Product />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
