import React from 'react';
import logo from './stange-design-logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrintareaStool from './PrintareaStool';
import PrintareaSitzwuerfel from './PrintareaSitzwuerfel';


import './css/styles.css';
import Header from './Header';
import Main from './Main';
import Products from './Products';
import ProductList from './ProductList';

function App() {
  return (

    <BrowserRouter >

      {/* <div className="app-js"> */}

      <Header />
      {/* <Main /> */}
      {/* <Products /> */}

      <Routes >
        <Route exact path="/" element={<Products />} />
        <Route exact path="/productlist" element={<ProductList />} />
        <Route exact path="/printareastool" element={<PrintareaStool />} />
        <Route exact path="/printareasitzwuerfel" element={<PrintareaSitzwuerfel />} />
      </Routes>

      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;